//переменные
const openPopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job'); 
let formElement = document.querySelector('.popup__form');
let nameProfile = document.querySelector('.profile__name')
let statusProfile = document.querySelector('.profile__status')



//открыть попап и перенести записи в попап
function openClass(){
    popup.classList.add('popup__opened'); 
    nameInput.value = nameProfile.textContent
    jobInput.value = statusProfile.textContent
}
//закрыть попап
function closeClass(){
    popup.classList.remove('popup__opened');  
}
//закрыть попап при нажатии в "воздух"
function closePopupAir (event) {
    if (event.target === event.currentTarget){
        closeClass()
    }
};

//сохранить изменения в импут и закрыть попап
  function saveButton (evt) {
    evt.preventDefault()
    nameProfile.textContent=nameInput.value
    statusProfile.textContent=jobInput.value
      closeClass()
  }

//слушатели 
openPopup.addEventListener('click', openClass);
closePopup.addEventListener('click', closeClass);
popup.addEventListener('click', closePopupAir);
formElement.addEventListener('submit', saveButton);


