$(function(){
    $('.slider').slick({
        prevArrow: '<img src="images/arrow-left.svg" alt="arrow-left" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" alt="right.svg" class="slider__arrow slider__arrow-right">',
        dots: true,
        
    });
    $('.item').slick({
        prevArrow: '<img src="images/arrow-left.svg" alt="arrow-left" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" alt="right.svg" class="slider__arrow slider__arrow-right">',
        slidesToShow: 4,
        
        dots: true,
        infinite: false,
        
    });
    $('.slick-dots li button').remove();
    $('.slick-dots li').addClass('transparent-circle');

    
});


