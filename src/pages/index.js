import "./index.css";
import { Card } from "../scripts/Card.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { initialCards } from "../scripts/initialcards.js";
import { Popup } from "../scripts/Popup.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { Section } from "../scripts/Section.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { PopupWithSubmit } from "../scripts/PopupWithSubmit.js";
import { Api } from "../scripts/Api.js";

import {
  openPopupProf,
  popupInfo,
  nameInput,
  jobInput,
  nameProfile,
  statusProfile,
  openPopupAdd,
  popupAdd,
  popupDelete,
  formElementAdd,
  formElementAlter,
  popupPhoto,
  saveAdd,
  elements,
  popupAvatar,
  validationElement,
  avatar,
  avatarBtn,
} from "../scripts/constents.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-26",
  headers: {
    authorization: "afc7dc1f-babd-4dc3-b15d-b745eab59c3f",
    "Content-Type": "application/json",
  },
});
const changeText = (evt) => {
  evt.textContent = "Сохранение...";
  return;
};

const popupAddCard = new Popup(popupAdd);
const popupWithImage = new PopupWithImage(popupPhoto);

const popupWithAvatar = new PopupWithForm({
  selectorPopup: popupAvatar,
  functionSubmit: (evt) => {
    changeText(popupWithAvatar.buttonSubmit);
    avatar.src = evt.avatar;
    popupWithAvatar.close();
  },
});
const userDate = new UserInfo(nameProfile, statusProfile, avatar);

api.getUserInfo().then((data) => {
  const name = data.name;
  const info = data.about;
  const ava = data.avatar;
  const userId = data._id;
  userDate.setUserInfo({ name, info, ava, userId });
  userDate.setAvatar(ava);
  userDate.setId(userId);
});

let arrayCards = [];
let oneSection = null;
api.getCards().then((array) => {
  arrayCards = Array.from(array);
  oneSection = new Section({
    items: arrayCards,
    renderer: (item) => {
      const id = item._id;
      const name = item.name;
      const link = item.link;
      const owner = item.owner._id;
      const likes = item.likes.length;
      const owntrLikes = item.likes;
      const userId = userDate.id;
      createCardFunction(name, link, id, userId, owner, likes, owntrLikes);
    },
    containerSelector: elements,
  });
  oneSection.allItemsRanderer();
});

const popupWithInfo = new PopupWithForm({
  selectorPopup: popupInfo,
  functionSubmit: (item) => {
    changeText(popupWithInfo.buttonSubmit);
    userDate.setUserInfo({ name: item.name, info: item.info });
    api.changeInfo(item).then((items) => {
      const name = items.name;
      const info = items.about;
      userDate.setUserInfo({ name, info });
    });
    popupWithInfo.close();
  },
});

// отправка карточек на сервер
const popupWithForm = new PopupWithForm({
  selectorPopup: popupAdd,
  functionSubmit: (item) => {
    changeText(popupWithForm.buttonSubmit);
    api.addCardsPost(item).then((item) => {
      const id = item._id;
      const name = item.name;
      const link = item.link;
      const owner = item.owner._id;
      const likes = item.likes.length;
      const owntrLikes = item.likes;
      const userId = userDate.id;
      oneSection.addItem(
        createCardFunction(name, link, id, userId, owner, likes, owntrLikes)
      );
    });
    popupWithImage.close();
    popupWithForm.close();
  },
});

function createCardFunction(name, link, id, userId, owner, likes, owntrLikes) {
  const addCard = new Card({
    name: name,
    link: link,
    id: id,
    userId: userId,
    owner: owner,
    likes: likes,
    owntrLikes: owntrLikes,
    cardSelector: ".cards",
    handleCardClick: () => {
      popupWithImage.open({ name, link });
    },
    showDelete: () => {
      const popupDeleteBusk = new PopupWithSubmit({
        selectorPopup: popupDelete,
        callbackFunction: () => {
          api.deleteCards(id).then(() => {
            addCard.elemDelete();
          });
          popupDeleteBusk.close();
        },
      });
      popupDeleteBusk.open();
      popupDeleteBusk.setEventListeners();
    },
    handleLike: (meaning) => {
      if (meaning === true) {
        api.deleteLike(id).then((res) => {
          return addCard.likeFunction(res.likes);
        });
      } else {
        api.makeLike(id).then((res) => {
          return addCard.likeFunction(res.likes);
        });
      }
    },
  });
  oneSection.addItem(addCard.createNewCard());
}
popupWithForm.setEventListeners();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupWithInfo.setEventListeners();
popupWithAvatar.setEventListeners();

// класс Валидация
const popupOne = new FormValidator(formElementAlter, validationElement);
const popupTwo = new FormValidator(formElementAdd, validationElement);
popupOne.enableValidation();
popupTwo.enableValidation();

//Передача значений в первый попап
function conveyValue() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = statusProfile.textContent;
}

//слушатели
openPopupProf.addEventListener("click", () => {
  popupWithInfo.open();
  conveyValue();
});

openPopupAdd.addEventListener("click", () => {
  popupAddCard.open();
});

avatarBtn.addEventListener("click", () => {
  popupWithAvatar.open();
});
