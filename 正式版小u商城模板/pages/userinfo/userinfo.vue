<template>
	<view class="wrap">
		<form  @submit="submit" >
			<view class="top">
				<view class="item">
					<view class="left">会员昵称</view>
					<input type="text" 
						placeholder-class="line" 
						placeholder="请填写会员昵称" 
						name="nickname"
						v-model="nickname"
					 />
				</view>
				<view class="item">
					<view class="left">会员头像</view>
					<u-upload ref="uUpload"
						name="avatarurl"
						:fileList="oldAvatarUrl"
						max-count="1"
						:action="action"
						upload-text="上传头像"
						:auto-upload="false" 
						@on-success="uploadsuccess"
						@on-error="uploaderror"
						@on-choose-complete="chooseimg"
						:form-data="formData"
						:header="header"
					></u-upload>
				</view>
				<view class="item">
					<view class="left">会员性别</view>
					<view class="right">
						<u-radio-group v-model="sex" @change="radioGroupChange" active-color="orange">
							<u-radio 
								v-for="(item, index) in sexlist" :key="index" 
								:name="item.value"
							>
								{{item.name}}
							</u-radio>
						</u-radio-group>
					</view>
				</view>
				<view class="item" @tap="showBirthdayPicker">
					<view class="left">会员生日</view>
					<input disabled type="text" 
						placeholder-class="line" 
						placeholder="2021-01-24" 
						name="birthday" 
						v-model="birthday"
					/>
				</view>
				<view class="item" @click="regionVisible=true">
					<view class="left">所在地址</view>
					<input
						disabled
						type="text"
					  	placeholder-class="line" 
					  	placeholder="省市区县、乡镇等" 
					  	name="region" 
					  	v-model="region"
					  />
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
			<u-picker 
				mode="time" 
				ref="uPicker" 
				v-model="birthdayShow" 
				@confirm="birthdayConfirm"
			/>
			<button form-type="submit" type="warn">保存并使用</button>
			<button form-type="reset" >重置</button>
		</form>
	</view>	
</template>

<script>
	
	// 引入地区模块
	import regionPicker from "@/components/region/w-picker.vue";
	export default {
		components:{regionPicker},
		data() {
			return {
				id:'',//初始化修改数据id
				// 头像提交服务端地址
				action: this.$URL+`/api/infoedit`,
				// 需要展示的图片列表比如展示需要编辑的用户头像
				oldAvatarUrl:[{url:"https://api.aslegou.top/uploads/tou.jpg"}],
				// 表单数据(不含头像信息)
				formData:{},
				// 初始化header头
				header:{},
				oldImg:'',//初始化旧图片
				regionVisible:false,//初始化地区选择器开关
				nickname:'鲁班',//初始化收件人姓名
				region:'北京市市辖区朝阳区',//初始化地区默认值
				birthday:'1992-02-14',
				birthdayShow:false,
				sexlist:[
						{value:1,name:'男'},
						{value:2,name:'女'},
					],
				sex:1//初始化会员性别
			}
		},
		
		onLoad(){
			
		},
			
		methods: {
			// 选择会员地区
			onConfirm(res){
			},
			// 监听本地选择图片
			chooseimg(lists, name){
			},
			// 性别标签切换
			radioGroupChange(e){
			},
		
			// 地址默认设置开关
			setDefault(e){
			},
		
			// 开始生日选择器
			showBirthdayPicker(){
				this.birthdayShow = true;
			},
			// 监听时期选择器
			birthdayConfirm(e){
			},
			
			// 图片上传成功触发
			uploadsuccess(data, index, lists, name){
			},
			// 图片上传失败触发
			uploaderror(res, index, lists, name){
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	// 引入样式
	@import '@/static/css/userinfo.scss';
</style>
