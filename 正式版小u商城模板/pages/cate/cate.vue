<template>
	<view class="u-wrap">
		<view class="u-search-box">
			<u-search 
				shape="square"
				:show-action="true" 
				action-text="搜索" 
				:clearabled="true"  
				:animation="true" 
				v-model="keywords"
				:disabled="true"
				@click="goSearch"
			></u-search>
		</view>
		<view class="container" :style="{'height':cateHeight+'px'}">
				<!-- left左侧一级分类列表 -->
				<scroll-view scroll-y class="left">
					<!-- 循环遍历的 -->
					<view class="left_list" 
						v-for="(item,index) in catelist" 
						:key="index" 
					>
						<text class="activeIndex" >{{item.name}}</text>
					</view>
				</scroll-view>
				<!-- right右侧二级分类详情 -->
				<scroll-view scroll-y  class="right" :scroll-into-view="id">			
					<view class="right_box" :id="'id'+index" v-for="(item,index) in catelist" :key="index">
						<view class="row_title">{{item.name}}</view>
						<view class="row">
							<view 
								class="row_list" 
								v-for="(m,i) in item.chidren" 
								:key="i" 
							>	
								<image :src="m.icon" mode="widthFix"></image>
								<text>{{m.name}}</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>
<script>
	
	// 引入分类测试数据
	import cateData from '@/utils/classify.data.js'
	
	export default {
		data() {
			return {
				id:'id0',//设置右侧默认置顶分类id
				activeIndex:0,//默认左侧分类选中下标
				cateHeight:'',//初始化分类容器高度
				catelist:cateData,//初始化分类数据
				keywords:''
			}
		},
		onLoad() {
			// 动态获取当前设备的高度
			this.cateHeight = uni.getSystemInfoSync().windowHeight;
		},
			
		methods:{
		
		}
	
	}
</script>

<style lang="scss" scoped>
/* 引入样式 */
	@import url("@/static/css/cate.css");
</style>
