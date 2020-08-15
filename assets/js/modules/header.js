import Vue from 'vue';
import TheHeader from '../components/layout/TheHeader.vue';
const TheHeaderInstance = new Vue({
	el: "#header",
	render: h => h(TheHeader)
});
export default TheHeaderInstance;