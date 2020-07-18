(function($) {
	
	// ______________Owl-carousel-icons2
	var owl = $('.owl-carousel-icons2');
	owl.owlCarousel({
		loop: true,
		rewind: false,
		margin: 0,
		animateIn: 'fadeInDowm',
		animateOut: 'fadeOutDown',
		autoplay: false,
		autoplayTimeout: 5000, // set value to change speed
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		autoplay: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 7,
				nav: true
			},
			1300: {
				items: 7,
				nav: true
			}
		}
	})
	
	// ______________Multislider
	$('#basicSlider').multislider({
		continuous: true,
		duration: 2000
	});
	
	
})(jQuery);

