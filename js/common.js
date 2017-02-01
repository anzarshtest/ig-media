$(document).ready(function(){

    $(".phone").mask("+ 7 ( 999 ) 999 - 99 - 99?");

    /*popup*/
        $('.popup-with-move-anim').click(function(){
            if($(this).attr('data-tax') != ''){
                $('#az-tax').val($(this).attr('data-tax'));
            }
        });
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
    function az_validateEmail(email2) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email2);
    }
    function cleanTnakns(form){
        $('input[type="text"]').removeClass("error-input");
        $("input[type=text], textarea").val("");
        $(form).parents('.popup-first').hide().next('.popup-thanks').show();
    }

    $('*:not(input[name="tel"])').mousedown(function() { 
        $('input[type="text"], textarea').removeClass("error-input");
    });

    $('.az-send').submit(function(){
        var tel = $(this).find('input[name="tel"]');
        var empty = false;
        var az_this = $(this);
        reg_tel = /^((8|\+ 7 )[\- ]?)?(\( ?\d{3} \) ?[\- ]?)?[\d\- ]{7,13}$/
        if (!reg_tel.test(tel.val())){
            empty = true;
        }
        if (empty == true){
            tel.addClass("error-input");
            tel.focus();
        }else{
            var form_data = $(this).serialize()+'&url='+location.href;
            $.ajax({
                type: "POST", 
                url: "/sender.php", 
                data: form_data,
                success: function(data) {
                    data2 = eval('('+data+')');
                    // alert(typeof(data2));
                    // alert(typeof(data));
                    if(data2.result){
                        // alert(2);
                        $('input[type="text"]').removeClass("error-input");
                        $("input[type=text], textarea").val("");
                        az_this.parents('.popup-first').hide().next('.popup-thanks').show();
                    }else{
                        // alert(1);
                    }
                }
            });
        }
        return false;
    });
    $('.az-send2').submit(function(){
        var email = $(this).find('input[name="email"]');
        // alert(email.val());
        var uname = $(this).find('input[name="uname"]');
        var text = $(this).find('textarea[name="text"]');
        var empty = false;
        var az_this = $(this);
        if (!az_validateEmail(email.val())){
            empty = true;
        }
        if (empty == true){
            email.addClass("error-input");
            email.focus();
        }else if(uname.val() == ''){
            uname.addClass("error-input");
            uname.focus();
        }else if(uname.val() == ''){
            text.addClass("error-input");
            text.focus();
        }else{
            var form_data = $(this).serialize()+'&url='+location.href;
            $.ajax({
                type: "POST", 
                url: "/sender.php", 
                data: form_data,
                success: function(data) {
                    data2 = eval('('+data+')');
                    // alert(typeof(data2));
                    // alert(typeof(data));
                    if(data2.result){
                        // alert(2);
                        $('#az-thanks').trigger('click');
                    }else{
                        // alert(1);
                    }
                }
            });
        }
        return false;
    });
    /*ajax send*/

    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.header-inner').addClass('az-mob-menu-fix');
        }else{
            $('.header-inner').removeClass('az-mob-menu-fix');
        }
        if($(window).scrollTop()>200){
            $('.header-inner').addClass('az-mob-menu-fix2');
        }else{
            $('.header-inner').removeClass('az-mob-menu-fix2');
        }
    });

});


