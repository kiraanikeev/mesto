//переменные на первый попап
const openPopupProf = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const closePopupProf = document.querySelector(".popup__btn-close");
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#job-input'); 
const formElement = document.querySelector('.form');/////////////////////////
const nameProfile = document.querySelector('.profile__name');
const statusProfile = document.querySelector('.profile__status');
//переменные на второй попап
const openPopupAdd = document.querySelector(".profile__add-btn");
const popupAdd = document.querySelector("#popup__add");
const closePopupAdd = document.querySelector("#popup_btn-close-Add");
const placeInput = document.querySelector('#place-input');
const linkInput = document.querySelector('#link-input'); 
const formElementAdd = document.querySelector('.form__add');/////////
const formElementAlter = document.querySelector('.form__alter')
//переменные на третий попап
const openPopupPhoto = document.querySelectorAll(".element__img");
const popupPhoto = document.querySelector("#popup__photo");
const closePopupPhoto = document.querySelector("#popup_btn-close-photo");
const popupImg = document.querySelector('.popup__imge')
const popupTitle = document.querySelector('.popup__title')
const cardsTemplate=document.querySelector('.cards').content; //помечаем Шаблон
// const elements=document.querySelector('.elements'); // Куда вставлям
const saveAdd = document.querySelector('#save__add');

const validationElement = { 
    formSelector: '.form', 
    inputSelector: '.form__info', 
    buttonSelector: '.form__btn-save', 
    inactiveButtonClass: 'form__btn-save_inactive', 
    inputErrorClass: 'form__input_type_error', 
    errorClass: '.form__input-error_active' 
} 


// класс Валидация
const popupOne = new FormValidator(formElementAlter, validationElement);
const popupTwo = new FormValidator(formElementAdd, validationElement);
popupOne.enableValidation();
popupTwo.enableValidation();


//открыть попап
function openPopup(popup){
    popup.classList.add("popup__opened");
    saveAdd.classList.add('form__btn-save_inactive');
    saveAdd.disabled = true;
 
}

//закрыть попап
function closePopup(popup){
    popup.classList.remove('popup__opened'); 

}
//закрыть попап при нажатии в "воздух"
function closePopupAir (event) {
    if (event.target === event.currentTarget){
        closePopup(this);
    }
};
// // закрытие попапа при нажатии Esc 
// function closePopupEsc (evt) { 
//     if (evt.key === "Escape") { 
     
//         closePopup(this) 
//     } 
// } 

//Передача значений в первый попап
function conveyValue(){
    nameInput.value = nameProfile.textContent
    jobInput.value = statusProfile.textContent
}
//сохранить изменения в импут и закрыть первый попап
  function saveButton (evt) {
    evt.preventDefault()
    nameProfile.textContent=nameInput.value
    statusProfile.textContent=jobInput.value
    closePopup(popup);
  }


function saveButtonAdd (evt) {

    evt.preventDefault();
    const cardAdd = new Card (placeInput.value, linkInput.value, '.cards');
    const photo = cardAdd.createNewCard()
    elements.prepend(photo);


    placeInput.value = ""; 
    linkInput.value = ""; 


    closePopup(popupAdd);
}

const elements=document.querySelector('.elements'); // Куда вставлям
     
      initialCards.forEach((item) => {
        const card = new Card(item.name, item.link, '.cards');
        const cardElement = card.createNewCard();
      
        // Добавляем в DOM
        document.querySelector('.elemen').append(cardElement);
      });
      

//слушатели 
openPopupProf.addEventListener('click', () =>{
    openPopup(popup);
    conveyValue();
});
closePopupProf.addEventListener('click', () => {
    closePopup(popup);
});
popup.addEventListener('click', closePopupAir);
formElementAlter.addEventListener('submit', saveButton);
openPopupAdd.addEventListener('click', () => {
    openPopup(popupAdd);
});
closePopupAdd.addEventListener('click', () => {
    closePopup(popupAdd);
});
popupAdd.addEventListener('click', closePopupAir);
formElementAdd.addEventListener('submit', saveButtonAdd);
closePopupPhoto.addEventListener('click', () => {
    closePopup(popupPhoto);
});
popupPhoto.addEventListener('click', closePopupAir);














