<template>
	<view class="pay">
		<view class="payorder">
			<view class="payNumber">
				订单号:{{outTradeNo}}
			</view>
			<view class="payPrice">
				<text>¥</text>{{totalAmount}}
			</view>
			<view class="payTime">
				<!-- 最迟支付时间:{{payinfo.end_time}} -->
			</view>
		</view>
		<view class="payType">
			<view class="payTypeTitle">
				请选择支付方式
			</view>
				<radio-group @change="radioChange" >
				<view class="payTypeItem">
					<view class="payTypeItemLeft">
						<image src="../../static/pay/alipay.png" class="payicon"></image>支付宝支付
					</view>
					<radio color="#01c2fa" value="1" checked=""></radio>
				</view>
				<view class="payTypeItem">
					<view class="payTypeItemLeft">
						<image src="../../static/pay/wxpay.png"  class="payicon"></image>微信支付
					</view>
					<radio color="#01c2fa" value="2"></radio>
				</view>
			</radio-group>
		
		</view>
		<view class="payButton">
			确定支付
		</view>
		
		<!-- 添加支付表单区域 -->
		<div id="divform"></div>
	</view>
	
</template>

<script>

	export default{
		data(){
			return{
				paytype:1,
				payForm:'',//初始化支付表单
				totalAmount:200,//初始化总支付金额
				outTradeNo:'2012121909021',//初始化主订单号
			}
		},
		onLoad(option) {
			
		},
		methods:{
			// 切换支付方式
			radioChange(){}
		}
	}
</script>

<style>
	/* 引入样式 */
	@import '@/static/css/pay.css';
</style>
