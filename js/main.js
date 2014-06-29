(function($) {       

    $(document).ready( function () {

        $('.sub-menu').hover(
            function() {
                $this = $(this);
                $this.parent().addClass('on');

            }, function() {
                $this.parent().removeClass('on');
            });

        var navBullets = $('<span/>', {
            html: '&bull;',
            'class': 'navBullets'
        });

        $("#menu-primary > li").not(':first').prepend(navBullets);

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