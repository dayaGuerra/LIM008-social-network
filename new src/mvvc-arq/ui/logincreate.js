// Importas el archivo que contiene el elemento padre
// import {crearFormularioLogin} from '../lib/view-controller/logincreate-controller.js';
export const signInForm = () => {
  const tempformLogin = 
  // Segundo, creas el nodo hijo o template que va a ir en ese elemento
  `
    <p> hola munddsdsdsssssssssssssssssssssssssso!!! <p>
      `; 
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'form-login');
  formElem.innerHTML = tempformLogin;
  return formElem;
};


