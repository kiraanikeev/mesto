class FormValidator {
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
showImputError(showInputElement, errorMassage){
    const errorElement = this.formElement.querySelector(`.${showInputElement.id}-error`);
    showInputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMassage;
    errorElement.classList.add(this.errorClass); 
}

// убирает класс с ошибкой 
  removeImputError(removeInputElement){
    const errorElement =this.formElement.querySelector(`.${removeInputElement.id}-error`);
    removeInputElement.classList.remove(this.inputErrorClass);
    errorElement.textContent = " ";
    errorElement.classList.remove(this.errorClass); 


}

// проверяем на валидность  
checkInputValidity(validiyImputElement){
    console.log(validiyImputElement);
    if(!validiyImputElement.validity.valid){
        this.showImputError( validiyImputElement, validiyImputElement.validationMessage);
      }else{
        this.removeImputError(validiyImputElement);
      }
}

// возвращает true или false на валидацию импутов
hasInvalidImput(valideImputList){
    return valideImputList.some((valideImputElement)=>{
        return !valideImputElement.validity.valid;
      })
}

// переключатель активной кнопки
toggleButtonState(listImput, buttonElement){
    if(this.hasInvalidImput(listImput)){
        buttonElement.classList.add(this.inactiveButtonClass);
        buttonElement.disabled=true;
    }else{
        buttonElement.classList.remove(this.inactiveButtonClass);
        buttonElement.disabled=false;
    }

}

// Второй уровень. проход по импутам
setEventListener(){      
    const listImput = Array.from(this.formElement.querySelectorAll(this.inputSelector));
    const buttonElement = this.formElement.querySelector(this.buttonSelector);
    this.toggleButtonState (listImput, buttonElement);
    listImput.forEach((imputElementImput) => {
    
        imputElementImput.addEventListener('input', ()=>{
          this.checkInputValidity(imputElementImput);
         this.toggleButtonState (listImput, buttonElement);
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