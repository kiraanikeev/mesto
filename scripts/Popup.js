export class Popup{
    constructor(selectorPopup){
        this.selectorPopup=selectorPopup;
       this._handleEscClose=this._handleEscClose.bind(this);
    }
    

//открытие попапа
open(){
this.selectorPopup.classList.add("popup__opened");
document.addEventListener('keydown', this._handleEscClose);  

}
//закрытие попапа
close(){
this.selectorPopup.classList.remove("popup__opened")
document.removeEventListener('keydown', this._handleEscClose);  

}

//закрытия попапа клавишей Esc
_handleEscClose(event) {  
    if (event.key === "Escape"){
        this.close();
        console.log('work');
        } 
    }


//добавляет слушатель клика иконке закрытия попапа и закрытие на "воздухе"
setEventListeners(){
    this.selectorPopup.addEventListener('click', (event)=>{
        if (event.target === event.currentTarget || event.target.classList.contains('popup__btn-close')){
            this.close();
        }})

}
}