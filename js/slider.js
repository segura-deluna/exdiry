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
	centeredSlides: true,
	speed: 600,
	navigation: {
		nextEl: '.news-button-next',
		prevEl: '.news-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},

		840: {
			slidesPerView: 3,
			spaceBetween: 0
		}
	}
});


// * Partner-Program Slide ======================================

const tableSlider = new Swiper('.mob-tabs__table', {
	loop: true,
	observer: true,
	observeParents: true,
	centeredSlides: true,
	speed: 600,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
});


// * Promotional Slider =====================================

const promoSlider = new Swiper('.promotional-desk__container', {
	loop: true,
	observer: true,
	observeParents: true,
	centeredSlides: true,
	speed: 600,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	}
});