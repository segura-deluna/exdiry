// * FAQ Slider =======================================

const faqSwiper = new Swiper('.faq__slider-container', {
	loop: true,
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	speed: 800,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
});


// * News Slider ========================================

const newsSwiper = new Swiper('.news__slider-container', {
	loop: true,
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	centeredSlides: true,
	speed: 800,
	navigation: {
		nextEl: '.news-button-next',
		prevEl: '.news-button-prev',
	}

});



