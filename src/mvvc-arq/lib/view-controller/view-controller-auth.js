import { signUp, logIn, googleAuth, facebookAuth, logOut } from '../controller/controller-auth.js';
import { validation } from '../controller/validacion.js';

export const changeHash = (hash) => {
  location.hash = hash;
};

export const logInOnSubmit = (event) => {
  event.preventDefault();
  const email = document.querySelector('#email-social-media').value;
  const pass = document.querySelector('#password-social-media').value;
  const errorMessage = document.querySelector('#error-message-login');
  if (validation(pass) === true) {
    logIn(email, pass)
      .then(result => {  
        console.log('estas logueado');
      }).catch(error => {
        console.log(error.code);
        if (error.code === 'auth/wrong-password') {
          errorMessage.innerHTML = 'La contraseña no es correcta. Vuelve a intentarlo';
        } else if (error.code === 'auth/user-not-found') {
          errorMessage.innerHTML = 'correo inválido.';
        }
      });
  } else {
    errorMessage.innerHTML = 'datos incorrectos';
  }
};

export const signUpOnSubmit = (event) => {
  event.preventDefault();
  const email = document.querySelector('#create-email').value;
  const password = document.querySelector('#create-password').value;
  const name = document.querySelector('#name-social-media').value;
  const lastName = document.querySelector('#lastname-social-media').value;

  const errorMessage = document.querySelector('#error-message-signup');
  if (validation(email) === true && validation(password) === true && validation(name) === true && validation(lastName) === true) {
    signUp(email, password)
      .then(result => {
        const configuration = {
          url: 'http://localhost:5000/'
        };
        result.user.sendEmailVerification(configuration).catch(error => {
          console.log(error.code);
          console.log('No se pudo enviar email');
        });
        firebase.auth().signOut();
      }).catch(error => {
        console.log(error.code);
        if (error.code === 'auth/email-already-in-use') {
          errorMessage.innerHTML = `Otra cuenta usa ${email}.`;
        }
      });
  } else {
    errorMessage.innerHTML = 'complete sus datos';
  }
};
export const googleOnSubmit = () => {
  googleAuth()
    .then(result => {
      // const user = result.user;
      console.log('google logueado');
      // changeHash('/home'); 
      // que queremos hacer cuando se inicie sesion con google
    }).catch(error => {
      console.log(error.code);
    });
};
export const facebookOnSubmit = () => {
  facebookAuth()
    .then(result => {
      window.location.hash = '';
      
      changeHash('/home'); 
      // const user = result.user;
      console.log('facebook logueado');
    // que queremos hacer cuando se inicie sesion con google
    }).catch(error => {
      console.log(error.code);
    });
};
export const logOutOnSubmit = () => {
  logOut()
    .then(() => {
      changeHash('/signin'); 
    // que quiero que ocurra cuando el usuario ya no este logueado
    }).catch(error => console.log(error.code));
};

// Returns the signed-in user's profile Pic URL.
export const getProfilePicUrl = () => 
  firebase.auth().currentUser.photoURL;

export const getUserName = () => 
  firebase
    .auth()
    .currentUser
    .displayName;

// Returns the uid  of the current user.
export const isUserSignedIn = () => 
  firebase.auth().currentUser.uid;

export const authStateObserver = (user) => {
  if (user && user.emailVerified) { 
    const profilePicUrl = getProfilePicUrl();
    const userName = getUserName();
    
    changeHash('/home');
  } else {
    // alert('Verifica tu correo electronico para continuar');
    changeHash('/signin');
  }
};

export const initFirebaseAuth = () => {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
};
