document.addEventListener('DOMContentLoaded', function(event) {
 const modal = document.querySelector('.modal');
 const modalBtn = document.querySelectorAll('[data-toggle=modal]');
 const closeBtn = document.querySelector('.modal__close');

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

//закрытие по клавише 
document.addEventListener('keypress', function(e) {
  if(e.key == "1"){
   closeModal();
  }
});

/*
document.addEventListener('click', function(event) {
 var m = document.body.getElementsByClassName('modal');
 console.log(m);
 if (!m.is(event.target) && m.has(event.target).length === 0) {
  closeModal();
 };
});

document.addEventListener('click', function(event) {
 var m=document.getElementsByClassName('modal');
 if (!m.matches(event.target)) m.style.display='none';
});*/


modalBtn.forEach(element => {
 element.addEventListener('click', openModal);
});

closeBtn.addEventListener('click', closeModal); //Закрывает модальное окно через кнопку Х в модальном окне
});

/*
 modalBtn.forEach(element => {
  element.addEventListener('click', switchModal);
 });

 closeBtn.addEventListener('click', switchModal); //Закрывает модальное окно через кнопку Х в модальном окне
});

*/