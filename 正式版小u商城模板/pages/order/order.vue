<template>
	<view class="order_box">
		<!-- head区域 -->
		<view class="head">
			<view class="useraddress" >
				<view class="addressinfo" v-if="localBuffer"  hover-class="touchOpacity">
					<text space="ensp" class="addressinfo_top">{{address.username}}   {{address.userphone}}</text>
					<view class="addressinfo_bottom">
						<!-- <uni-tag  size="small" type="error" :inverted="true" :circle="true" text="默认"></uni-tag>
						<uni-tag  size="small" type="error" :inverted="true" :circle="true" text="默认"></uni-tag> -->
						<text class="addressinfo_bottom_status" v-if="address.status ==1">默认</text>
						<text class="addressinfo_bottom_label" v-if="address.label != '' ">{{address.label}}</text>
						<text class="addressinfo_bottom_useraddress">{{address.location+address.useraddress}}</text>
					</view>
				</view>
				<view class="addressinfo" v-else>
					<u-button type="warning" :plain="true" @click="addressAdd">+点击完善收货地址</u-button>
				</view>
			</view>
		</view>
		
		<view class="order_ticket">
			<image src="../../static/icon/index/kingkong/selfsupport.png"></image>
			<text>品牌精选</text>
			<text>以免运费 |</text>
			<text>领券</text>
		</view>
		<!-- 商品信息区域 -->
		<view class="order_view">
			<!-- 明日来写购物车基本信息 -->
			<view 
				class="cartInfochild" 
				v-for="(item,index) in orders"
				:key="index"
			>
				<!-- 图片 -->
				<image :src="item.src" class="cartInfo_image"></image>
				<!-- 信息 -->
				<view class="cartInfo_info">
					<text>{{item.goodsname}}</text>
					<text>￥
						<text style="font-size: 40rpx;color:#FF6040;">200</text>
					</text>
					<text >七天无理由退货</text>
				</view>
				<!-- 加减数量 -->
				<view class="cartInfo_num">
					<label> ×{{item.num}}</label>
				</view>
			</view>
		</view>
		
		<!-- 具体详细1 -->
		<view class="resDetail">
			<view hover-class="touchOpacity">
				<label for="" class="resDetail_title">发票类型</label>
				<label for="" style="margin-right:40rpx;color:#333333;font-size: 24rpx;">不开发票 ></label>
			</view>
			<view class="">
				<label for="" class="resDetail_title">售后免邮</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;">部分商家赠送</label>
			</view>
			<view class="" >
				<label for="" class="resDetail_title">卖家留言</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;">填写内容需要与商家协商并确认，45字以内</label>
			</view>
		</view>
		
		<!-- 具体详细2 -->
		<view class="resDetail" style="margin:10rpx 0 98rpx;">
			<view class="">
				<label for="" class="resDetail_title">商品金额</label>
				<label for="" style="margin-right:40rpx;color:#333333;font-size: 24rpx;">￥200</label>
			</view>
			<view class="">
				<label for="" class="resDetail_title">优惠活动</label>
				<label for="" style="margin-right:40rpx;color:#FF6040;font-size: 24rpx;">-￥200</label>
			</view>
			<view hover-class="touchOpacity">
				<label for="" class="resDetail_title">优惠券</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;">更多优惠券 ></label>
			</view>
		</view>
		<!-- 确认订单按钮 -->
		<view class="foot">
			<view class="foot_left">
				<text class="foot_left_count" space="ensp">合计<text>￥200</text></text>
				<text class="foot_left_ticket" space="ensp">已免运费   <text>已优惠￥100</text></text>
			</view>
			<view class="foot_right" hover-class="touchOpacity" >确认订单</view>
		</view>
	
	</view>
</template>

<script>

	export default {
		data() {
			return {
				orders:[
					{src:'../../static/img/pic/commodity/01.png',goodsname:'美容管'},
					{src:'../../static/img/pic/commodity/01.png',goodsname:'美容管'},
					{src:'../../static/img/pic/commodity/01.png',goodsname:'美容管'}
				],
				countmoney:0,
				countnumber:0,
				address:{status:1,label:'公司',username:'李四',userphone:13716078900,location:'北京市市辖区朝阳区',useraddress:'五方桥基地'},//初始化收货地址
				localBuffer:true,//初始化收货地址开关
			}
		},
		onLoad(option){
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	/* 引入样式 */
	@import url("@/static/css/order.css");
</style>
