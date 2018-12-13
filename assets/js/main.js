jQuery(document).ready(function($) {

    // $('.level-bar-inner').css('width', '0');
    
    // $(window).on('load', function() {

    //     $('.level-bar-inner').each(function() {
        
    //         var itemWidth = $(this).data('level');
            
    //         $(this).animate({
    //             width: itemWidth
    //         }, 800);
            
    //     });

    // });
   
    $("#node-project-link").click( function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#node-project").offset().top
        }, 500);
    })

    $("#bupt-efly-link").click( function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#bupt-efly").offset().top
        }, 500);
    })

});