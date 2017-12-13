$(function() {

    var $Presents = $('#Presents'),
        $box = $('.box'),
        $PresentB = $('#PresentB'),
        $sIcons = $('.sIcon'),
        $socialLinkP = $('.socialLinkP');

    /* Jump Presents */
    tlJumpPresent = new TimelineMax({paused: true});

    $('.nav-gift').click(function(){
        $('.nav-gift').toggleClass('stopAnimation');
        $('body').toggleClass('open');
        $('.global-nav').toggleClass('open-nav');
        $('.nav-link').toggleClass('nav-link-animation');
    });

});
