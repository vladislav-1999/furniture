$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.top-week__nav-item1').on('click', function () {
    $('.top-week__nav-item1').addClass('top-week__nav-item-active')
    $('.top-week__nav-item2').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item3').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item4').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item5').removeClass('top-week__nav-item-active')
  })
  $('.top-week__nav-item2').on('click', function () {
    $('.top-week__nav-item2').addClass('top-week__nav-item-active')
    $('.top-week__nav-item1').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item3').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item4').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item5').removeClass('top-week__nav-item-active')
  })
  $('.top-week__nav-item3').on('click', function () {
    $('.top-week__nav-item3').addClass('top-week__nav-item-active')
    $('.top-week__nav-item1').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item2').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item4').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item5').removeClass('top-week__nav-item-active')
  })
  $('.top-week__nav-item4').on('click', function () {
    $('.top-week__nav-item4').addClass('top-week__nav-item-active')
    $('.top-week__nav-item1').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item2').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item3').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item5').removeClass('top-week__nav-item-active')
  })
  $('.top-week__nav-item5').on('click', function () {
    $('.top-week__nav-item5').addClass('top-week__nav-item-active')
    $('.top-week__nav-item1').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item2').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item3').removeClass('top-week__nav-item-active')
    $('.top-week__nav-item4').removeClass('top-week__nav-item-active')
  })

  $('.menu__list-item1').on('click', function () {
    $('.menu__list-item1').addClass('menu__list-item-active')
    $('.menu__list-item2').removeClass('menu__list-item-active')
    $('.menu__list-item3').removeClass('menu__list-item-active')
    $('.menu__list-item4').removeClass('menu__list-item-active')
    $('.menu__list-item5').removeClass('menu__list-item-active')
    $('.menu__list-item6').removeClass('menu__list-item-active')
  })
  $('.menu__list-item2').on('click', function () {
    $('.menu__list-item2').addClass('menu__list-item-active')
    $('.menu__list-item1').removeClass('menu__list-item-active')
    $('.menu__list-item3').removeClass('menu__list-item-active')
    $('.menu__list-item4').removeClass('menu__list-item-active')
    $('.menu__list-item5').removeClass('menu__list-item-active')
    $('.menu__list-item6').removeClass('menu__list-item-active')
  })
  $('.menu__list-item3').on('click', function () {
    $('.menu__list-item3').addClass('menu__list-item-active')
    $('.menu__list-item1').removeClass('menu__list-item-active')
    $('.menu__list-item2').removeClass('menu__list-item-active')
    $('.menu__list-item4').removeClass('menu__list-item-active')
    $('.menu__list-item5').removeClass('menu__list-item-active')
    $('.menu__list-item6').removeClass('menu__list-item-active')
  })
  $('.menu__list-item4').on('click', function () {
    $('.menu__list-item4').addClass('menu__list-item-active')
    $('.menu__list-item1').removeClass('menu__list-item-active')
    $('.menu__list-item2').removeClass('menu__list-item-active')
    $('.menu__list-item3').removeClass('menu__list-item-active')
    $('.menu__list-item5').removeClass('menu__list-item-active')
    $('.menu__list-item6').removeClass('menu__list-item-active')
  })
  $('.menu__list-item5').on('click', function () {
    $('.menu__list-item5').addClass('menu__list-item-active')
    $('.menu__list-item1').removeClass('menu__list-item-active')
    $('.menu__list-item2').removeClass('menu__list-item-active')
    $('.menu__list-item3').removeClass('menu__list-item-active')
    $('.menu__list-item4').removeClass('menu__list-item-active')
    $('.menu__list-item6').removeClass('menu__list-item-active')
  })
  $('.menu__list-item6').on('click', function () {
    $('.menu__list-item6').addClass('menu__list-item-active')
    $('.menu__list-item1').removeClass('menu__list-item-active')
    $('.menu__list-item2').removeClass('menu__list-item-active')
    $('.menu__list-item3').removeClass('menu__list-item-active')
    $('.menu__list-item4').removeClass('menu__list-item-active')
    $('.menu__list-item5').removeClass('menu__list-item-active')
  })

  var mixer = mixitup('.top-week__content');
})