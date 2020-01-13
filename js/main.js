/* /// Чистый JS ///
document.addEventListener('DOMContentLoaded', function(event) {
 const modal = document.querySelector('.modal'),
       modalBtn = document.querySelectorAll('[data-toggle=modal]'),
       closeBtn = document.querySelector('.modal__close'),
       contactsButton = document.querySelector('.contacts__button');

 let modalSwitchClass = 'modal--visible';


 // Открывает модальное окно
 let openModal = () => {
   modal.classList.add(modalSwitchClass);
 }

 // Закрывает модальное окно
 let closeModal = () => {
  modal.classList.remove(modalSwitchClass);
 }

// Закрытие по произвольной клавише 
document.addEventListener('keypress', function(e) {
  if(e.key == "1"){
   closeModal();
  }
});

// Закрытие по клавише ESC
document.onkeydown = function (evt) {
  if (evt.keyCode == 27) {
    closeModal();
  }
};

// Закрытие по клику мимо модального окна
 modal.addEventListener('click', (event) => {
  let target = event.target; // отслеживаем цель события - клик, записываем его в переменную
  if (target.classList.contains('modal__close')) { // если в переменной присутствует класс
    closeModal();
  } else if (target.classList.contains('modal') && !target.classList.contains('modal__dialog')) { // если же переменная содержит класс modal и не содержит класс модального окна
    closeModal(); }
 });

modalBtn.forEach(element => {
 element.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal); //Закрывает модальное окно через кнопку Х в модальном окне
});

*/


/* Jquery код */
$(document).ready(function () {
  var modal = $('.modal'),
      modalthanks = $('.modalthanks'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close'),
      contactsButton = $('.contacts__button');

   // Открывает модальное окно
  modalBtn.on('click', function () {
    modal.addClass('modal--visible');
    return false;
  });

   // Закрывает модальное окно
  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
    return false;
  });

// Закрытие по клавише ESC
  $(document).keydown(function(evt) {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
      modal.removeClass('modal--visible');
    }
  });

  // Закрытие по клику мимо модального окна
  $('.modal').click(function(e) {
		if ($(e.target).closest('.modal__dialog').length == 0) {
			modal.removeClass('modal--visible');					
		}
  });


     // Закрывает модальное окно благодарностей
     closeBtn.on('click', function () {
      modalthanks.removeClass('modal--visible');
      return false;
    });
  
  // Закрытие по клавише ESC
    $(document).keydown(function(evt) {
      if (evt.keyCode === 27) {
        evt.stopPropagation();
        modalthanks.removeClass('modal--visible');
      }
    });
  
    // Закрытие по клику мимо модального окна
    $('.modalthanks').click(function(e) {
      if ($(e.target).closest('.modal__dialog').length == 0) {
        modalthanks.removeClass('modal--visible');					
      }
    });
  
  // Скролл наверх
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });

    $('.back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
  // Swiper Slider projects
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      //el: this.querySelector('.swiper-pagination'),
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + bullets.width() + 40)
  bullets.css('left', bullets.width() + 10 );


  // Swiper Slider sixsteps
  var notMySwiper = new Swiper ('.swiper-contain', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-paginate',
      //el: this.querySelector('.swiper-pagination'),
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
     
  })

  var next1 = $('.swiper-button-right');
  var prev1 = $('.swiper-button-left');
  var bullets1 = $('.swiper-paginate');

  /*next1.css('left', prev1.width() + bullets1.width())
  bullets1.css('left', bullets1.width() - 1000)*/
  
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       150,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();

  // Валидация формы в модальном окне
  $(".modal__form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userPhone: "Заполните поле",
      userName: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Имя должно быть минимум {0} символа!"),
        maxlength: jQuery.validator.format("Имя должно быть не более {0} символов!")
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный Email в формате name@domain.com"
      }
    },
    submitHandler: function(form) {
      //$(form).ajaxSubmit();
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalthanks.addClass('modal--visible');
        }
      });
    }
  });

  // Валидация для формы в блоке control
  $(".control__form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило, converted to {required:true}
      cUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      cUserPhone: "required",
      // правило-объект (блок)
    },
    messages: {
      cUserPhone: "Заполните поле",
      cUserName: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Имя должно быть минимум {0} символа!"),
        maxlength: jQuery.validator.format("Имя должно быть не более {0} символов!")
      },
    },
    submitHandler: function(form) {
      //$(form).ajaxSubmit();
      $.ajax({
        type: "POST",
        url: "send2.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalthanks.addClass('modal--visible');
        }
      });
    }
  });

  // Валидация для формы в блоке footer
  $(".footer__form").validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило, converted to {required:true}
      fUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      fUserPhone: "required",
      fUserQuestion: "required",
      // правило-объект (блок)
    },
    messages: {
      fUserPhone: "Заполните поле",
      fUserQuestion: "Напишите свой вопрос",
      fUserName: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Имя должно быть минимум {0} символа!"),
        maxlength: jQuery.validator.format("Имя должно быть не более {0} символов!")
      },
    },
    submitHandler: function(form) {
      //$(form).ajaxSubmit();
      $.ajax({
        type: "POST",
        url: "send3.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalthanks.addClass('modal--visible');
        }
      });
    }
  });


  //Маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (000) 000-00-00"});


  // Яндекс Карта
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244734, 39.723227],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),


        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш адрес',
            balloonContent: 'Ростов-на-Дону, торговый Центр Plaza'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
    // отключаем зум по скроллу
    myMap.behaviors.disable('scrollZoom');
});

});