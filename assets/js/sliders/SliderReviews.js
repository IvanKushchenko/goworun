import Swiper from 'swiper/bundle';

function init(){
	new Swiper('#slider-reviews', {
	    speed: 400,
	    slidesPerView: 'auto',
	    navigation: {
	    	nextEl: '.c-slider-reviews .swiper-button-next',
	    	prevEl: '.c-slider-reviews .swiper-button-prev'
	    }
	})
};


export default {
	init
};