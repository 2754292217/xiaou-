<template>
	<view class="box">
		<!-- logo -->
		<view class="login_title">
			欢迎登录小U商城
		</view>
		<image class="login_logo"  src="../../static/logo/orange.png" alt="" />
		<button open-type="getPhoneNumber" @getphonenumber="_getPhoneNumber" class="login_but" hover-class="touchOpacity" >
			微信用户一键登录
		</button>
		<view  class="login_text" hover-class="touchOpacity" >手机号验证注册/登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {},
		methods: {
			_getPhoneNumber:function(e){
				let encryptedData=e.detail.encryptedData
				let iv=e.detail.iv
				uni.login({
					success:async res=>{
						try{
							this.$tool.showloading()
							let result=await this.$api.wxlogin({
								encryptedData,
								iv,
								code:res.code
							})
							this.$tool.hideloading()
							uni.setStorageSync("token",result.list.token)
							delete result.list.token
							uni.setStorageSync("user",result.list)
							uni.showToast({
								title:"登录成功"
							})
							setTimeout(()=>{
								uni.navigateBack()
							},1000)
							
							console.log(result)
						}catch(err){
							// throw Error(err.message)
							console.log(err)
							this.$tool.error()
						}
					}
				})
			}
		}
	}
</script>

<style>
	/* 导入外部的样式文件 */
	@import url("@/static/css/login.css");
</style>
