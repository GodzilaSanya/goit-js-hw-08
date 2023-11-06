import { debounce, throttle } from 'lodash';
import { saveStorage, loadStorage } from './helpers/storage.js';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('.feedback-form input'),
  inputMessage: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(handlerInput, 500));
refs.form.addEventListener('submit', handlerSubmit);

//заповенення форми при завантаженні вікна
window.addEventListener('load', function () {
  if (!loadStorage('feedback-form-state')) {
    console.log('need create localStor');
    saveStorage('feedback-form-state', { email: '', message: '' });
  } else if (loadStorage('feedback-form-state')) {
    const { email, message } = loadStorage('feedback-form-state');
    refs.inputEmail.value = email;
    refs.inputMessage.value = message;
  }
});

//збереження даних з localeStorage в зміну
const userData = loadStorage('feedback-form-state');

// збереження даних з форми в сховище
function handlerInput(event) {
  if (event.target.name === 'email') {
    userData.email = event.target.value;
  }
  if (event.target.name === 'message') {
    userData.message = event.target.value;
  }
  saveStorage('feedback-form-state', userData);
}

// виведення даних з форми в консоль, очистка сховища та форми
function handlerSubmit(event) {
  const email = refs.inputEmail.value;
  const message = refs.inputMessage.value;
  event.preventDefault();
  if (email === '' || message === '') {
    alert("Відсутні обов'язкові поля");
  } else {
    console.log({ email, message });
    refs.form.reset();
    localStorage.removeItem('feedback-form-state');
  }
}
