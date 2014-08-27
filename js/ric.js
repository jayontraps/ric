(function($) {       

    $(document).ready( function () {

        $.lockfixed(".test",{offset: {top: 10, bottom: 410}});

        $(function() {
            $('.col').matchHeight();
        });        

        $('.sub-menu').hover(
            function() {
                $this = $(this);
                $this.parent().addClass('on');

            }, function() {
                $this.parent().removeClass('on');
            });

        // var navBullets = $('<span/>', {
        //     html: '&bull;',
        //     'class': 'navBullets'
        // });

        var subMenuTrigger = $('<span/>', {
            html: '&raquo;',
            'class': 'subMenuTrigger'
        });

        // $("#menu-primary > li").prepend(navBullets);
        var $portfolio_link = $('.portfolio_link > a');

        $portfolio_link.after(subMenuTrigger);


        if ($('body').hasClass('page-template-page-portfolio-php')) {
            $(subMenuTrigger).addClass('rotate');
        };

        var toggleSubMenu = function(e) {
            e.preventDefault();
            $('.sub-menu').slideToggle();
            subMenuTrigger.toggleClass('rotate');
        }

        $portfolio_link.on('click', toggleSubMenu);        
        subMenuTrigger.on('click', toggleSubMenu);


        // fade in content on pageload
        $('#site-navigation, .frame').animate({
            opacity: 1
          }, 400);




        // sticky nav  

        // var navEll = $("#site-navigation"),
        //     contEll = $("#content"),
        //     menuOffset = $('#site-navigation')[0].offsetTop;


        // $(document).bind('ready scroll', function() {

        //     var docScroll = $(document).scrollTop();

        //     if (docScroll >= menuOffset) {
        //         navEll.addClass('fixed');
        //         contEll.addClass('fixed-state');
        //     } else {
        //         navEll.removeClass('fixed');  
        //         contEll.removeClass('fixed-state');          
        //     }

        // });



        // backToTop link

        // $("#backToTop").hide();

        // $(function () {
        //     $(window).scroll(function () {
        //         if ($(this).scrollTop() > 100) {
        //             $('#backToTop').fadeIn();
        //         } else {
        //             $('#backToTop').fadeOut();
        //         }
        //     });

        //     // scroll body to 0px on click
        //     $('#backToTop a').click(function () {
        //         $('body,html').animate({
        //             scrollTop: 0
        //         }, 800);
        //         return false;
        //     });
        // }); 


        // animate scroll to positon
        
        // $('#foo').click(function () {
        //     $('html,body').animate({
        //         scrollTop: $("#scrollToHere").offset().top
        //     }, 800);
        // });


        // captions






        $('.fotorama')
        .on('fotorama:show fotorama:load', function (e, fotorama) {    
            fotorama.$caption = fotorama.$caption || $(this).next('.fotorama-caption');
            fotorama.$caption.text(fotorama.activeFrame.caption);
            $('.fotorama-caption').insertAfter('.fotorama__stage').show();           
        });


        // Hide the thumbs on load
        $('.fotorama__nav-wrap').addClass('idle'); 


        // 1. Initialize fotorama manually.
        var $fotoramaDiv = jQuery('.fotorama').fotorama();        
        // 2. Get the API object.
        var fotorama = $fotoramaDiv.data('fotorama');

        // add our buttons 
        jQuery("<div class='fotorama_custom__arr fotorama_custom__arr--prev'><</div>").insertBefore(".fotorama__nav-wrap");
        jQuery("<div class='fotorama_custom__arr fotorama_custom__arr--thumbs'><</div>").insertBefore(".fotorama__nav-wrap");
        jQuery("<div class='fotorama_custom__arr fotorama_custom__arr--next'>></div>").insertBefore(".fotorama__nav-wrap");


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
            $('.fotorama__nav-wrap').toggleClass('idle');
            // console.log('thumbs clicked');
        });   



        var getCurrentHeight = function(el) {
            // currentHeight = $(el).height();
            // console.log(currentHeight);
            // $('#masthead').css('height', currentHeight);
            // return currentHeight;
        }

        // jQuery(window).on('resize', getCurrentHeight('.fotorama__stage'));

        // getCurrentHeight('.fotorama__stage');        




        // create equal height ellements on desktop

        if ($('body').hasClass('page-template-page-portfolio-php')) {        


            function setHeight(mql) {
                if (mql.matches) {

                    // console.log("big!");

                    $( window ).on('resize.foo load.foo', function() {
                        currentHeight = $('.fotorama__stage').height();
                        // console.log(currentHeight);
                        $('#masthead').css('height', currentHeight);
                    });

                        $('#moreInfo').show(); 
                        $('#moreInfo').removeClass('mob');



                    } else {
                        // $('#masthead').css('height', "auto");
                        $( window ).off('resize.foo load.foo');
                        $('#masthead').css('height', "auto");
                        $('#moreInfo').addClass('mob');
                        // console.log("small!");

                }           
            } 

            // setup matchMedia - fire on min-width: 480px
            var mql = window.matchMedia("(min-width: 580px)");
            mql.addListener(setHeight);
            setHeight(mql);

        }







        //slide out gallery deatils
        $('#moreInfo').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('info-state');


            if ($(this).hasClass('opened')) {
                $('.galleryWrap').toggleClass('on');
                $(this).removeClass('opened');
                $('.gallery_intro').animate({
                    left: "-100%",
                    opacity: 0
                  }, 400);
                $(this).html('More Info &raquo;');

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
                  $(this).html('&laquo; Back to gallery') ;

                if ($('html').hasClass('no-touch')) {
                    $('#menu-primary').removeClass('idle');
                }            
            }        
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

})(jQuery);
















idleTimer = null;
idleState = false;
idleWait = 3000;

(function ($) {

    $(document).ready(function () {

        var $nav_wrap = $('#menu-primary');

        if ($('body').hasClass('page-template-page-portfolio-php') && $('html').hasClass('no-touch')) {

            // $('#').bind('mousemove keydown scroll', function () {
            $nav_wrap.bind('mousemove keydown scroll', function () {                
            
                clearTimeout(idleTimer);
                        
                if (idleState == true) { 
                    
                    // Reactivated event
                    // $("body").append("<p>Welcome Back.</p>");    
                    $nav_wrap.removeClass('idle')        
                }
                
                idleState = false;
                
                idleTimer = setTimeout(function () { 

                    if ($('body').hasClass('info-state') == 0) {
                        // Idle Event
                        $nav_wrap.addClass('idle');                         
                    };
       

                    // $("body").append("<p>You've been idle for " + idleWait/1000 + " seconds.</p>");

                    idleState = true; }, idleWait);
            });
            
            $("body").trigger("mousemove");


            // fade out navigation on hover
            // var controls = $('.fotorama__stage, .fotorama-caption, .fotorama_custom__arr ');
            var controls = $('.frame');            
            controls.hover(function() {
                $nav_wrap.addClass('idle');
            }, function() {
                $nav_wrap.removeClass('idle');
            });


        }

    
    });




}) (jQuery)



