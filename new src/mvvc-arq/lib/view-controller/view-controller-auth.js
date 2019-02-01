import { signUp, logIn } from "../controller/controller-auth.js";

const changeHash = (hash) =>  {
  location.hash = hash;
};

export const signUpOnSubmit = () => {
  // const email = document.querySelector('#email').value;
  // const password = document.querySelector('#password').value;
  // signUp(email, password)
  //   .then(() => changeHash('/home'))
  //   .catch(() => {})
 
};

export const logInOnSubmit = (event) => { 
  event.preventDefault();
  const email = document.querySelector('#email-social-media').value;
  const pass = document.querySelector('#password-social-media').value;
  logIn(email, pass)
    .then(() => {
      changeHash('/home')
      console.log('logueado')
    }).catch((error) => console.log(error.code));
};