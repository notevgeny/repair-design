document.addEventListener('DOMContentLoaded', function(event) {
 const modal = document.querySelector('.modal'),
       modalBtn = document.querySelectorAll('[data-toggle=modal]'),
       closeBtn = document.querySelector('.modal__close'),
       contactsButton = document.querySelector('.contacts__button');

/* const switchModal = () => {
  modal.classList.toggle('modal--visible');
 }
*/
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
  let target = event.target;
  if (target.classList.contains('modal__close')) {
    closeModal();
  } else if (target.classList.contains('modal') && !target.classList.contains('modal__dialog')) {
    closeModal(); }
 });

modalBtn.forEach(element => {
 element.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal); //Закрывает модальное окно через кнопку Х в модальном окне
});
