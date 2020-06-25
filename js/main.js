$(window).on('load', function () {
	$('#invest').vide({
		mp4: './video/saigon',
		poster: './img/main_bg'
	},

		{
			loop: true,
			autoplay: true,
			playbackRate: 1,
			muted: false,
			position: '50% 50%', // Similar to the CSS `background-position` property.
			posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
			resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
			bgColor: 'transparent', // Allow custom background-color for Vide div,
			className: '' // Add custom CSS class to Vide div
		});

	// Trigger tabs in modal calculator ========================
	$('.calculator-tabs').on('click', '.calculator-tabs-triggers__item', function () {
		$('.calculator-tabs').find('.active').removeClass('active');
		$(this).addClass('active');
		$('.calculator-tabs-content__item').eq($(this).index()).addClass('active');
	});

});


