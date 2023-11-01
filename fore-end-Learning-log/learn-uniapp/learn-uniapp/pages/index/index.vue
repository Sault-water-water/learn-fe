<template>
	<view class="content">
		<view class="title">
			{{ title }}
		</view>
		<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			options: [
				{
					icon: 'headphones',
					text: '客服'
				},
				{
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: 'red'
				},
				{
					icon: 'cart',
					text: '购物车',
					info: 2
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			]
		}
	},
	methods: {
		onClick(e) {
			uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
			})
		},
		buttonClick(e) {
			console.log(e)
			this.options[2].info++
		}
	}
}
</script>

<style lang="scss">
// 页面的根组件是page

// 重写组件的方案

// 方案一: weapp  app
// .uni-formsptime__label{ }

// 方案二 :deep
// 方案三 :global

.content {
	.title {
		color: $color;
		background-color: yellow;
	}
}
</style>
