//переменные на первый попап
const openPopupProf = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const closePopupProf = document.querySelector(".popup__btn-close");
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job'); 
const formElement = document.querySelector('.form');
const nameProfile = document.querySelector('.profile__name');
const statusProfile = document.querySelector('.profile__status');
//переменные на второй попап
const openPopupAdd = document.querySelector(".profile__add-btn");
const popupAdd = document.querySelector("#popup__add");
const closePopupAdd = document.querySelector("#popup_btn-close-Add");
const placeInput = document.querySelector('#place');
const linkInput = document.querySelector('#link'); 
const formElementAdd = document.querySelector('.form__add');
//переменные на третий попап
const openPopupPhoto = document.querySelectorAll(".element__img");
const popupPhoto = document.querySelector("#popup__photo");
const closePopupPhoto = document.querySelector("#popup_btn-close-photo");
const popupImg = document.querySelector('.popup__imge')
const popupTitle = document.querySelector('.popup__title')
const cardsTemplate=document.querySelector('.cards').content; //помечаем Шаблон
const elements=document.querySelector('.elements'); // Куда вставлям

//открыть попап
function openPopup(popup){
    popup.classList.add("popup__opened");
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

//добавление карточек из массива
function addCardsElement (){
    initialCards.forEach(function(elem){
        const forCards = createNewCard(elem);
        elements.prepend(forCards);
})};
addCardsElement();

//кнопка сохранить изменения и закрыть второй попап
function saveButtonAdd (evt) {
        evt.preventDefault();
        alterBut();
        closePopup(popupAdd);
    }

//функция создания одной карточки 
function createNewCard (item) {
    const cardsElement=cardsTemplate.querySelector('.element').cloneNode(true);
    cardsElement.querySelector('.element__img').addEventListener('click', openImg);
    cardsElement.querySelector('.element__img').src=item.link;
    cardsElement.querySelector('.element__name').textContent=item.name;
    cardsElement.querySelector('.element__like').addEventListener('click', activeLike)
    cardsElement.querySelector('.element__delete').addEventListener('click', activeDelete)
    return cardsElement; 
    };

//ЛАйк
function activeLike(){
    this.classList.toggle('element_like_aktive');
}
//Удаление 
function activeDelete(evt){
    const eventTarget = evt.target.closest('.element'); 
 eventTarget.remove();
}

//открытие и отображение картинок
function openImg(element){
        openPopup(popupPhoto);
        const particularElem = element.target.closest('.element'); 
        const img = particularElem.querySelector('.element__img') 
        const name = particularElem.querySelector('.element__name') 
        popupImg.src = img.src; 
        popupTitle.textContent = name.textContent; 
    }

//изменение функции
function alterBut(){
    elements.prepend(
        createNewCard({name:placeInput.value, link:linkInput.value}));
    placeInput.value = ""; 
    linkInput.value = ""; 
    }

//слушатели 
openPopupProf.addEventListener('click', () =>{
    openPopup(popup);
    conveyValue();
});
closePopupProf.addEventListener('click', () => {
    closePopup(popup);
});
popup.addEventListener('click', closePopupAir);
formElement.addEventListener('submit', saveButton);
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

