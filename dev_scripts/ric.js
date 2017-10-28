(function($) {       

    $(document).ready( function () {

        "use strict";

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
        });



        // 1. Initialize fotorama manually.
        var $fotoramaDiv = jQuery('.fotorama').fotorama();        
        // 2. Get the API object.
        var fotorama = $fotoramaDiv.data('fotorama');

        // add our buttons 
        jQuery('<div class="fotorama_custom__arr fotorama_custom__arr--prev"><</div>').insertBefore('.fotorama__nav-wrap');
        jQuery('<div class="fotorama_custom__arr fotorama_custom__arr--thumbs"><</div>').insertBefore('.fotorama__nav-wrap');
        jQuery('<div class="fotorama_custom__arr fotorama_custom__arr--next">></div>').insertBefore('.fotorama__nav-wrap');

        // $('<div class='control_wrap cf'></div>')
        // .append(controls_prev)
        // .append(controls_thumb)
        // .append(controls_next)
        // .insertBefore('.fotorama__nav-wrap');


        // make the buttons functionality
        $('.fotorama_custom__arr--prev').click(function () {
            // if (fotorama.activeIndex === 0) {
            //     $(this).addClass('disable');
            // } else {
            //     $(this).removeClass('disable');
            // }

            fotorama.show('<');
        });



        $('.fotorama_custom__arr--next').click(function () {
            fotorama.show('>');
        });

        $('.fotorama_custom__arr--thumbs').click(function () {
            $(this).toggleClass('on');
            // $('.fotorama__nav-wrap').toggleClass('idle');
            // $('.fotorama__nav-wrap').animate({
            //     height: 'toggle'
            // }, 'fast');
            $('.fotorama__nav-wrap').toggle();
        });   






        // $('.fotorama')
        // .on('fotorama:showend ' + 'fotorama:load ' , function (e, fotorama, extra) {

        //             var index = fotorama.data.length - 1;

        //             if (fotorama.activeIndex === 0) {
        //                     $('.fotorama_custom__arr--prev').addClass('disable');
        //                 } else {
        //                     $('.fotorama_custom__arr--prev').removeClass('disable');
        //             }

        //             if (fotorama.activeIndex === index) {
        //                     $('.fotorama_custom__arr--next').addClass('disable');
        //                 } else {
        //                     $('.fotorama_custom__arr--next').removeClass('disable');
        //             }
        //         }
        //     );     





        $('.fotorama')
        .on('fotorama:fullscreenenter ', function (e, fotorama) {    
            $('.fotorama-caption').css('height','0') ;
        });

        $('.fotorama')
        .on('fotorama:fullscreenexit ', function (e, fotorama) {    
            $('.fotorama-caption').css('height','auto') ;
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




 



