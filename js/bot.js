$(window).on('load', function () {

	// Slider Bot ========================
	$('.bot__cards').on('click', '.bot__link', function () {
		$('.bot__slider').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.bot__slide').eq($(this).index()).addClass('active');
	});
});


