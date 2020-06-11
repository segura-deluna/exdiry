$(window).on('load', function () {
	$('#invest').vide({
		mp4: './video/saigon',
		poster: './img/main_bg'
	}, {
		playbackRate: 1,
		muted: false,
		loop: true,
		autoplay: true,
		position: '50% 50%', // Similar to the CSS `background-position` property.
		posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
		resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
		bgColor: 'transparent', // Allow custom background-color for Vide div,
		className: '' // Add custom CSS class to Vide div
	});
});

