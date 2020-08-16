<template>
	<div class="c-tabs">
		<div class="c-tabs__nav">
			<button v-for="tab in tabs" @click="activateTab(tab)" class="c-tabs__button" :class="{'is-active': tab.localActive}">{{tab.title}}</button>
		</div>
		<div class="c-tabs__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {

  name: 'AppTabs',
  props: {
  	value: {
  		type: Number,
  		default: 0
  	}
  },
  provide(){
  	return {
  		AppTabs: this
  	}
  },
  model: {
  	prop: 'value',
  	event: 'input'
  },
  data () {
    return {
    	currentTab: 0,
    	tabs: []
    }
  },
  watch: {

  	currentTab(newVal){
  		this.tabs.forEach((tab, idx) => {
  			if(newVal === idx && !tab.disabled) {
  				tab.localActive = true;
  			} else {
  				tab.localActive = false;
  			}
  		});
  	}
  },
  methods: {
  	updateTabs(){
  		this.tabs[0].localActive = true;
  		this.$emit('input', 0);
  	},
  	activateTab(tab){
  		let index = this.tabs.indexOf(tab);
  		this.currentTab = index;
  		this.$emit('input', index);
  	},
  },
  mounted(){
  	this.updateTabs();
  }
}
</script>

<style lang="css" scoped>
</style>