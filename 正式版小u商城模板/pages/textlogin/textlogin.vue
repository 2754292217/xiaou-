<template>
	<view class="login_box">
		<view class="text_login">
			<!-- logo -->
			<image class="login_logo"  src="../../static/logo/orange.png" alt="" />
			
			<!-- 表单区域 -->
			<view class="login_phone">
				<text>手机号</text>
				<input type="text"  maxlength="11" />
			</view>
			<view class="login_code">
				<text>验证码</text>
				<input type="text"  maxlength="4" />
				<view hover-class="touchOpacity" >获取验证码</view>
			</view>
			
			<!-- 登录按钮 -->
			<view class="login_but" hover-class="touchOpacity" >
				<text space="ensp">登    录</text> 
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
}
</script>

<style>
	/* 引入样式 */
	@import url("@/static/css/textlogin.css");
</style>
