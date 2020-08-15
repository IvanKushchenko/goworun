import Vue from 'vue';
import AppPrices from '../components/AppPrices.vue';
const AppPricesInstance = new Vue({
	el: "#app-prices",
	render: h => h(AppPrices)
});
export default AppPricesInstance;