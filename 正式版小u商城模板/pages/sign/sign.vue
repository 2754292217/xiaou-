<template>
	<!-- 插件地址 https://ext.dcloud.net.cn/plugin?id=56 -->
	<view class="calendar-content">
		<image src="../../static/img/rili.jpg" mode="widthFix" class="bjimage"></image>
		<view class="signbox">
			<uni-calendar 
				:selected="selected" 
				:showMonth="false" 
				@change="change" 
				@monthSwitch="monthSwitch" 
			/>
		</view>
	</view>
</template>

<script>
	let {getDate} = require('@/utils/tip')
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	export default {
		components: {uniCalendar,uniSection},
		data() {
			return {
				bufer: true,//签到开关
				selected: [
					{
						date: getDate(new Date(), -3).fullDate,
						info: '打卡'
					},
					{
						date: getDate(new Date(), -2).fullDate,
						info: '签到',
						data: {
							custom: '自定义信息',
							name: '自定义消息头'
						}
					},
					{
						date: getDate(new Date(), -1).fullDate,
						info: '已打卡'
					}
				]//签到详情	
			}
		},
		onReady() {
		
		},
		methods: {
			
			// 点击签到
			change(e) {
				console.log('change 返回:', e)
				// 模拟动态打卡
				if (this.selected.length > 5) return
				this.selected.push({
					date: e.fulldate,
					info: '打卡'
				})
			},
			// 切换月份
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			}
		}
	}
</script>

<style>
	/* 引入样式 */
	@import url("../../static/css/sign.css");
</style>