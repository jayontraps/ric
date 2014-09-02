(function($) {       

    $(document).ready( function () {

        "use strict";

        // $.lockfixed('.test',{offset: {top: 10, bottom: 410}});




    // create equal height ellements on desktop
    var media_query = window.matchMedia('(min-width: 770px)');

    if ($('body').hasClass('page-template-page-portfolio-php')) {
        media_query.addListener(matchElHeights);
        // matchElHeights(media_query);        
    }



    function matchElHeights(media_query, stageHeight) {
      if (media_query.matches) {
        stageHeight = fotorama.activeFrame.$stageFrame.height(); 
        $('#masthead').css('height', (stageHeight + 32));
        $('#moreInfo').show(); 
        $('#moreInfo').removeClass('mob');        
      } else {
        $('#masthead').css('height', 'auto');    
      }
    }       


    

    // fade in content on pageload
    $('#site-navigation, .frame').animate({
        opacity: 1
    }, 400);



    $('.fotorama')
    .on('fotorama:show fotorama:load', function (e, fotorama) {    
        fotorama.$caption = fotorama.$caption || $(this).next('.fotorama-caption');
        fotorama.$caption.text(fotorama.activeFrame.caption);


        $('.fotorama-caption').insertAfter('.fotorama__stage').show(); 
        // set the height of our #masthead based on the height of the stage
        var stageHeight = ''; 

        matchElHeights(media_query, stageHeight);  

        console.log(stageHeight);

        // $('#masthead').css('height', stageHeight);

    });


    // // Hide the thumbs on load
    // $('.fotorama__nav-wrap').addClass('idle');


    // 1. Initialize fotorama manually.
    var $fotoramaDiv = jQuery('.fotorama').fotorama();        
    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');

    // add our buttons 
    jQuery('<div class="fotorama_custom__arr fotorama_custom__arr--prev"><</div>').insertBefore('.fotorama__nav-wrap');
    jQuery('<div class="fotorama_custom__arr fotorama_custom__arr--thumbs"><</div>').insertBefore('.fotorama__nav-wrap');
    jQuery('<div class="fotorama_custom__arr fotorama_custom__arr--next">></div>').insertBefore('.fotorama__nav-wrap');



    // var controls_prev = jQuery('<div class='fotorama_custom__arr fotorama_custom__arr--prev'><svg viewBox='0 0 100 100' class='icon'><use xlink:href='#icon-arrow-left' ></use></svg></div>');

    // var controls_thumb = jQuery('<div class='fotorama_custom__arr fotorama_custom__arr--thumbs'><svg viewBox='0 0 100 100' class='icon'><use xlink:href='#icon-ellipsis' ></use></svg></div>');

    // var controls_next = jQuery('<div class='fotorama_custom__arr fotorama_custom__arr--next'><svg viewBox='0 0 100 100' class='icon'><use xlink:href='#icon-arrow-left2' ></use></svg></div>');

    // $('<div class='control_wrap cf'></div>')
    // .append(controls_prev)
    // .append(controls_thumb)
    // .append(controls_next)
    // .insertBefore('.fotorama__nav-wrap');


    // make the buttons functionality
    jQuery('.fotorama_custom__arr--prev').click(function () {
        // if (fotorama.activeIndex === 0) {
        //     $(this).addClass('disable');
        // } else {
        //     $(this).removeClass('disable');
        // }

        fotorama.show('<');
    });



    jQuery('.fotorama_custom__arr--next').click(function () {
        fotorama.show('>');
        // console.log(fotorama.activeIndex);
    });

    jQuery('.fotorama_custom__arr--thumbs').click(function () {
        $(this).toggleClass('on');
        // $('.fotorama__nav-wrap').toggleClass('idle');
        // $('.fotorama__nav-wrap').animate({
        //     height: 'toggle'
        // }, 'fast');
        $('.fotorama__nav-wrap').toggle();

        // console.log('thumbs clicked');
    });   






    $('.fotorama')
        // Listen to the events
        .on(
            // 'fotorama:ready ' +           // Fotorama is fully ready
            // 'fotorama:show ' +            // Start of transition to the new frame
            'fotorama:showend ' +         // End of the show transition
            'fotorama:load '             // Stage image of some frame is loaded
            // 'fotorama:error ' +           // Stage image of some frame is broken
            // 'fotorama:startautoplay ' +   // Slideshow is started
            // 'fotorama:stopautoplay ' +    // Slideshow is stopped
            // 'fotorama:fullscreenenter ' + // Fotorama is fullscreened
            // 'fotorama:fullscreenexit ' +  // Fotorama is unfullscreened
            // 'fotorama:loadvideo ' +       // Video iframe is loaded
            // 'fotorama:unloadvideo'
            ,       // Video iframe is removed

            function (e, fotorama, extra) {

                var index = fotorama.data.length - 1;

                // console.log(index);


                if (fotorama.activeIndex === 0) {
                    $('.fotorama_custom__arr--prev').addClass('disable');
                } else {
                    $('.fotorama_custom__arr--prev').removeClass('disable');
                }

                if (fotorama.activeIndex === index) {
                    $('.fotorama_custom__arr--next').addClass('disable');
                } else {
                    $('.fotorama_custom__arr--next').removeClass('disable');
                }


              // console.log('## ' + e.type);
              // console.log('active frame', fotorama.activeFrame);
              // console.log('additional data', extra);
            }
        );     

    });



       






        //slide out gallery deatils
        $('#moreInfo').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('info-state');


            if ($(this).hasClass('opened')) {
                $('.galleryWrap').toggleClass('on');
                $(this).removeClass('opened');
                $('.gallery_intro').animate({
                    left: '-100%',
                    opacity: 0
                  }, 400);
                $(this).html('Info&nbsp;&nbsp;&raquo;');

                if ($('html').hasClass('no-touch')) {
                    $('#menu-primary').addClass('idle');
                }

            } else {

                $(this).addClass('opened');
                $('.galleryWrap').toggleClass('on');
                $('.gallery_intro').animate({
                    left: 0,
                    opacity: 1
                  }, 400); 
                  $(this).html('&laquo;&nbsp;&nbsp;Back to gallery') ;

                if ($('html').hasClass('no-touch')) {
                    $('#menu-primary').removeClass('idle');
                }            
            }        
        });

})(jQuery);













 
// timer Listening for mouse idle

