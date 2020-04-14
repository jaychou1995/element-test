<template>
	<div class="dashboarduser">
		<div>
			<el-row class="demo-avatar demo-basic">
				<el-col :span="24">
					<div class="demo-basic--circle user-title">
						<div class="el-icon-user-solid" style="font-size: 30px;"></div>
						<div class="block">
							<div class="username">username</div>
							<el-avatar :size="30" :src="circleUrl" fit="contain"></el-avatar>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>


		<div class="user-echarts">
			<div id="echarts-y"></div>
		</div>

		<div class="usermeun">
			<div class="menu">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#000000">
					<el-menu-item index="1">处理中心</el-menu-item>
					<el-submenu index="2">
						<template slot="title">我的工作台</template>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
						<el-submenu index="2-4">
							<template slot="title">选项4</template>
							<el-menu-item index="2-4-1">选项1</el-menu-item>
							<el-menu-item index="2-4-2">选项2</el-menu-item>
							<el-menu-item index="2-4-3">选项3</el-menu-item>
						</el-submenu>
					</el-submenu>
				</el-menu>
			</div>
		</div>

		<div style="margin-top: 30px;">
			<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
			<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
			<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
			<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'DashBoardUser',
		data() {
			return {
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				activeIndex: '1'
			}
		},
		mounted() {
			this.initEcharts();
		},
		methods: {
			handleSelect() {
				
			},
			initEcharts() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('echarts-y'))
				myChart.setOption({
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					// legend: {
					// 	orient: 'vertical',
					// 	left: 10,
					// 	data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
					// },
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '30',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: 335,
								name: '直接访问'
							},
							{
								value: 310,
								name: '邮件营销'
							},
							{
								value: 234,
								name: '联盟广告'
							},
							{
								value: 135,
								name: '视频广告'
							},
							{
								value: 1548,
								name: '搜索引擎'
							}
						]
					}]
				});
			}
		}
	}
</script>

<style>
	.dashboarduser {
		padding: 20px;
	}

	.user-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.block {
		/* text-align: center; */
		height: 100%;
	}

	.username {
		display: inline-block;
		line-height: 30px;
		height: 30px;
		font-size: 18px;
		margin-right: 20px;
	}

	.user-echarts,
	#echarts-y {
		width: 100%;
		height: 300px;
	}
	.menu{
		float: right;
	}
	.el-progress-bar{
		margin-top: 20px!important;
	}
</style>
