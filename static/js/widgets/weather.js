$(document).ready(function() {
	"use strict";

	$(".owl-carousel").owlCarousel({
		items: 6,
		responsive:{
			320:{
				items:1
			},
			480:{
				items:2
			},
			640:{
				items:2
			},
			768:{
				items:3
			},
			1024:{
				items:4
			},
			1368:{
				items:5
			},
			1400:{
				items:6
			}
		}
	});

	$('.weather-search .search-form').on('click', function(e) {
		event.preventDefault(); 
		event.stopPropagation();
		$(this).toggleClass('show');
	});

});