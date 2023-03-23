<template>
	<view class="wrap">
		<form  @submit="submit">
			<view class="top">
				<view class="item">
					<view class="left">收货人</view>
					<input type="text" 
						placeholder-class="line" 
						placeholder="请填写收货人姓名" 
						name="username"
						v-model="username"
					 />
				</view>
				<view class="item">
					<view class="left">手机号码</view>
					<input type="text" 
						placeholder-class="line"  
						placeholder="请填写收货人手机号" 
						name="userphone"
						v-model="userphone"
					/>
				</view>
				
				<view class="item" @click="regionVisible=true">
					<view class="left">所在地址</view>
					<input
						disabled
						type="text"
					  	placeholder-class="line" 
					  	placeholder="省市区县、乡镇等" 
					  	name="location" 
					  	v-model="location"
					  />
				</view>
				
				<view class="item address">
					<view class="left">详细地址</view>
					<textarea type="text" 
						placeholder-class="line" 
						placeholder="街道、楼牌等" 
						name="useraddress"
						v-model="useraddress"
					/>
				</view>
				<!-- <view class="site-clipboard">
					<textarea placeholder-class="line" value="" placeholder="粘贴文本,可自动识别姓名和地址等" />
					<view class="clipboard">
						地址粘贴板
						<u-icon name="arrow-down" class="icon" :size="20"></u-icon>
					</view>
				</view> -->
			</view>
			<view class="bottom">
				<view class="tag">
					<view class="left">标签</view>
					<view class="right">
						<u-radio-group v-model="label" @change="radioGroupChange" active-color="orange">
							<u-radio 
								v-for="(item, index) in list" :key="index" 
								:name="item.name"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
				<view class="default">
					<view class="left">
						<view class="set">设置默认地址</view>
						<view class="tips">提醒：每次下单会默认推荐该地址</view>
					</view>
					<view class="right">
						<switch 
							color="red" 
							@change="setDefault" 
							name="status"
							:checked="status"
						 />
					</view>
				</view>
			</view>
			<regionPicker
				:visible.sync="regionVisible"
				mode="region"
				default-type="value"
				:hide-area="false"
				@confirm="onConfirm($event,'region')"
				ref="region" 
			></regionPicker>
			<button form-type="submit" type="warn">保存并使用</button>
			<button form-type="reset" >重置</button>
		</form>
	</view>
</template>

<script>

// 引入提示模块 
let {load,hideload,isLogin,tip} = require('@/utils/tip.js');
let app = getApp();
import regionPicker from "@/components/region/w-picker.vue";

export default {
	components:{regionPicker},
	
	data() {
		return {
			regionVisible:false,//初始化地区选择器开关	
			username:'',//初始化收件人姓名
			userphone:'',//初始化收件人手机号
			useraddress:'',//初始化收件人详情地址
			location:'山东省滨州市无棣县',//初始化地区默认值
			label:'家',//初始化地址标签
			list: [
				{
					name: '家'
				},
				{
					name: '公司'
				},
				{
					name: '学校'
				}
			],
			status:false,
			siteUrl:'addressadd',//初始化请求url地址
			id:'',//初始化修改数据id
		};
	},
	onLoad(option){
		
		
	},
	methods: {
		// 设置会员地区
		onConfirm(res){
			this.location = res.result;
		},
		
		// 设置默认地址
		setDefault(){},
		
		// 设置底子标签
		radioGroupChange(){}
		
	}
};
</script>

<style lang="scss" scoped>
	// 引入样式
	@import  '@/static/css/addsite.scss';
</style>
