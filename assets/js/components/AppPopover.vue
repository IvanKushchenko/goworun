<template>
	<div class="c-popover" v-show="popover.show" ref="popover"><slot></slot></div>
</template>

<script>
import { createPopper } from '@popperjs/core';
export default {

    name: 'AppPopover',
    props: {
    	target: {
    		type: [String]
    	}
    },
    data() {
        return {
        	popover: {
        		instance: null,
        		show: false
        	}
        }
    },
    methods: {
        createPopover(target, popover) {
        	this.popover.instance = createPopper(document.querySelector(this.target), this.$refs.popover, {
            	placement: 'top',
            	modifiers: [
            		{
            			name: 'offset',
            			options: {
            				offset: [0, 10]
            			}
            		}
            	]
            });
        },
        destroyPopover(target, popover) {
        	this.popover.instance.destroy();
            this.popover.instance = null;
        },
        createEvents(){
        	let target = document.querySelector(this.target);
        	let showEvents = ['mouseenter', 'focus'];
        	let hideEvents = ['mouseleave', 'blur'];

        	showEvents.forEach(event => {
        		target.addEventListener(event, () => {
        			this.popover.show = true;
        			this.createPopover();
        		});
        	});

        	hideEvents.forEach(event => {
        		target.addEventListener(event, () => {
        			this.popover.show = false;
        			this.destroyPopover();
        		});
        	});
        }
    },
    mounted(){
    	this.createEvents();
    }
}
</script>

<style lang="css" scoped>
</style>