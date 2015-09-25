$( document ).ready(function() {
  smoothScroll(800);
  navHide();

  $("header h1").fitText(1, { minFontSize: '36px', maxFontSize: '48px'});
});

$( document ).scroll(function() {

  navAnimate();

});

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

function navAnimate() {
  var wTop = $(document).scrollTop();
  console.log(wTop);
  if (wTop >= 200) {
    $('.sticky-nav').fadeIn(500);
  } else {
    $('.sticky-nav').fadeOut(300);
  }
}

function navHide() {
  $('.sticky-nav').hide();
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
