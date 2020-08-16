<template>
	<div class="">
		<div class="row">
			<div v-for="(price, index) in localPrices" class="col-md-6 col-lg-4 h-mb-8">
				<div class="c-price-block d-flex flex-column justify-content-between h-h-100" :class="{'c-price-block_has-communication-type': price.hasOwnProperty('online')}">
					
		            <div class="d-flex flex-column align-items-center h-mb-8">
						<svg class="c-price-block__icon h-mb-3">
						    <use :href="`#icon-${price.icon}`"></use>
						</svg>
						<div class="d-flex flex-column align-items-center h-mb-7">
						    <h4 class="c-price-block__title">{{price.title}}</h4>
						    <span v-if="price.subtitle" class="c-price-block__subtitle">{{price.subtitle}}</span>
						</div>
						<div class="d-block c-price-block__duration h-mb-8">
							<span class="c-price-block__duration-title">продолжительность</span>
							<app-tabs class="c-price-block__communication-type" v-if="price.hasOwnProperty('online')" v-model="price.activeCommunicationTypeIndex">
								<app-tab title="Онлайн">
									<app-tabs v-model="price.online.activeDurationIndex">
										<app-tab v-for="duration in price.online.duration" :title="duration.name" class="s-article h-color-gray200"><div v-html="duration.content"></div></app-tab>
									</app-tabs>
								</app-tab>
								<app-tab title="Офлайн">
									<app-tabs v-model="price.offline.activeDurationIndex">
										<app-tab v-for="duration in price.offline.duration" :title="duration.name" class="s-article h-color-gray200"><div v-html="duration.content"></div></app-tab>
									</app-tabs>
								</app-tab>
							</app-tabs>
							<app-tabs v-else v-model="price.activeDurationIndex">
								<app-tab v-for="duration in price.duration" :title="duration.name" class="s-article h-color-gray200"><div v-html="duration.content"></div></app-tab>
							</app-tabs>
						</div>
					</div>
					<div class="d-block">
					    <div v-if="getPriceByDuration(price)" class="d-flex flex-column align-items-center h-mb-8">
					    	<div class="d-flex flex-column justify-content-center align-items-center">
					    		<div class="d-flex align-items-center">
							        <h3 class="c-price-block__price">{{formattedPrice(getPriceByDuration(price).value)}}</h3>
					    			<template v-if="getPriceByDuration(price).info">
						    			<button :id="`info-target-${index}`" class="c-price-block__info h-ml-2" >
								    		<svg><use href="#icon-exclamation"></use></svg>
								    	</button>
								    	<app-popover :target="`#info-target-${index}`"><i class="h-color-gray300">{{getPriceByDuration(price).info}}</i></app-popover>
					    			</template>
					    		</div>
						        <span class="c-price-block__price-title h-mb-2">{{getPriceByDuration(price).title}}</span>
					    	</div>
						    	
							<i class="c-price-block__price-meta">{{getPriceByDuration(price).meta}}</i>
					    </div>
					    <div class="d-flex justify-content-center">
					        <button class="c-btn c-btn_lg h-w-100 c-btn c-btn_primary c-btn_luminous c-price-block__action c-price-block__action_order">Записаться</button>
					    </div>
					</div>
				</div>
			</div>
		</div>
		<i class="h-color-red">Стоимость учебников не входит в стоимость курса.</i>
	</div>
</template>

<script>

import AppTabs from './AppTabs.vue';
import AppTab from './AppTab.vue';
import AppPopover from './AppPopover.vue';
export default {

    name: 'AppPrices',
    props: {
    	prices: {
    		type: Array,
    		default: () => []
    	}
    },
    components: {
    	AppTabs,
    	AppTab,
    	AppPopover
    },
    data() {
        return {
        	localPrices: this.prices
        }
    },
    methods: {
    	formattedPrice(price){
    		return Intl.NumberFormat('ru-RU').format(price);
    	},
    	getPriceByDuration(item){
    		let activeCommunicationType = item.activeCommunicationTypeIndex == 0 ? 'online' : item.activeCommunicationTypeIndex == 1 ? 'offline' : null;
	    	let activeDuration = activeCommunicationType ? item[activeCommunicationType].duration[item[activeCommunicationType].activeDurationIndex] : item.duration[item.activeDurationIndex];
	    	return activeCommunicationType ? item[activeCommunicationType].prices.find(price => activeDuration.value == price.duration) : item.prices.find(price => activeDuration.value == price.duration);
	    }
    }
}
</script>

<style lang="css" scoped>
</style>