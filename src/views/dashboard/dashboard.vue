<template>
	<div id="dashboard">
		<div class="main">
			<dashboard-main></dashboard-main>
		</div>
		<div class="userInfo">
			<dashboard-user></dashboard-user>
		</div>
	</div>
</template>

<script>
	import dashboardMain from '../../components/dashboardMain/dashboardMain.vue'
	import dashboardUser from '../../components/dashboardUser/dashboardUser.vue'

	export default {
		name: 'DashBoard',
		components: {
			dashboardMain,
			dashboardUser
		}
	}
</script>

<style scoped>
	#dashboard {
		width: 100%;
		height: 100%;
		position: relative;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 20px;
	}

	.main {
		width: 75%;
		height: 100%;
		border-radius: 20px 0 0 20px;
		/* background-color: brown; */
	}

	.userInfo {
		width: 25%;
		height: 100%;
		position: absolute;
		right: 0;
		top: 0;
		/* background-color: blueviolet; */
		border-radius: 20px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
	}
</style>
