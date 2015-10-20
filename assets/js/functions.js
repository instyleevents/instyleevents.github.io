$( document ).ready(function() {
  $('.slider').slick({
    autoplay: true,
    dots: false,
    arrows: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 1000
  });

  menuToggle();

  smoothScroll(500);

});

$( document ).scroll(function() {

  stickyNav();
  galleryScroll();
  sliderScroll();

});

function sliderScroll(){
  var wScroll = $(window).scrollTop();

    $('.slide-container').css('background-position','center -'+ wScroll/4 +'px')
    $('.slide-content').css('transform','translateY('+ wScroll/2 +'px)')

}

function galleryScroll(){
  var wScroll = $(window).scrollTop();

  $('.flex-video-strip').css('background-position', wScroll/6 + 'px center');

}

function menuToggle(){
  $('.toggle-nav').click(function(e){

    if($('.menu ul').hasClass('active')) {
      $('.menu ul').removeClass('active');
    } else {
      $('.menu ul').addClass('active');
    }

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
