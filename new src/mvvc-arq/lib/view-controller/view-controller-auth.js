import { signUp, logIn } from "../controller/controller-auth.js";

const changeHash = (hash) =>  {
  location.hash = hash;
};

export const signUpOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signUp(email, password)
    .then(() => changeHash('/home'))
    .catch(() => {})
 
};

export const logInOnSubmit = (e) => { 
  e.preventDefault();

};