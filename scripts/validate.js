// добавляетм новый класс с ошибкой в спан
const showInputError = (showFormElement, showInputElement, errorMassage) =>{
  const errorElement = showFormElement.querySelector(`.${showInputElement.id}-error`);
  showInputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMassage;
  errorElement.classList.add('form__input-error_active'); 
}

// убирает класс с ошибкой 
 const removeInputError = (removeFormElement, removeInputElement)=>{
  const errorElement = removeFormElement.querySelector(`.${removeInputElement.id}-error`);
  removeInputElement.classList.remove('form__input_type_error');
  errorElement.textContent = " ";
  errorElement.classList.remove('form__input-error_active');
 }
 
// проверяем на валидность  
const checkInputValidity = (validityFormElement, validiyInputElement) =>{
if(!validiyInputElement.validity.valid){
  showInputError(validityFormElement, validiyInputElement, validiyInputElement.validationMessage);
}else{
  removeInputError(validityFormElement, validiyInputElement);
}
}

// возвращает true или false на валидацию импутов
const hasInvalidInput = (valideInputList)=>{
  return valideInputList.some((valideInputElement)=>{
    return !valideInputElement.validity.valid;
  })
}


// переключатель активной кнопки
const toggleButtonState = (listInput, buttonElement) =>{
  if(hasInvalidInput(listInput)){
    buttonElement.classList.add('form__btn-save_inactive');
    // МОЛОДЕЦ ЧТО ИСПОЛЬЗУЕШЬ DISABLED!
    buttonElement.disabled = true;

  }else{
    buttonElement.classList.remove('form__btn-save_inactive');
     buttonElement.disabled = false;
   
  }
}

// Второй уровень. проход по импутам
const setEventListener = (formElementInput) =>{
  const listInput = Array.from(formElementInput.querySelectorAll('.form__info'));
  const buttonElement = formElementInput.querySelector('.form__btn-save');
  toggleButtonState (listInput, buttonElement);
  listInput.forEach((inputElementInput) => {
    inputElementInput.addEventListener('input', ()=>{
      checkInputValidity(formElementInput, inputElementInput);
      toggleButtonState (listInput, buttonElement);

    })
  }
  )};

//Первый уровень. проход по формам

const enableValidation = () => {
  // НУЖНО ОБРАЩАТЬСЯ К КОНКРЕТНОЙ ФОРМЕ А НЕ ИСКАТЬ ЧЕРЕЗ QUERYSELECTORALL
  const listForm = Array.from(document.querySelectorAll('.form'));
listForm.forEach((formElementForm) =>{
  formElementForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();
  })
  setEventListener(formElementForm);
})
}
enableValidation();