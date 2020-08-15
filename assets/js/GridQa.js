import Masonry from 'masonry-layout';

function init(){
	const grid = document.querySelector('.js-qa-grid');
	if(!grid) return;

	var msnry = new Masonry( grid, {
	  itemSelector: '.js-qa-grid-item',
	  gutter: 30,
	});

}

export default {
	init
}