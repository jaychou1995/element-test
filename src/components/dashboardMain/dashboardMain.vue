<template>
	<div class="DashBoardMain">
		<el-container>
			<el-header>
				<div class="el-header-flex">
					<div class="logo">
						<span class="el-icon-platform-eleme"></span>
					</div>
					<div class="menu">
						<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#000000">
							<el-menu-item index="1">处理中心</el-menu-item>
							<el-menu-item index="2">处理中心</el-menu-item>
							<el-menu-item index="3">处理中心</el-menu-item>
							<el-menu-item index="4">处理中心</el-menu-item>
						</el-menu>
					</div>
					<div class="search">
						<el-input v-model="search" class="search-in" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
					</div>

				</div>

			</el-header>
			<el-main>
				<div class="cart-main">
					<div class="box-header">
						<span style="font-weight: 800;font-size: 26px;">Carts</span>
						<span style="line-height: 18px;">View all cards</span>
					</div>
					<div class="cart-ul">
						<div class="cart-item">
							<div class="cart-name">Ascfefu Ffaef</div>
							<div class="cart-money">$2200</div>
							<div class="line"></div>
							<div class="cart-cord">6548 6564 8494 4565</div>
							<div class="cart-select">
								<div class="select-left">Monety0f</div>
								<el-switch v-model="sw" active-color="#FF6347" inactive-color="#DC143C">
								</el-switch>
							</div>
						</div>
						<div class="cart-item"></div>
						<div class="cart-item"></div>
					</div>
				</div>

				<div class="bottom">
					<div class="bottom-left">
						<div class="left-box">
							<div class="box-header">
								<span style="font-weight: 800;font-size: 18px;">Carts</span>
								<span style="line-height: 26px;">View all cards</span>
							</div>
							<div class="left-smallbox-ul">
								<div class="smallbox-item">
									<div class="el-icon-paperclip small-box-icon"></div>
									<div class="small-box-text">Loaus</div>
								</div>
								<div class="smallbox-item">
									<div class="el-icon-paperclip small-box-icon"></div>
									<div class="small-box-text">Loaus</div>
								</div>
								<div class="smallbox-item">
									<div class="el-icon-paperclip small-box-icon"></div>
									<div class="small-box-text">Loaus</div>
								</div>
								<div class="smallbox-item">
									<div class="el-icon-paperclip small-box-icon"></div>
									<div class="small-box-text">Loaus</div>
								</div>
								<div class="smallbox-item">
									<div class="el-icon-paperclip small-box-icon"></div>
									<div class="small-box-text">Loaus</div>
								</div>
								<div class="smallbox-item">
									<div class="el-icon-paperclip small-box-icon"></div>
									<div class="small-box-text">Loaus</div>
								</div>
							</div>
						</div>
					</div>
					<div class="bottom-right">
						<div class="current">
							<div class="box-header">
								<span style="font-weight: 800;font-size: 18px;">Carts</span>
								<span style="line-height: 26px;">View all cards</span>
							</div>
							<div class="current-main">
								<div class="current-item">
									<span>154668646</span>
									<span>$15646</span>
								</div>
								<div class="current-item">
									<span>154668646</span>
									<span>$15646</span>
								</div>
								<div class="current-item">
									<span>154668646</span>
									<span>$15646</span>
								</div>
							</div>
						</div>

						<div class="bottom-echart">
							<div id="bootom-e" style="width: 100%;height:100%;">

							</div>
						</div>

					</div>
				</div>

			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'DashBoardMain',
		data() {
			return {
				activeIndex: '1',
				search: '',
				sw: true
			};
		},
		mounted() {
			this.initEcharts();
		},
		methods: {
			handleSelect() {

			},
			initEcharts() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('bootom-e'))
				myChart.setOption({
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [820, 932, 901, 934, 1290],
						type: 'line'
					}]
				});
			}
		}
	}
</script>

<style scoped>
	.DashBoardMain {
		width: 100%;
		height: 100%;
		padding: 0 4rem;
		box-sizing: border-box;
	}

	.el-header-flex {
		display: flex;
		height: 100%;
		justify-content: space-between;
	}

	.logo,
	.logo>span {
		width: 60px;
		height: 60px;
		font-size: 60px;
		color: crimson;
	}

	.menu {
		margin-left: 8rem;
	}

	.search {
		margin-left: 8rem;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.box-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.cart-ul {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}

	.cart-item {
		width: 25rem;
		height: 170px;
		box-sizing: border-box;
		padding: 1.5rem 2rem;
		border-radius: 8px;
		background-color: red;
	}

	.cart-money,
	.select-left {
		margin-top: 1rem;
		color: #FFFFFF;
		font-size: 18px;
	}

	.cart-select {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.line {
		height: 4rem;
	}

	.bottom {
		width: 100%;
		margin-top: 30px;
		display: flex;
	}

	.bottom-left {
		width: 25%;
		padding: 5px;
		margin-right: 5rem;
		/* background-color: orangered; */
	}

	.bottom-right {
		width: 75%;
		/* background-color: olive; */
	}

	.left-smallbox-ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.smallbox-item {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text-align: center;
		width: 48%;
		height: 6rem;
		/* background-color: red; */
		margin-top: 15px;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

	}

	.small-box-icon {
		font-size: 45px;
	}

	.current-item {
		width: 100%;
		border-bottom: 2px dashed #e6e6e6;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}

	.bottom-echart {
		margin-top: 20px;
		width: 100%;
		height: 200px;
		/* background-color: red; */
	}
</style>
