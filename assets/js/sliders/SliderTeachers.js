import Swiper from 'swiper/bundle';

function init(){

	const slider = document.querySelector(".c-slider-teachers");
	if(!slider) return;

	const slides = slider.querySelectorAll('.swiper-slide');
	const sliderCounter = slider.querySelector('.js-slider-teachers-counter');

	let counter = {
		current: 1,
		all: slides.length,
		update(){
			sliderCounter.innerHTML = `${this.current}/${this.all}`;
		}
	}

	const sliderInstance = new Swiper('#slider-teachers', {
		init: false,
	    speed: 400,
	    spaceBetween: 20,
	    navigation: {
	    	nextEl: '.c-slider-teachers .swiper-button-next',
	    	prevEl: '.c-slider-teachers .swiper-button-prev'
	    }
	});

	sliderInstance.on('slideChange', () => {
		counter.current = sliderInstance.activeIndex + 1;
		counter.update();
	});

	sliderInstance.on('init', () => {
		counter.update();
	});

	sliderInstance.init();
};


export default {
	init
};