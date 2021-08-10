
export class Card {
constructor({name, link, cardSelector, handleCardClick}){
   this.name=name
   this.link=link
   this.cardSelector=cardSelector
   this.handleCardClick = handleCardClick
}
_getTemplate() {
   const cardsTemplate = document.querySelector(this.cardSelector).content.querySelector('.element').cloneNode(true);

   return cardsTemplate;
}

_setEventListeners(){
   this._element.querySelector('.element__like').addEventListener('click',()=>{
      this.activeLike()  
   });
   this._element.querySelector('.element__delete').addEventListener('click', ()=>{
      this.showDelete()
   });
   this._element.querySelector('.element__img').addEventListener('click', ()=>{
      this.handleCardClick()
   });

   }
activeLike(){
   this._element.querySelector('.element__like').classList.toggle('element_like_aktive');
   }

   showDelete(){
   this._element.remove();
   }

createNewCard() {
   this._element = this._getTemplate();
   this._setEventListeners()
   const ElemName = this._element.querySelector('.element__name');
   const Elemlink = this._element.querySelector('.element__img');

   ElemName.textContent=this.name;
   Elemlink.src=this.link;

   return this._element;
   }}



