//переменные на первый попап
export const openPopupProf = document.querySelector(".profile__edit-btn");
// const popup = document.querySelector(".popup");
export const popupInfo = document.querySelector("#popup__info");
// const closePopupProf = document.querySelector(".popup__btn-close");
export const nameInput = document.querySelector('#name-input');
export const jobInput = document.querySelector('#job-input'); 
// const formElement = document.querySelector('.form');/////////////////////////
export const nameProfile = document.querySelector('.profile__name');
export const statusProfile = document.querySelector('.profile__status');
//переменные на второй попап
export const openPopupAdd = document.querySelector(".profile__add-btn");
export const popupAdd = document.querySelector("#popup__add");
// const closePopupAdd = document.querySelector("#popup_btn-close-Add");
// const placeInput = document.querySelector('#place-input');
// const linkInput = document.querySelector('#link-input'); 
export const formElementAdd = document.querySelector('.form__add');/////////
export const formElementAlter = document.querySelector('.form__alter')
//переменные на третий попап
// const openPopupPhoto = document.querySelectorAll(".element__img");
export const popupPhoto = document.querySelector("#popup__photo");
// const closePopupPhoto = document.querySelector("#popup_btn-close-photo");

// const cardsTemplate=document.querySelector('.cards').content; //помечаем Шаблон
export const saveAdd = document.querySelector('#save__add');
export const elements=document.querySelector('.elements'); // Куда вставлям

export const validationElement = { 
    formSelector: '.form', 
    inputSelector: '.form__info', 
    buttonSelector: '.form__btn-save', 
    inactiveButtonClass: 'form__btn-save_inactive', 
    inputErrorClass: 'form__input_type_error', 
    errorClass: 'form__input-error_active' 
} 