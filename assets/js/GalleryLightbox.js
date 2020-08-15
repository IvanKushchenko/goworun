require('lightgallery.js');

function init(){
	const galleries = document.querySelectorAll('.js-gallery-item');
	if(!galleries.length) return;
	galleries.forEach(item => {
		let images = JSON.parse(item.getAttribute('data-images'));
		images = [...images].map(image => ({src: image}) );
		item.addEventListener("click", (e) => {
			e.preventDefault();

			lightGallery(item, {
				dynamic: true,
				dynamicEl: images
			})
		})
	});
}


export default {
	init
}