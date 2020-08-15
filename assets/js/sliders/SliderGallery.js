import Swiper from 'swiper/bundle';

function init(){
	new Swiper('#slider-gallery', {
	    speed: 400,
	    slidesPerView: 'auto',
	    spaceBetween: 20
	})
};


export default {
	init
};