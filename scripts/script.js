//переменные на первый попап
const openPopup = document.querySelector(".profile__edit-btn");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__btn-close");
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job'); 
let formElement = document.querySelector('.form');
let nameProfile = document.querySelector('.profile__name');
let statusProfile = document.querySelector('.profile__status');

//переменные на второй попап
const openPopupAdd = document.querySelector(".profile__add-btn");
const popupAdd = document.querySelector("#popup__add");
const closePopupAdd = document.querySelector("#popup_btn-close-Add");
let placeInput = document.querySelector('#place');
let linkInput = document.querySelector('#link'); 
let formElementAdd = document.querySelector('.form__add');

//переменные на третий попап
const openPopupPhoto = document.querySelectorAll(".element__img");
const popupPhoto = document.querySelector("#popup__photo");
const closePopupPhoto = document.querySelector("#popup_btn-close-photo");
const popupImg = document.querySelector('.popup__imge')
const popupTitle = document.querySelector('.popup__title')
//Функции для первого попапа

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

//Функции для второго попапа
//открыть второй попап
function openClassAdd (){
    popupAdd.classList.add('popup__opened');
}
//закрыть второй попап
function closeClassAdd(){
    popupAdd.classList.remove('popup__opened');  
}
//закрыть второй попап при нажатии в "воздух"
function closePopupAirAdd (event) {
    if (event.target === event.currentTarget){
        closeClassAdd()
    }
};
//создать и закрыть второй попап
function saveButtonAdd (evt) {
    evt.preventDefault();
        const cardsElement=cardsTemplate.querySelector('.element').cloneNode(true);
    cardsElement.querySelector('.element__img').src=linkInput.value;;   //вставляем ссылку рисунка из массива
    cardsElement.querySelector('.element__img').addEventListener('click', function(){
        popupPhoto.classList.add('popup__opened');
    popupImg.src=this.src;
    popupTitle.textContent = placeInput.value;
console.log("работает2")
    });
    cardsElement.querySelector('.element__name').textContent=placeInput.value; //вставляем имя из массива
    cardsElement.querySelector('.element__delete').onclick = function(evt){
        const eventTarget = evt.target.closest('.element'); 
        eventTarget.remove();
    };// удаляем элемент
    cardsElement.querySelector('.element__like').onclick = function(){
        this.classList.toggle('element_like_aktive');
      };  //добавляем лайк
    cardElement.prepend(cardsElement);
    closeClassAdd();
  }

// //Функции для третьего попапа
//открыть третий попап
// function openClassPhoto2 (){
//     popupPhoto.classList.add('popup__opened');
//     popupImg.src=this.src;
//     popupTitle.textContent = nameProfile.value;
// console.log("работает")
    
// }
//закрыть третий попап
function closeClassPhoto(){
    popupPhoto.classList.remove('popup__opened');  
}
//закрыть третий попап при нажатии в "воздух"
function closePopupAirPhoto (event) {
    if (event.target === event.currentTarget){
        closeClassPhoto()
    }
};

//слушатели на первый попап
openPopup.addEventListener('click', openClass);
closePopup.addEventListener('click', closeClass);
popup.addEventListener('click', closePopupAir);
formElement.addEventListener('submit', saveButton);
//слушатели на второй попап
openPopupAdd.addEventListener('click', openClassAdd);
closePopupAdd.addEventListener('click', closeClassAdd);
popupAdd.addEventListener('click', closePopupAirAdd);
formElementAdd.addEventListener('submit', saveButtonAdd);
//слушатели на третий попап
// openPopupPhoto.addEventListener('click', openClassPhoto);
// openPopupPhoto.forEach(function(elem){
//     elem.addEventListener('click', openClassPhoto);

// }) 

closePopupPhoto.addEventListener('click', closeClassPhoto);
popupPhoto.addEventListener('click', closePopupAirPhoto);





// let thumbnails = document.querySelectorAll(".element__img");

// let popupBackground = document.querySelector(".popup__photo");
// let popupTitle = document.querySelector(".popup-title");
// let popupImage = document.querySelector(".popup-imge");

// thumbnails.forEach(thumbnail => {
//     thumbnail.addEventListener("click", function(){
//         popupBackground.style.display = "block";
//         popupTitle.innerHTML = this.alt;
//         popupImage.src = this.src;
//     })
// });

// popupBackground.addEventListener("click", function(){
//     popupBackground.style.display = "none";
// })