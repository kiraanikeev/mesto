
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 


  const cardsTemplate=document.querySelector('.cards').content; //помечаем Шаблон
  const cardElement=document.querySelector('.elements'); // Куда вставлям

//создаем цикл для вставки из готового массива
  initialCards.forEach(function(elem,index){
    const cardsElement=cardsTemplate.querySelector('.element').cloneNode(true); //копируем
      cardsElement.querySelector('.element__img').src=elem.link;   //вставляем ссылку рисунка из массива
      cardsElement.querySelector('.element__name').textContent=elem.name; //вставляем имя из массива
      cardsElement.querySelector('.element__like');  //добавляем лайк
      cardElement.prepend(cardsElement);   // вставляем как первый элемент 
     
  })
