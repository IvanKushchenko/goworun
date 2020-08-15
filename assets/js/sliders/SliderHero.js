import Swiper from 'swiper/bundle';

function init(){
	new Swiper('#slider-hero', {
	    speed: 400,
	    autoplay: {
	    	delay: 5000
	    }
	})
};


export default {
	init
};