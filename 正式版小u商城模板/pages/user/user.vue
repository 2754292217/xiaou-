<template>
	<view class="user_box">
		<!-- head区域 -->
		<view class="head_user">
			<view class="head_user_info">
				<image :src="userinfo.avatarurl"></image>
				<view class="head_user_info_name" hover-class="touchOpacity" @click="goUseinfo">
					<text>{{userinfo.nickname}}</text>
					<text>完善资料让小U更懂你</text>
				</view>
				<view class="head_user_info_sign" hover-class="touchOpacity" @click="goSign">
					<image src="../../static/icon/red_envelopes.png"></image>
					<text>每日签到</text>
				</view>
			</view>
			<view class="head_usert_menu">
				<view class="head_usert_menu_row" hover-class="touchOpacity" v-for="(item,index) in menuList" :key="index">
					<text>{{item.number}}</text>
					<text>{{item.name}}</text>
				</view>
			</view>
			<view class="head_user_order">
				<view class="head_user_order_top" hover-class="touchOpacity" @click="goOrder(0)">
					<text>我的订单</text>
					<text>全部订单 > </text>
				</view>
				<view class="head_user_order_bottom">
					<view class="head_user_order_bottom_row" hover-class="touchOpacity" v-for="(item,index) in orders" :key="index" @click="goOrder(index)">
						<image :src="item.src"></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 功能菜单区域 -->
		<view class="resDetail">
			<view hover-class="touchOpacity" @click="goAddress">
				<label for="" class="resDetail_title">
					<image src="../../static/icon/address.png" ></image>
					地址管理
				</label>
				<label for="" style="margin-right:40rpx;color:#333333;font-size: 24rpx;"> ></label>
			</view>
			<view class="" hover-class="touchOpacity">
				<label for="" class="resDetail_title">
					<image src="../../static/icon/wallet.png" ></image>
					我的钱包
					</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;">剩余200U币 ></label>
			</view>
			<view class="" hover-class="touchOpacity" @click="goCode">
				<label for="" class="resDetail_title">
					<image src="../../static/icon/QR_code.png" ></image>
					我的二维码
					</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;"> ></label>
			</view>
			<view class="" hover-class="touchOpacity">
				<label for="" class="resDetail_title">
					<image src="../../static/icon/partner.png" ></image>
					我的小伙伴
					</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;"> ></label>
			</view>
			<view class="" hover-class="touchOpacity">
				<label for="" class="resDetail_title">
					<image src="../../static/icon/free.png" ></image>
					0元试用
					</label>
				<label for="" style="margin-right:40rpx;color:#666666;font-size: 24rpx;"> ></label>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		onShow() {
		},
		data() {
			return {
				userinfo:{avatarurl:'../../static/img/pic/commodity/01.png',nickname:'请登录'},//初始化用户信息
				menuList:[
					{name:'我的收藏',number:12},
					{name:'浏览记录',number:12},
					{name:'我的红包',number:'￥0'},
					{name:'优惠券',number:12}
				],
				orders:[
					{src:'../../static/icon/payment.png',name:'代付款'},
					{src:'../../static/icon/delivery.png',name:'代发货'},
					{src:'../../static/icon/evaluation.png',name:'代确认'},
					{src:'../../static/icon/service.png',name:'售后/退款'}
				]
			}
		},
		methods: {
			// 跳转到签到页面（测试页面）
			goSign(){
				uni.navigateTo({
					url:'../sign/sign'
				})
			},
			// 跳转到我的二维码页（测试页面）
			goCode(){
				uni.navigateTo({
					url:'../mycode/mycode'
				})
			},
			// 跳转到用户信息页面
			goUseinfo(){
				uni.navigateTo({
					url:'../userinfo/userinfo'
				})
			},
			// 跳转到订单页面
			goOrder(index){
				if(index != 3){
					uni.navigateTo({
						url:'../orderlist/orderlist?status='+index
					})
				}	
			},
			// 跳转到地址页面
			goAddress(){
				uni.navigateTo({
					url:'../address/address'
				})
			}
		}
	}
</script>

<style>
	/* 引入样式 */
	@import url("@/static/css/user.css");
</style>
