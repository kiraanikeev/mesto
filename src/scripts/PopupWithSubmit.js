import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor({ selectorPopup, callbackFunction }) {
    super(selectorPopup);
    this.formElement = selectorPopup.querySelector(".form");
    this.callbackFunction = callbackFunction;
  }

  setEventListeners(userId) {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.callbackFunction(userId);
    });
  }
}
