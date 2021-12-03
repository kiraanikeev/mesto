import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor({ selectorPopup, functionSubmit }) {
    super(selectorPopup);
    this.buttonSubmit = selectorPopup.querySelector(".form__btn-save");
    this.functionSubmit = functionSubmit;
    this.formElement = selectorPopup.querySelector(".form");
  }

  //собирает данные всех полей формы
  _getInputValues() {
    const inputs = this.formElement.querySelectorAll(".form__info");
    const inputObject = {};
    inputs.forEach((inputElement) => {
      inputObject[inputElement.name] = inputElement.value;
    });
    return inputObject;
  }

  //добавляет обработчик клика иконке закрытия и добавляет обработчик сабмита формы.
  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.functionSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this.formElement.reset();
  }
}
