<template>
	<header class="c-header" id="header">
	    <div class="container c-header__container">
	        <button @click="toggleMenu" class="c-hamburger c-header__menu-btn d-md-none">
	            <svg class="c-hamburger__icon">
	                <use href="#icon-hamburger"></use>
	            </svg>
	        </button>
	        <div class="d-flex justify-content-center justify-content-md-between align-items-center h-100">
	            <div class="c-logo c-header__logo"><img src="img/logo.png" alt=""></div>
	            <div class="d-none d-md-flex">
	                <div class="d-flex flex-column align-items-end h-mr-4">
	                	<strong class="c-header__phone h-mb-1">+7 (495) 971-03-19</strong>
	                	<span class="c-header__location h-mb-1">г.Москва, ул. Богданова 52/2</span>
	                	<span class="c-header__email">info@goworun.com</span>
	                </div>
	                <div class="d-flex flex-column">
	                    <button class="c-btn c-btn_primary h-mb-2">Позвонить</button>
	                    <button class="c-btn c-btn_outline">Записаться</button>
	                </div>
	            </div>
	        </div>
	        <nav class="c-nav d-flex flex-column justify-content-between" :class="{'is-show': menu.show}">
	            <ul class="c-nav__list">
	                <li class="c-nav__item"><a class="c-nav__link" href="#">Программы</a></li>
	                <li class="c-nav__item"><a class="c-nav__link" href="#">Мероприятия</a></li>
	                <li class="c-nav__item"><a class="c-nav__link" href="#">Онлайн-курсы</a></li>
	                <li class="c-nav__item"><a class="c-nav__link" href="#">Стоимость</a></li>
	                <li class="c-nav__item"><a class="c-nav__link" href="#">О нас</a></li>
	            </ul>
	            <div class="c-nav__meta d-md-none">
	                <div class="d-flex flex-column align-items-end h-mb-2">
	                	<strong class="c-header__phone h-mb-1">+7 (495) 971-03-19</strong>
	                	<span class="c-header__location h-mb-1">г.Москва, ул. Богданова 52/2</span>
	                	<span class="c-header__email">info@goworun.com</span>
	                </div>
	                <div class="d-flex flex-column">
	                    <button class="c-btn c-btn_primary h-mb-2">Позвонить</button>
	                    <button class="c-btn c-btn_outline">Записаться</button>
	                </div>
	            </div>
	        </nav>
	    </div>
	</header>
</template>

<script>
export default {

  name: 'TheHeader',

  data () {
    return {
    	menu: {
    		show: false
    	}
    }
  },
  watch: {
  	'menu.show'(value){
  		if(value) document.querySelector('body').classList.add('h-overflow-hidden');
  		else document.querySelector('body').classList.remove('h-overflow-hidden');
  	}
  },
  methods: {
  	toggleMenu(){
  		this.menu.show = !this.menu.show;
  	}
  }
}
</script>

<style lang="css" scoped>
</style>