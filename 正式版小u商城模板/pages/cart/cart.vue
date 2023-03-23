<template>
	<view class="cart_box" v-if="buffer">
		<view class="cart_head">
			<view class="cart_menu">
				<text>全部(20)</text>
				<text>降价(4)</text>
				<text>常卖(2)</text>
				<text>分类</text>
			</view>
			<view class="cart_ticket">
				<!-- 此处使用checkbox是因为支付宝switch没有checkbox类型 -->
				<!-- <switch type="checkbox" :checked="true" color="#ff6040"  /> -->
				<checkbox  color="#FF6040" value="true" />
				<text class="cart_ticket_text1">小U自营</text>
				<text class="cart_ticket_text2">以免运费 |</text>
				<text class="cart_ticket_text3">领券</text>
			</view>
		</view>
		
		<view class="container" >	
			<view class="top">
				<scroll-view 
					class="scroll-view_H" 
					scroll-x="true" 
					scroll-left="0" 
					v-for="(item,index) in cartList"
					:key="index"
				>
					<view class="cartInfo" id="demo1">
						<!-- 明日来写购物车基本信息 -->
						<view class="cartInfochild">
							<!-- 选择框 -->
							<view class="cartInfo_switch common">
								<!-- 点击当前商品 -->
								<checkbox-group >
									<checkbox
										color="#FF6040" 
										:checked="true"
										value="1"
									/>
								</checkbox-group>
								
								<!-- <switch type="checkbox" :checked="true"  color="#ff6040" /> -->
							</view>
							<!-- 图片 -->
							<view class="cartInfo_image common">
								<image :src="item.src" mode="widthFix"></image>
							</view>
		
							<!-- 信息 -->
							<view class="cartInfo_info">
								<label style="font-size: 32rpx;">{{item.goodsname}}</label>
								<label style="font-size: 24rpx; color: #ccc;">规格：不错的商品</label>
								<label style="font-size: 20rpx; color: #FF6040;">比加入降低￥100</label>
								<label style="color:#FF6040;">￥
									<text style="font-size: 40rpx;color:#FF6040;">200
									</text> <text>￥200</text>
								</label>
							</view>
							<!-- 加减数量 -->
							<view class="cartInfo_num">
								<view class="cartInfo_num_child">
									<label >－</label>
									<label >1</label>
									<label >＋</label>
								</view>
							</view>
						</view>
		
					</view>
					<view class="cartDel" id="demo2">
						<label for="">删除</label>
					</view>
				</scroll-view>
			</view>
			
			<!-- 底部 -->
			<view class="foot">
				<view class="footd1">
					<checkbox-group  @change="changeAll">
						<checkbox  color="#FF6040" value="1"  :checked="true"  />
					</checkbox-group>
					<!-- <switch type="checkbox" :checked="true" color="#ff6040" /> -->
					<label>全选</label>
				</view>
				<view class="footd2">
					<view class="footd2sp1">合计：<label style="color: #FF6040;">￥ 1000</label></view>
					<label class="footd2sp2">不含运费，已优惠￥0.00</label>
				</view>
				<!-- 跳到提交订单，结算页面 -->
				<view class="footd3" hover-class="touchOpacity" >
					<!-- 被选中的商品的个数 -->
					<label>去结算(5件)</label>
				</view>
			</view>
		
		</view>
	</view>
	<!-- 无数据提示 -->
	<view v-else>
		<cartnull />
	</view>
</template>

<script>

	// 引入数据为空提示组件
	import cartnull from '@/components/cartnull/cartnull.vue';
	export default {
		components:{cartnull},
		data() {
			return {
				cartList:[
					{src:'../../static/img/pic/commodity/01.png',name:'美容管'},
					{src:'../../static/img/pic/commodity/01.png',name:'美容管'},
					{src:'../../static/img/pic/commodity/01.png',name:'美容管'},
					{src:'../../static/img/pic/commodity/01.png',name:'美容管'},
					{src:'../../static/img/pic/commodity/01.png',name:'美容管'},
					{src:'../../static/img/pic/commodity/01.png',name:'美容管'},
				],//初始化购物车数据
				buffer: true, //检测购物车是否有数据
			}
		},
		// 页面显示时
		onShow() {
			
		},
		methods:{}
}
</script>

<style scoped>
	/* 引入样式文件 */
	@import url("@/static/css/cart.css");
</style>
