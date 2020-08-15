require('lightgallery.js');

function init(){
	const galleries = document.querySelectorAll('.js-gallery-base');
	if(!galleries.length) return;
	galleries.forEach(item => {
		lightGallery(item);
	});
}


export default {
	init
}