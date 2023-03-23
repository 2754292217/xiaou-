<template>
	<view class="goodlist" v-if="goodlist.length != 0">
		<!-- head区域 -->
		<view class="head">
			<view class="search">
				<u-search 
					:disabled="true"
					@click="goSearch"
					shape="square"
					:show-action="true" 
					action-text="搜索" 
					:animation="true" 
					margin="10rpx 0rpx">
				</u-search>
			</view>
			<view class="sortbox">
				<view  class="sort">
					<view hover-class="touchOpacity">综合排序</view>
					<view hover-class="touchOpacity">销量</view>
					<view hover-class="touchOpacity" @click="pricesort">
						<text>价格</text>
						<image src="../../static/icon/sort.png"></image>
					</view>
					<view hover-class="touchOpacity">好评度</view>
					<view hover-class="touchOpacity">店铺</view>
				</view>	
				<view class="filter" hover-class="touchOpacity">
					<image src="../../static/icon/filter.png"></image>
					<text>筛选</text>
				</view>
			</view>
			
		</view>

		<!-- 提示标语区域 -->
		<view class="biaoyu" hover-class="touchOpacity">
			<u-notice-bar mode="vertical" :list="list"  :show="true" :close-icon="true"></u-notice-bar>
		</view>
		
		<!-- 商品列表区域 -->
		<view class="list" >
			<view 
				class="row" 
				v-for="(item,index) in goodlist" :key="index" 
				@click="details(item.id)"
				:id="id"
			>
				<!-- 执行图片赖加载 此处注意百度小程序问题需要指定固定高度-->
				<view class="image">
					<u-lazy-load :key="index" :image="item.img" height="218"></u-lazy-load>
				</view>
				<view class="info" hover-class="touchOpacity">
					<text>{{item.goodsname}}</text>	
					<view class="money">
						<text>￥ 200</text> <text>￥210</text>
					</view>
					<text>双11.11限制200起</text>
					<text space="ensp">3565评论   99%好评</text>	
				</view>
			</view>
		</view>
		
		<!-- 底部悬浮球 -->
		<view 
			v-if="topBuffer"
			class="quick_top" 
			hover-class="touchOpacity"
		>
			<image src="../../static/icon/totop.png"></image>
		</view>
	</view>
	<view v-else>
		<!-- 无数据提示 -->
		<u-empty 
			text="暂无数据~~去逛逛~~" mode="list" 
			
			color="orange" icon-color="orange"
		></u-empty>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				id:'',
				value2:'',
				list: [
					'筛选11.11大促商品,亲,请速速赶来',
					'筛选11.11大促商品,亲,请速速赶来',
				],
				show: false,
				mode: 'right',
				mask: true, // 是否显示遮罩
				closeable: true,
				closeIconPos: 'top-right',
				topBuffer:false,//控制悬浮球显示
				dataBuffer:true,
				goodlist:[
					// {id:1001,goodsname:'下发水',img:'../../static/img/pic/commodity/01.png'},
					// {id:1002,goodsname:'下发水',img:'../../static/img/pic/commodity/02.png'},
					// {id:1003,goodsname:'下发水',img:'../../static/img/pic/commodity/03.png'},
					// {id:1004,goodsname:'下发水',img:'../../static/img/pic/commodity/04.png'},
					// {id:1005,goodsname:'下发水',img:'../../static/img/pic/commodity/05.png'}
				]
			}
		},
		onLoad(option){
			this._setoption(option)
			this._gitgoodlist()
		},
		methods: {
			details:function(index){
			// 点击跳转
			uni.navigateTo({
				url:"/pages/gooddesc/gooddesc?id="+index
			})
			},
			_gitgoodlist:async function(){
				try{
					let res=await this.$api.gitgoodlist({
							cateid:this.id,
							page:1,
							size:7,
							type:1
						})
						this.goodlist=res.list.goodData?this.$tool.imgurl(res.list.goodData):[];
						console.log(this.goodlist.length)

				}catch(err){
					this.$tool.error(err)
				}
				
			},
			_setoption:function(option){
				if(!option.id||!option.title) throw Error("网络错误")
				this.id=option.id
				//改变标题
				uni.setNavigationBarTitle({
					title:option.title
				})
			}
			,
			// 跳转到搜索页面
			goSearch(){
			},
			
			// 价格筛选事件
			pricesort(){
				uni.showActionSheet({
					itemList:['升序','降序']
				})
			},
		}
		
		
	}
</script>

<style>
	/* 引入样式 */
	@import url("@/static/css/goodlist.css");
</style>
