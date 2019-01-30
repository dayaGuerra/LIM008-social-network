import {signInForm} from './signInForms.js';
export const createButton = () => {
  const textArea = document.getElementById('text-area');
  textArea.innerHTML = '';
  const createElementSign = signInForm();
  textArea.appendChild(createElementSign);
}