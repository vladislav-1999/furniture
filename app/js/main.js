$(function () {

  $(".star").rateYo({
    rating: 3.6,
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".star-shop").rateYo({
    rating: 3.6,
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });
  
  $(".filter-price__slider").ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 50,
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.menu__list-item').on('click', function () {
    $('.menu__list-item').removeClass('menu__list-item-active')
    $(this).addClass('menu__list-item-active')
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
  
})


