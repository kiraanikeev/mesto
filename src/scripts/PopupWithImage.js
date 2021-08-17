import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    open({name, link}){
    super.open();

    const popupImg = document.querySelector('.popup__imge')
    const popupTitle = document.querySelector('.popup__title')
    popupTitle.textContent = name;
    popupImg.src = link; 



}
}
