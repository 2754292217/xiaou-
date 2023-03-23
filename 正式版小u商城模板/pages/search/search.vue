<template>
	<view>
		<!-- 搜索框 -->
		<view class="search_view">
			<u-search
				shape="square"
				:show-action="true" 
				action-text="搜索" 
				:clearabled="true"  
				:animation="true" 
				v-model="keywords"
				@search="search"
				@clear="clear">
			</u-search>
		</view>
		<view class="list" v-if="buffer">
			<view class="row">
				<image src="../../static/img/detail/1.jpg" mode="widthFix"></image>
				<view class="info">
					<text>洗发水</text>	
					<text>￥120</text>	
					<text>3565评论</text>	 
				</view>
			</view>
		</view>
		<view class="api" v-else>
			没有数据亲！
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buffer:true,//页面显示开关,
				keywords:'',//初始化搜索关键词
			}
		},
		onLoad(options){
			
		},
	
		methods: {
			search(){},
			clear(){}
		},
		
	}
</script>

<style>
	/* 引入样式 */
	@import url("@/static/css/search.css");
</style>
