import {signInForm} from '../../ui/logincreate.js'; 

export const crearFormularioLogin = () => {
  // Primero creas el elemento
  const root = document.getElementById('root');
  root.innerHTML = '';
  const form = signInForm();
  root.appendChild(form);
};
