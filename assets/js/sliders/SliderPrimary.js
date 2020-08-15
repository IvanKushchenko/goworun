import Swiper from 'swiper/bundle';

function init(){
	const slider = document.querySelector(".js-slider-primary");
	if(!slider) return;

	const slides = slider.querySelectorAll('.swiper-slide');
	const sliderCounter = slider.parentElement.querySelector('.js-slider-primary-counter');
	let counter = {
		current: 1,
		all: slides.length,
		update(){
			sliderCounter.innerHTML = `${this.current}/${this.all}`;
		}
	}

	const sliderInstance = new Swiper('.js-slider-primary', {
		init: false,
	    speed: 400,
	    slidesPerView: 'auto',
	    spaceBetween: 20,
	    navigation: {
	    	nextEl: slider.parentElement.querySelector('.swiper-button-next'),
	    	prevEl: slider.parentElement.querySelector('.swiper-button-prev')
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