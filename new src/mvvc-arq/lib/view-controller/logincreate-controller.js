import {signInForm, signUpForm} from '../../ui/logincreate.js'; 

export const crearFormularioLogin = () => {
  // Primero creas el elemento
  const root = document.getElementById('root');
  root.innerHTML = '';
  const form = signInForm();
  root.appendChild(form);
};
export const crearFormularioSignUp = () => {
  // Primero creas el elemento
  const root = document.getElementById('root');
  root.innerHTML = '';
  const form = signUpForm();
  root.appendChild(form);
};