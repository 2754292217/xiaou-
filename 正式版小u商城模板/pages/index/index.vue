<template>
	<view class="">
		<view class="content u-skeleton">
			
			<!-- head搜索区域 -->
			<view class="head">
				<view class="search ">
					<image src="../../static/icon/address2.png" class="u-skeleton-circle"></image>
					<image src="../../static/logo/white.png" class="u-skeleton-circle"></image>
					<view class="search_input u-skeleton-fillet">
						<u-search
							:disabled="true"
							@click="goSearch"
							shape="square"
							action-text=" " 
							bg-color='#fff'
							:input-style="{fontSize:'20rpx'}"
						>
						</u-search>
					</view>
					<image src="../../static/icon/dp.png"  class="dp u-skeleton-circle"></image>
				</view>
				<view class="cate">
					<view class="catenavtab u-skeleton-rect">
						<u-tabs ref="tabs"
							:list="catenav"
							name="catename"
							bar-width="30"
							bar-height="8"
							active-color="white"
							bg-color="111"
							font-size="28"
							:show-bar="showBar"
							inactive-color='white'
							:is-scroll="true" 
							:current="currentnav" 
							@change="changecurrent"></u-tabs>
					</view>
					<view class="category u-skeleton-rect" >
						<image src="../../static/icon/cate.png"></image>
						<text>分类</text>
					</view>
				</view>
			</view>
			
			<!-- swiper区域  使用插件实现-->
			<view class="u-skeleton-fillet swiper_banner">
				<u-swiper :list="bannerlist" name="img" :effect3d="true" height="390" @click="goActive"></u-swiper>
			</view>
			<!-- 快速导航区域 -->
			<view class="quicknav">
				<view class="row" v-for="(item,index) in quicknav" :key='index' hover-class="touchOpacity">
					<image :src="item.src" class="u-skeleton-circle"></image>
					<text class="u-skeleton-rect">{{item.text}}</text>
				</view>
			</view>

			<!-- 秒杀商品推荐区域 -->
			<view class="seckill">
				<!-- 秒杀左侧区域 -->
				<view class="leftseckill u-skeleton-rect">
					<view class="title " hover-class="touchOpacity">
						<text>限时秒杀</text>
						<text>查看更多 > </text>
					</view>
					<view class="left_seckill_info">
						<u-count-down bg-color="#5D7E37" 
							color="white" 
							ref="uCountDown" 
							timestamp="128989" 
							:autoplay="true" 
							font-size="20"
							height="30"></u-count-down>
					</view>
					<image src="../../static/img/pic/commodity/01.png" mode="widthFix" class="seckill_img"></image>
				</view>
				<!-- 秒杀右侧区域 -->
				<view class="rightseckill">
					<view class="top u-skeleton-rect">
						<view>品牌上新</view>
						<view>9点整，抢大牌</view>
						<view hover-class="touchOpacity">疯抢红包 > </view>
					</view>
					<view class="bottom u-skeleton-rect">
						<view>日用好物</view>
						<view>愿君多采撷</view>
						<view hover-class="touchOpacity">塞满奖券 > </view>
					</view>
				</view>
			</view>
			
			<!-- 推荐商品区域 -->
			<view class="tuijian  u-skeleton-rect">
				<!-- 标题区域 -->
				<view class="tuijian_title">
					<text :class="tjActiveIndex == 0 ? 'tuijian_active' : '' ">双十一尖货预购</text>
					<text :class="tjActiveIndex == 1 ? 'tuijian_active' : '' ">畅购全球</text>
				</view>
				<!-- 滚动商品区域 -->
				<scroll-view scroll-x  class="tuijian_scroll_x">
					<view class="tuijian_scroll_x_row" v-for="(item,index) in tuijianshop" :key="index" hover-class="touchOpacity">
						<image :src="item"></image>
					</view>
				</scroll-view>
			</view>
			
			<!-- 推荐商品区域 -->
			<view class="recommendgood">
				<!-- 推荐导航 -->
				<view class="recommendnav  u-skeleton-fillet">
					<u-subsection
						:bold="bold" 
						:active-color="activeColor" 
						:current="current"
						:mode="mode" 
						:list="['热门推荐', '上新推荐', '所有商品']"
						@change="_currentChange"
					></u-subsection>
				</view>
				<view class="recommendlist">
					<view class="recommendrow u-skeleton-rect" 
						v-for="(item,index) in indexlit" :key="index"
					>
						<!--赖加载显示图片  此处注意百度小程序问题需要指定固定高度-->
						<view class="image">
							<u-lazy-load :key="index" :image="item.img" height="200" duration="300"></u-lazy-load>		
						</view>
						
						<view class="recommendrowinfo" hover-class="touchOpacity">
							<text>{{item.goodsname}}</text>
							<text>现价格： ￥{{item.market_price}}</text>
							<text>原价格：￥{{item.price}}</text>
							<text>
								立即抢购
							</text>
						</view>
					</view>
				</view>
				<!-- #ifdef H5 -->
				<view class="topview"></view>
				<!-- #endif -->
			</view>
		</view>
		<!--引用组件  引入骨架屏组件-->
		<!--注意： 所以要求在请求数据尚未完成时，填写一些模拟数据，才能让对应的元素有对应的尺寸和位置，供uni.createSelectorQuery查询使用 -->
		<u-skeleton bg-color="rgb(250, 250, 250)" :loading="loading" :animation="animation" 
		:el-color="elColor" :border-radius="borderRadius"></u-skeleton>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				showBar:true,//初始化分类导航底部滑块开关
				currentnav:0,//初始化分类导航下标
				loading: false, // 是否显示骨架屏组件
				animation: true,
				elColor: '#FFC8B4',
				borderRadius: 10,
				mode: 'subsection',
				current: 0,//热推默认选项卡
				activeColor: 'orange',
				bold: true,
				change: true,
				activeIndex:0,//默认分类下标
				catenav:[],  //导航栏
				bannerlist: [
					// {img:'../../static/img/banner/1.png'},
					// {img:'../../static/img/banner/2.png'},
					// {img:'../../static/img/banner/1.png'},
					// {img:'../../static/img/banner/2.png'},
					// {img:'../../static/img/banner/1.png'}
				],//初始化轮播图数据
				quicknav:[
					{src:'../../static/icon/seckill.png',text:'限时秒杀'},
					{src:'../../static/icon/top.png',text:'畅销商品'},
					{src:'../../static/icon/brand.png',text:'品质大牌'},
					{src:'../../static/icon/selfsupport.png',text:'小U自营'},
					{src:'../../static/icon/integral.png',text:'积分商城'}
				],
				seckill:{},//秒杀数据
				tuijianshop:[
					'../../static/img/pic/commodity/01.png',
					'../../static/img/pic/commodity/02.png',
					'../../static/img/pic/commodity/03.png',
					'../../static/img/pic/commodity/04.png',
					'../../static/img/pic/commodity/05.png',
				],
				hortgoods:[],//热推商品数据
				shoplist:[
					
				],
				tjActiveIndex:0,
				goodsIndex:0 
			}
		},
		computed:{
			indexlit:function(){
				let index=this.activeIndex
				if(this.shoplist.length!=0&&this.shoplist[index].content.length!=0){
					return this.$tool.imgurl(this.shoplist[index].content) 
				}else{
					return []
				}
			}
		},
		onLoad() {
			this.loading=true
			setTimeout(()=>{
			this.loading=false
			},2000)
			
			// #ifdef MP-BAIDU
			this.showBar = false;
			// #endif
			
			// 在页面加载阶段请求接口
			this._gitlist() //list列表
			this._gitbanner() //轮播图
			this._currentChange()  //推荐商品
		},
		methods: {
			_Change:function(index){
				this.activeIndex=index
			},
			//推荐商品
			_currentChange:async function(){
				try{ 
					let res=await this.$api.currentChange()
					this.shoplist=res.list
				}catch(err){
					this.$tool.error(err)
				}
				
			},
			//banner图片
			_gitbanner:function(){
			    this.$api.gitbanner().then(res=>{
					this.bannerlist=this.$tool.imgurl(res.list)
				}).catch(req=>{
					this.$tool.error(err)
				})	
			},
			// 接口请求函数 gitlist
			_gitlist:function(){
				this.$api.gitlist().then(res=>{
					this.catenav=res.list
				}).catch(err=>{
					this.$tool.error(err)
				})
			},
			// 快速分类导航
			changecurrent(e){
				this.currentnav=e
			let{catename,id}= this.catenav[e]
				uni.navigateTo({
					url:"../goodlist/goodlist?id="+id+"&title="+catename
				})
			},
			// 跳转到搜索页面
			goSearch(){}
		}
	}
</script>

<style>
	/* 引入样式 */
	@import url("@/static/css/index.css");
</style>
