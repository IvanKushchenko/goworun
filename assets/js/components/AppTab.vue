<template>
	<div v-if="localActive" class="c-tab"><slot></slot></div>
</template>

<script>
export default {

  name: 'AppTab',
  inject: ['AppTabs'],
  props: {
  	title: {
  		type: String
  	},
  	active: {
  		type: Boolean,
  		default: false
  	}
  },
  data () {
    return {
    	localActive: this.active
    }
  },
  created(){
  	this.AppTabs.tabs.push(this);
  }
}
</script>

<style lang="css" scoped>
</style>