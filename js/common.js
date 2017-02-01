$(document).ready(function(){

    $(".phone").mask("+ 7 (999) 999 - 99 - 99?");
    
    /*popup*/
        $('.popup-with-move-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,
            
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        });
    /*popup*/

    /*ajax send*/
    $('.az-send').submit(function(){
        
        return false;
    });
    /*ajax send*/

});


