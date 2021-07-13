// добавляетм новый класс с ошибкой в спан
const showImputError = (showFormElement, showInputElement, errorMassage) =>{
  const errorElement = showFormElement.querySelector(`.${showInputElement.id}-error`);
  showInputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMassage;
  errorElement.classList.add('form__input-error_active'); 
}

// убирает класс с ошибкой 
 const removeImputError = (removeFormElement, removeInputElement)=>{
  const errorElement = removeFormElement.querySelector(`.${removeInputElement.id}-error`);
  removeInputElement.classList.remove('form__input_type_error');
  errorElement.textContent = " ";
  errorElement.classList.remove('form__input-error_active');
 }
 
// проверяем на валидность  
const checkInputValidity = (validityFormElement, validiyImputElement) =>{
if(!validiyImputElement.validity.valid){
  showImputError(validityFormElement, validiyImputElement, validiyImputElement.validationMessage);
}else{
  removeImputError(validityFormElement, validiyImputElement);
}
}

// возвращает true или false на валидацию импутов
const hasInvalidImput = (valideImputList)=>{
  return valideImputList.some((valideImputElement)=>{
    return !valideImputElement.validity.valid;
  })
}


// переключатель активной кнопки
const toggleButtonState = (listImput, buttonElement) =>{
  if(hasInvalidImput(listImput)){
    buttonElement.classList.add('form__btn-save_inactive');
    buttonElement.disabled = true;

  }else{
    buttonElement.classList.remove('form__btn-save_inactive');
     buttonElement.disabled = false;
   
  }
}

// Второй уровень. проход по импутам
const setEventListener = (formElementImput) =>{
  const listImput = Array.from(formElementImput.querySelectorAll('.form__info'));
  const buttonElement = formElementImput.querySelector('.form__btn-save');
  toggleButtonState (listImput, buttonElement);
  listImput.forEach((imputElementImput) => {
    imputElementImput.addEventListener('input', ()=>{
      checkInputValidity(formElementImput, imputElementImput);
      toggleButtonState (listImput, buttonElement);

    })
  }
  )};

//Первый уровень. проход по формам

const enableValidation = () => {
  const listForm = Array.from(document.querySelectorAll('.form'));
listForm.forEach((formElementForm) =>{
  formElementForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();
  })
  setEventListener(formElementForm);
})
}
enableValidation();