import { objTempLogin } from '../view/login.js'
import { objTempProfile } from '../view/profile.js'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCFIc9_Vwpj7_oVkfwCJ0jRww_66azD1hE",
    authDomain: "red-social-emprendimiento.firebaseapp.com",
    databaseURL: "https://red-social-emprendimiento.firebaseio.com",
    projectId: "red-social-emprendimiento",
    storageBucket: "red-social-emprendimiento.appspot.com",
    messagingSenderId: "110917534293"
  };
  firebase.initializeApp(config);
// obtener elementos
  const fbBtn = document.getElementsByClassName('fb btn-social-media');
  const googleBtn = document.getElementsByClassName('google btn-social-media');
  const loginBtn = document.getElementById('btn-login');
  const emailLoginInput = document.getElementById('email-social-media');
  const passwordLoginInput = document.getElementById('password-social-media');
  const userName = document.getElementById('name-social-media');
  const userLastname = document.getElementById('lastname-social-media');
  const emailSignupInput = document.getElementById('create-email');
  const passwordSignupInput = document.getElementById('create-password');
  const signupBtn = document.getElementById('btn-registrer');

// creacion de cuenta
const createAccount = () => {
  const name = userName.value;
  const lastname = userLastName.value;
  const email = emailSignupInput.value;
  const pass = passwordSignupInput.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(error => {
    console.log(error.code)
    if(error.code === 'auth/email-already-in-use')
    paragraph.innerHTML = `Otra cuenta usa ${email}.`
  });
};
signupBtn.addEventListener('click', createAccount);

// inicio de sesion 		
const logInUser = () => {
  const email = emailLoginInput.value;
  const pass = passowrdLoginInput.value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(error => {
    const errorCode = error.code;
    console.log(errorCode)
    if (errorCode === 'auth/wrong-password') {
      paragraph.innerHTML = 'La contraseña no es correcta. Vuelve a intentarlo'
    } else if (errorCode === 'auth/user-not-found') {
      paragraph.innerHTML = 'El correo electronico que ingresaste no pertenece a ninguna cuenta.'
    }
  });
};
loginBtn.addEventListener('click', logInUser);

