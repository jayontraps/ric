(function($) {       

    $(document).ready( function () {

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

        $('#menu-item-54 > a').after(subMenuTrigger);


        if ($('body').hasClass('page-template-page-portfolio-php')) {
            $(subMenuTrigger).addClass('rotate');
        };

        $(subMenuTrigger).on('click', function() {
            $('.sub-menu').slideToggle();
            $(this).toggleClass('rotate');
        });


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




    });

})(jQuery);