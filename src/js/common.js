$(document).ready(function(){

  $(".contacts__btn").on("click", function() {
    $("#overlay-form").show();
    yaCounter50716078.reachGoal('callButton');
  });

  $(".products-block__buttons .btn-orange").on("click", function() {
    $("#overlay-form").show();
    yaCounter50716078.reachGoal('callButton');
  });

  $(".popup-form__btn").on("click", function() {
    yaCounter50716078.reachGoal('callButton');
  });

  $(".main-form .btn-orange").on("click", function() {
    yaCounter50716078.reachGoal('callButton');
  });

  $(".offer-form__btn").on("click", function() {
    yaCounter50716078.reachGoal('callButton');
  });

  $(".contacts-section-block__btn").on("click", function() {
    $("#overlay-form").show();
    yaCounter50716078.reachGoal('callButton');
  });

  $(".popup__close").on("click", function() {
    $(".overlay").hide();
  });


  /* Отправка форм */

  $('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "libs/mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $("#overlay-form").hide();
      $("#overlay-thanks").show();
      $("form").trigger("reset");
      yaCounter50716078.reachGoal('sentForm');
    });
    return false;
  });



  /* Слайдеры */

  $(".production-slider_top").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".production-slider_bottom",
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<div class="slider-arrow slider-arrow_left slider-arrow_left_production"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow_right slider-arrow_right_production"></div>',
      }
    },
  ]
  });

  $('.production-slider_bottom').slick({
    arrows: true,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.production-slider_top',
    prevArrow: '<div class="slider-arrow slider-arrow_left slider-arrow_left_production"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow_right slider-arrow_right_production"></div>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 3,
      }
    },
    ]
  });



  $(".feedback-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slider-arrow slider-arrow_left slider-arrow_left_feedback"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow_right slider-arrow_right_feedback"></div>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<div class="slider-arrow slider-arrow_left slider-arrow_left_production"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow_right slider-arrow_right_production"></div>',
      }
    },
  ]
  });

  jQuery(function($){
   $(".popup-form__input").mask("+7 (999) 999-99-99");
   $(".main-form__input").mask("+7 (999) 999-99-99");
   $(".offer-form__input").mask("+7 (999) 999-99-99");
  });


  // Menu
  var togle_menu = $('.togle-menu');
  var header_black = $('.header_black');
  var link_active = $('.header__menu li a');
  togle_menu.click(function() {
    togle_menu.toggleClass('togle-menu_active');
    header_black.toggleClass('header_black_active');
  });

  //Scrolling
  var HeaderBlack = $('.header_black');
  var HeaderWhite = $('.header_white');


  if (HeaderBlack.css('opacity') == '0') {
    var headerHeight = HeaderWhite.outerHeight();
  }
  else {
    var headerHeight = HeaderBlack.outerHeight();
  }

  link_active.click(function(e) {
    togle_menu.toggleClass('togle-menu_active');
    header_black.toggleClass('header_black_active');

    // Scrolling
    var linkhref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkhref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();

  });


  new WOW().init();

  // Яндекс карты

  ymaps.ready(init);
        
  function init(){ 
    var myMap = new ymaps.Map("map", {
        center: [54.752978, 56.001313],
        zoom: 17
    }); 
    
    var myPlacemark = new ymaps.Placemark([54.752656, 56.002053], {
        hintContent: 'Проспект октября, 46',
        balloonContent: 'Добрый картон',
        
    },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        iconCaption: 'Проспект октября, 46',
        // Своё изображение иконки метки.
        iconImageHref: 'img/contacts/mark.png',
        // Размеры метки.
        iconImageSize: [64, 64],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-32, -64],

    }
    );

    var isMobile = {
        Android: function() {return navigator.userAgent.match(/Android/i);},
        BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable("dblClickZoom");
    myMap.behaviors.disable('rightMouseButtonMagnifier');
    
    if(isMobile.any()){
      myMap.behaviors.disable('drag');
      map.behaviors.disable('multiTouch');
    }
    
  }
  
});