idleTimer = null;
idleState = false;
idleWait = 3000;

(function ($) {

    $(document).ready(function () {

        var $nav_wrap = $('#menu-primary');

        if ($('body').hasClass('page-template-page-portfolio-php') && $('html').hasClass('no-touch')) {

            $nav_wrap.bind('mousemove keydown scroll', function () {                
            
                clearTimeout(idleTimer);
                        
                if (idleState === true) { 
                    
                    // Reactivated event
                    // $('body').append('<p>Welcome Back.</p>');    
                    $nav_wrap.removeClass('idle');        
                }
                
                idleState = false;
                
                idleTimer = setTimeout(function () { 

                    if ($('body').hasClass('info-state') === 0) {
                        // Idle Event
                        $nav_wrap.addClass('idle');                         
                    }
       

                    // $('body').append('<p>You've been idle for ' + idleWait/1000 + ' seconds.</p>');

                    idleState = true; }, idleWait);
            });
            
            $('body').trigger('mousemove');


            // fade out navigation on hover
            var controls = $('.frame');            
            controls.hover(function() {
                $nav_wrap.addClass('idle');
            }, function() {
                $nav_wrap.removeClass('idle');
            });

        }
    
    });

}) (jQuery);





// http://css-tricks.com/snippets/jquery/shuffle-dom-elements/ - random img order on load
// fire maximage plugin
(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };





    $(document).ready(function() {

        $('#maximage img').shuffle();

        $('#maximage').fadeIn('slow');

        // var imgs = $('#maximage img');
        // imgs.sort(function() { return 0.5 - Math.random() });
        // $('#maximage').html( imgs );


        // Trigger maximage
        jQuery('#maximage').maximage({
            cycleOptions: {
                fx: 'fade',
                // // Speed has to match the speed for CSS transitions
                // speed: 1000, 
                // timeout: 0,
                prev: '#arrow_left',
                next: '#arrow_right'
            },

            onFirstImageLoaded: function(){
                jQuery('#cycle-loader').hide();
                jQuery('#maximage').fadeIn('fast');
            },

        });

    });

   
})(jQuery);




 



