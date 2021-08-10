import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./initialcards.js";
import { Popup } from "./Popup.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { Section } from "./Section.js";
import { UserInfo } from "./UserInfo.js";
import {
    openPopupProf,
    popupInfo,
    nameInput,
    jobInput,
    nameProfile,
    statusProfile,
    openPopupAdd,
    popupAdd,
    formElementAdd,
    formElementAlter,
    popupPhoto,
    saveAdd,
    elements,
    validationElement
} from "./constents.js"


const popupAddCard = new Popup(popupAdd);
const userDate = new UserInfo(nameProfile, statusProfile)
const popupWithImage = new PopupWithImage (popupPhoto);

const popupWithInfo = new PopupWithForm({
    selectorPopup: popupInfo,
    functionSubmit: (item)=>{
    
        userDate.setUserInfo({name:item.name, info:item.info})
        popupWithInfo.close()
    }
})

const popupWithForm = new PopupWithForm({
    selectorPopup: popupAdd,
    functionSubmit: (item)=>{
    
        // const addCard = new Card({name:item.title, link:item.link, cardSelector:'.cards', handleCardClick: ()=>{
        //     popupWithImage.open({name: item.title, link: item.link})
        // }});
        const title = item.title;
        const link = item.link;
        createCardFunction (title, link);
        popupWithImage.close();
        popupWithForm.close();
        // oneSection.addItem(addCard.createNewCard())
        popupTwo.inactiveButton(saveAdd);
    }
    
})
 function createCardFunction (name, link) {
    const addCard = new Card({name:name, link:link, cardSelector:'.cards', handleCardClick: ()=>{
        popupWithImage.open({name: item.name, link: item.link})
    }});
    oneSection.addItem(addCard.createNewCard())
}


const oneSection = new Section({
    items : initialCards,
    renderer: (item)=>{
        // СМОТРИ СТРОЧКУ 58 
    //     const oneCard =new Card ({name:item.name, link:item.link, cardSelector:'.cards', handleCardClick: ()=>{
    // popupWithImage.open({name: item.name, link: item.link})
    //     }})
    // oneSection.addItem(oneCard.createNewCard());
    const name = item.name;
    const link = item.link;
    createCardFunction (name, link);
    }, containerSelector:elements
    })
    oneSection.allItemsRanderer();


popupWithForm.setEventListeners();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupWithInfo.setEventListeners();


// класс Валидация
const popupOne = new FormValidator(formElementAlter, validationElement);
const popupTwo = new FormValidator(formElementAdd, validationElement);
popupOne.enableValidation();
popupTwo.enableValidation();


//Передача значений в первый попап
function conveyValue(){
    nameInput.value = nameProfile.textContent
    jobInput.value = statusProfile.textContent
}

//слушатели 
openPopupProf.addEventListener('click', () =>{
    popupWithInfo.open();
    conveyValue();
});

openPopupAdd.addEventListener('click', () => {
    popupAddCard.open();
});














