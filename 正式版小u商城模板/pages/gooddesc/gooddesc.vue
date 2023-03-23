<template>
	<view class="container" >
	  <view v-for="(item,index) in list" :key="index">
		<!-- 详情图片 -->
		<view class="detailImage">
			<image :src="item.img">
		</view>
		
		<!-- 详情基本信息 -->
		<view class="detailInfo">
			<view class="detailPrice">
				<view class="detailPrice_left">
					<text>￥</text>
					<text>{{item.price}}</text>
					<text>￥{{item.market_price}}</text>
				</view>
				<view class="detailPrice_right" hover-class="touchOpacity">
					<image src="../../static/icon/follow.png"></image>
					<text>收藏</text>
				</view>
			</view>		
			<view class="detaildesc">
				<text>{{item.goodsname}}</text>
				<text></text>
			</view>
			<view class="detailslogan">11.11限时299元起</view>
			<view class="detaillook" hover-class="touchOpacity">
				<text>此商品于2020-11-11,结束闪购特卖，品牌美妆闪购专场</text>
				<text>查看 ></text>
			</view>
		</view>
		
		<!-- 基本信息改变 -->
		<view class="changeInfo">
			<!-- 优惠券 -->
			<view class="ticketstage">
				<view class="ticketstage_title">领券</view>
				<view class="ticketstage_ticket">
					<view class="">100</view><view >50</view><view >20</view>
				</view>
			</view>
			<!-- 分期 -->
			<view class="ticketstage">
				<view class="ticketstage_title">分期</view>
				<view class="ticketstage_stage" hover-class="touchOpacity">
						<text @click="choiceStage">{{stage[value]}}</text>
						<text> > </text>
				</view>
			</view>
			
			<!-- 商品属性 -->
			<view class="changeState">
				<view class="productStat">
					<label for="">商品属性</label>
				</view>
				<view class="productGuige">
					<label>{{item.specsname}}</label>
					<view class="changethreed3i1"  >{{item.specsattr}}</view>
					<view class="threed3i1"  >灰色</view>
				</view>
			</view>
		</view>
		<!-- 商品详情 -->
		 <view class="productDetail">
			<view class="productDetailTitle">商品详情</view>
			<!-- 需要处理图片自适应问题 -->
			<rich-text :nodes="item.description"></rich-text>
			<!-- <image :src="productDetailImage.detailImage" mode="widthFix" style="width: 100%;" /> -->
		</view>
		
		<!-- 商品评价区域 -->
		<view class="productEval">
			<view class="eval">商品评价</view>
			<view v-for="(item,index) in evals" :key="index">
				<label class="evalUsername">{{item.name}}</label>
				<label class="evalUsertitle">{{item.title}}</label>					
				<view class="evalImage">
					<image v-for="(i,ind) in item.img" :key="ind" :src="i">
				</view>
				<label class="evalTime">{{item.time}}</label>
			</view>
		</view>
		
		<!-- 底部按钮 -->
		<view class="navigation">
			<view class="left">
				<view class="item">
					<u-icon name="server-fill" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">客服</view>
				</view>
				<view class="item">
					<u-icon name="home" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">店铺</view>
				</view>
				<view class="item car" @click="goCart">
					<u-badge class="car-num" :count="cartCount" type="error" :offset="[-3, -6]"></u-badge>
					<u-icon name="shopping-cart" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">购物车</view>
				</view>
			</view>
			<view class="right">
				<view class="cart btn u-line-1" >加入购物车</view>
				<view class="buy btn u-line-1">立即购买</view>
			</view>
		</view>
		
		<!-- 分享给朋友 微信端 -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="shareFriend" >
			<button type="default" open-type="share">
				<image src="../../static/icon/wxshare.png" mode=""></image>
			</button>
		</view>
		<!-- #endif -->
		
		<!-- 客服 -->
		<view class="kefu">
			<image src="../../static/icon/kefu.png" @click="goKefu"></image>
		</view>
		
	</view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				src:'',
				stage:['可选3/6/12期','3期','6期','12期'],//分期默认值
				value:0,//默认分期提示
				cartCount:'',//初始化购物车右上角角标
				goodDesc:{},
				productDetailImage:{
					detailImage:"../../static/img/detail/2.jpg"
				},
				evals: [{  //评价内容
					name: '小李白',
					title: '效果很好，物流到位，下次继续来',
					img: ["../../static/img/detail/pingjia1.jpg","../../static/img/detail/pingjia1.jpg","../../static/img/detail/pingjia1.jpg","../../static/img/detail/pingjia1.jpg","../../static/img/detail/pingjia2.jpg","../../static/img/detail/pingjia3.jpg"],
					time: '2020-01-13'
				}]
			}
		},
		onLoad: function (options) {
			console.log(options.id);
			this._desc(options)
		},
		methods: {	
			_desc:async function(options){
				try{
					console.log(options.id);
				let  res=await this.$api.desc(options)
				this.list=this.$tool.imgurl(res.list)
				console.log(this.list);
				}catch(err){
					this.$tool.error(err)
				}
				
			},
			// 客服页面
			goKefu(){
				uni.navigateTo({
					url:'../HM-chat/HM-chat'
				})
			},
			// 分期事件
			choiceStage(){
				uni.showActionSheet({
					itemList:['3期','6期','12期'],
					itemColor:'#FF6040',
					success:res=>{
						this.value = res.tapIndex+1
					},
					fail:err=>{this.value=0}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 引入样式 */
	@import '@/static/css/gooddesc.scss';
</style>

