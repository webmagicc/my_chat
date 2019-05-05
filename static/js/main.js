(function($){

	"use strict";

	var Admin = {

      	// Country Selector 

      	countryselect: function() {
      		$("#country_selector").countrySelect({
      			defaultCountry: "us",
      			onlyCountries: ['us', 'gb', 'de', 'ca', 'do']
				//preferredCountries: ['ca', 'gb', 'us']
			});
      	},

      	// Slim Scroll

      	tinyScroll: function() {
      		$('.dropdown-content').scrollbar();
      	},


      	// Elements Equal Heights

      	matchHeight: function() {
      		$('.equal-height').matchHeight({ 
      			property: 'min-height',
      		});
      	},

		// Top right menu select

		counterUp: function() {
			try { 
				(function($) {
					$('.statistic-details .count, .widget-text h3').counterUp({
						delay: 15,
						time: 1500
					});
				})(jQuery);
			} catch(e) { 

			}
		},

	};


	$(document).ready(function() {
		"use strict";

		// Add Class for equal heights

		var leftpanelheight = $('aside.left-panel').height();
		$('.dashboard-contents').css('min-height', (leftpanelheight));

		// ToolTop Activator	
		$('.corner-content button').tooltip();

		// Corner Content Adding class 

		$('.corner-content .content-refresh').on('click', function(e) {
			function test(event){
				e.preventDefault();
				$('.section-content .content-details').xpull({
					'callback':function(){
						console.log('Released...');
					}
				});	
			}
		});

		$('.corner-content .content-collapse').on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			var $collapse = $this.closest('.section-content').toggleClass('hide-content');
		});

		$('.corner-content .content-close').on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			var $collapse = $this.closest('.section-content').remove();
		});

		// Background Img

		$(".background-bg").css('background-image', function () {
			var bg = ('url(' + $(this).data("image-src") + ')');
			return bg;
		});

		// Sidebar Menu Open

		$('.sidenav-toggle').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation();
			$('body').toggleClass('open');
		});

		// Sidebar Menu Close

		$('.menu-close').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation();
			$('body').removeClass('open');
		});

		// Traffic Chart Height	
		var chartsheight = $('.left-charts').height();
		$('.right-charts .traffic-chart').css('height', chartsheight-176);
		

		Admin.countryselect();
		Admin.tinyScroll();
		Admin.matchHeight();
		Admin.counterUp();
	});

	// Shortening Texts

	if ($(window).width() < 992) {
		"use strict";

		var minimized_elements = $('.posts.style-02 article p, .posts.style-03 article p');

		minimized_elements.each(function(){    
			var t = $(this).text();        
			if(t.length < 130) return;

			$(this).html(
				t.slice(0,130)+'<span>... </span><a href="#" style="display:none;" class="more">More</a>'+'<span style="display:none;">'+ t.slice(130,t.length)+' <a href="#" style="display:none;" class="less">Less</a></span>');
		}); 
	};


	if ($(window).width() > 992) {
		"use strict";

		// Footer Bottom	
		var footerheight = $('footer.site-footer').height();
		$('.dashboard-contents').css('padding-bottom', footerheight + 68);
	};

	// Responsive Menu Open and Close in Mobile

	if ($(window).width() < 767) {
		"use strict";
		$('.menu-item-has-children>a').on('click', function(e) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});

		$('.top-header.media').removeClass('media');
		$('.top-right.media-body').removeClass('media-body');
		// Footer Bottom	
		var footerheight = $('footer.site-footer').height();
		$('.dashboard-contents').css('padding-bottom', footerheight + 40);
	};

})(jQuery);

