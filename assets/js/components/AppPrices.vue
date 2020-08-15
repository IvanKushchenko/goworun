<template>
	<div class="">
		<div v-for="price in prices" class="c-price-block d-flex flex-column justify-content-between">
            <div class="d-flex flex-column align-items-center h-mb-8">
				<svg class="c-price-block__icon h-mb-3">
				    <use href="#icon-cubes"></use>
				</svg>
				<div class="d-flex flex-column align-items-center h-mb-7">
				    <h4 class="c-price-block__title">Для детей</h4><span class="c-price-block__subtitle h-color-gray400">(6 - 17 лет)</span>
				</div>
				<div class="d-block c-price-block__duration h-mb-8"><span class="c-price-block__duration-title">продолжительность</span></div>
				<div class="d-block s-article">
					<ul class="d-flex flex-column justify-content-center">
					    <li class="h-mb-2 justify-content-center">в группе 4-6 человек</li>
					    <li class="h-mb-2 justify-content-center">2 занятия в неделю</li>
					    <li class="justify-content-center">96 занятий за год</li>
					</ul>
				</div>
			</div>
			<div class="d-block">
			    <div class="d-flex flex-column align-items-center h-mb-8">
			        <h3 class="c-price-block__price">4 400</h3><span class="c-price-block__price-title">руб/мес</span>
			    </div>
			    <div class="d-flex justify-content-center">
			        <button class="c-btn c-btn_lg h-w-100 c-btn c-btn_primary c-btn_luminous c-price-block__action c-price-block__action_order">Записаться</button>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

    name: 'AppPrices',

    data() {
        return {
        	prices: [
        		{
        			icon: 'cubes',
        			title: 'Для детей',
        			subtitle: '(6 - 17 лет)',
        		}
        	]
        }
    }
}
</script>

<style lang="css" scoped>
</style>