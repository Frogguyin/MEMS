$(document).ready(function () {
    $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
        captions: true, 
        nextText: '',
        prevText: '',
        easing: 'jswing',
    });
});
