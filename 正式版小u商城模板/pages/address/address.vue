
<template>
	<view>
		<view class="item" 
			v-for="(res, index) in siteList" :key="res.id" 
			v-if="dataBuffer"
		>	<u-icon name="close-circle-fill" :size="40" color="#ff5500" :index="res.id"></u-icon>
			<view class="top" >
				<view class="name">{{ res.username }}</view>
				<view class="phone">{{ res.userphone }}</view>
				<view class="tag">
					<text class="red" v-if="res.status == 1">默认</text>
				</view>
			</view>
			<view class="bottom" >
				{{res.location+res.useraddress}}
				<u-icon name="edit-pen" :size="40" color="#999999" :index="res.id" ></u-icon>
			</view>
		</view>
		<view v-else>
			暂无收货地址信息!
		</view>
		<view class="addSite" @tap="toAddSite">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
			</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			siteList: [
				{status:1,label:'公司',username:'亚瑟',userphone:13716078900,location:'北京市市辖区朝阳区',useraddress:'五方桥基地'},
				{status:0,label:'家',username:'鲁班',userphone:13716078900,location:'北京市市辖区朝阳区',useraddress:'五方桥基地'},
				{status:0,label:'学校',username:'李白',userphone:13716078900,location:'北京市市辖区朝阳区',useraddress:'五方桥基地'},
			],//初始化地址数据
			dataBuffer:true
		};
	},
	onShow() {
	
	},
	methods: {
		// 跳转到新增地址页面
		toAddSite(){
			uni.navigateTo({
				url:'./addSite'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	// 引入样式
	@import  '@/static/css/address.scss';
</style>
