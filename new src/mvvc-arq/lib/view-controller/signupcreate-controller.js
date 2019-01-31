import {signUpForm} from '../../ui/signupcreate.js'; 

export const crearFormularioSignUp = () => {
  // Primero creas el elemento
  const registration = document.getElementById('registration');
  registration.innerHTML = '';
  const formRegistration = signUpForm();
  registration.appendChild(formRegistration);
};
