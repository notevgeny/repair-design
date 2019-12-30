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
  
  // Скролл наверх
  $(function () {
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
});

});