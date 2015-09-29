$( document ).ready(function() {
  $('.slick').slick({
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    speed: 1500
  });

  menuToggle();

  smoothScroll(1000);

});

$( document ).scroll(function() {

  stickyNav();

});

function menuToggle(){
  $('.toggle-nav').click(function(e){
    $(this).toggleClass('active');
    $('.menu ul').toggleClass('active');

    e.preventDefault();
  });
}

function stickyNav(){
  var yAxis = $(this).scrollTop();
  if (yAxis >= 200){
    $('.menu').addClass('sticky');
  } else {
    $('.menu').removeClass('sticky');
  }
}

function smoothScroll(duration) {
  $('a[href^="#"]').on('click', function(event){

    var target = $( $(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
