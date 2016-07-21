(function($) {

  "use strict";

  var handheldBreakpoint = 980; //media query breakpoint at which the mobile menu is shown

  // seamless internal links scroll
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, function () {
	        window.location.hash = target;
	    });
	});

  // header menu burger
	jQuery('#header nav #menu-burger').on('click', function() {
		jQuery('#header nav #menu').toggleClass('menu-shown');
	});

  //  dropdownmenu, megamenu
	jQuery('.children, .sub-menu').hide();
	jQuery('#header nav #menu > ul li:has(ul)').on('mouseenter', function() {
		if ( jQuery(window).width() > handheldBreakpoint ) {
			var $this = jQuery(this);
			$this.addClass('active-parent');
			$this.find('> .children, > .sub-menu').stop(true).delay(150).slideDown(200);
		}
	}).on('mouseleave', function() {
		if ( jQuery(window).width() > handheldBreakpoint ) {
			var $this = jQuery(this);
			$this.find('> .children, > .sub-menu').stop(true).delay(150).slideUp(150, function() {
				$this.removeClass('active-parent');
			});
		}
	});

  $('body.home.loading').height( $(window).height() );
  $( "a:not(#gallery-filter a, #grid-changer a)" ).on( 'click', function( e ) {
    var link = $(this).attr('href');

    		if ( $( this ).attr( 'id' ) != 'votelikebutton' && $( this ).attr( 'target' ) != '_blank' && link.indexOf( '.jpg' ) < 0 && link.indexOf( '.jpeg' ) < 0 && link.indexOf( '.png' ) < 0 && link.indexOf( '.gif' ) < 0 && link.indexOf( '#' ) < 0 ) {
          $( '.loadreveal').removeClass('reveal');
          setTimeout( function() {
            window.location.href=link;
          }, 400);
          e.preventDefault();
    }
  });

  //Window loading function
  $(window).load(function() {

    //window load
    $('.loadreveal').addClass('reveal');
    $('#loadscreen').stop().animate( {opacity: 0 }, 200, function() {
      $('body.home').removeClass('loading');
      $(this).hide();
    });

    // masonry gallery
		var $masonry_gallery = jQuery('.masonry-gallery.gallery');
		if ( $masonry_gallery.length > 0 ) {

			$masonry_gallery.each( function(index, element) {
				var $masonry_items = $(element).find('.gallery-item');

				// set masonry layout
				$(element).isotope({
					masonry: { columnWidth: $(element).find('.gallery-item')[0] },
					itemSelector: '.gallery-item'
				});
				$(element).isotope('layout');

				// filtering
				jQuery('#gallery-filter li a').on('click', function(){
					jQuery('#gallery-filter li a').removeClass('active');
					jQuery(this).addClass('active');
					var selector = jQuery(this).attr('data-filter');
					$masonry_gallery.isotope({ filter: selector });
					return false;
				});

				// changing layout
				jQuery('#grid-changer li a').on('click', function(){
					jQuery('#grid-changer li a').removeClass('active');
					jQuery(this).toggleClass('active');

					$masonry_items.removeClass('col-3');
					$masonry_items.removeClass('col-4');
					$masonry_items.removeClass('col-5');
					$masonry_items.toggleClass(jQuery(this).closest('li').attr('class'));
					$masonry_gallery.isotope('layout');
				});

			});
		}

  });

  // init Magnific popup
	jQuery('a.popup').magnificPopup({
	  type: 'image',
	  gallery:{enabled:true},
	  titleSrc: 'alt',
	  cursor: 'mfp-zoom-out-cur'
	});

  // remove title on img hover
	var imgTitle;
	jQuery("img, a").on('hover', function(){
		imgTitle = jQuery(this).attr("title");
		jQuery(this).removeAttr("title");
	}, function(){
	   jQuery(this).attr("title", imgTitle);
	});

  // carousel
	var $blog_mini_carousel = jQuery('.blog-oneline-carousel');
	if ( $blog_mini_carousel.length > 0 ) {

			$blog_mini_carousel.tinycarousel({
				axis   : "y",
				interval: true,
				intervalTime: 4000
			});
	}

} ) ( jQuery );
