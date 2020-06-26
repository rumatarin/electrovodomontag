$(document).ready(function () {
  // Инициализация слайдера
  $(".slider__wrapper").slick({
    autoplay: false,
    arrows: false,
    dots: true,
    dotsClass: "slider__dots",
  });

  $(".slider__wrapper-mobile").slick({
    autoplay: false,
    arrows: false,
    dots: true,
    dotsClass: "slider__dots",
  });

  //Кнопка показать еще в галерее
  const mq = window.matchMedia( "(max-width: 479px)" );
  const mqM = window.matchMedia("(min-width: 768px)");
  if (mq.matches) {
    $(".js__moreBox").slice(0, 2).show();
  } else if(mqM.matches) {
    $(".js__moreBox").slice(0, 4).show();
  } 

  $(".js__moreBox").slice(0, 4).show();
  if ($(".js__galBox:hidden").length != 0) {
    $("#loadMore").show();
  }
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".js__moreBox:hidden").slice(0, 2).slideDown();
    if ($(".js__moreBox:hidden").length == 0) {
      $("#loadMore").fadeOut("slow");
    }
  });

  $("#js_accordion").accordionjs({
    activeIndex : false,
  });

  $('.services__wrapper-mobile').accordionjs({
    activeIndex: false,
  });

  $('.services-price__wrapper-mobile').accordionjs({
    activeIndex: false,
  });

  $('.infoblock-mobile').accordionjs({
    activeIndex: false,
  });

  

  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    overflowY: 'hidden',
    fixedContentPos: false,
    fixedBgPos: true
  });

  let hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });

  $(".header__mobile-menu").hide();

  $(".hamburger").click(function () {
    $(".header__mobile-menu").slideToggle("250");
  });


});