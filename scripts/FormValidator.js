export class FormValidator {
constructor(formElement, validationElement){
    this.formElement=formElement;
    this.formSelector=validationElement.formSelector;
    this.inputSelector=validationElement.inputSelector;
    this.buttonSelector=validationElement.buttonSelector;
    this.inactiveButtonClass=validationElement.inactiveButtonClass;
    this.inputErrorClass=validationElement.inputErrorClass;
    this.errorClass=validationElement.errorClass;


}

// добавляетм новый класс с ошибкой в спан
showInputError(showInputElement, errorMassage){
    const errorElement = this.formElement.querySelector(`.${showInputElement.id}-error`);
    showInputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMassage;
    errorElement.classList.add(this.errorClass); 
    console.log(this.errorClass)
    console.log(this.inputErrorClass)

}

// убирает класс с ошибкой 
  removeInputError(removeInputElement){
    const errorElement =this.formElement.querySelector(`.${removeInputElement.id}-error`);
    removeInputElement.classList.remove(this.inputErrorClass);
    errorElement.textContent = " ";
    errorElement.classList.remove(this.errorClass); 


}

// проверяем на валидность  
checkInputValidity(validiyInputElement){
  
    if(!validiyInputElement.validity.valid){
      
        this.showInputError( validiyInputElement, validiyInputElement.validationMessage);
      }else{
        this.removeInputError(validiyInputElement);
      }
}

// возвращает true или false на валидацию импутов
hasInvalidInput(valideInputList){
    return valideInputList.some((valideInputElement)=>{
        return !valideInputElement.validity.valid;
      })
}

// переключатель активной кнопки
toggleButtonState(listInput, buttonElement){
    if(this.hasInvalidInput(listInput)){
        buttonElement.classList.add(this.inactiveButtonClass);
        buttonElement.disabled=true;
    }else{
        buttonElement.classList.remove(this.inactiveButtonClass);
        buttonElement.disabled=false;
    }

}


inactiveButton(buttonElement){
    buttonElement.classList.add(this.inactiveButtonClass);
    buttonElement.disabled=true;
    console.log('work')
}

// Второй уровень. проход по импутам
setEventListener(){      
    const listInput = Array.from(this.formElement.querySelectorAll(this.inputSelector));
    const buttonElement = this.formElement.querySelector(this.buttonSelector);
    this.toggleButtonState (listInput, buttonElement);
    listInput.forEach((inputElementInput) => {
    
        inputElementInput.addEventListener('input', ()=>{
          this.checkInputValidity(inputElementInput);
         this.toggleButtonState (listInput, buttonElement);
        })
    }
    )}
// //Первый уровень. проход по формам
enableValidation(){
this.formElement.addEventListener('submit', (evt) =>{
    evt.preventDefault();
  })
  this.setEventListener();
}
}