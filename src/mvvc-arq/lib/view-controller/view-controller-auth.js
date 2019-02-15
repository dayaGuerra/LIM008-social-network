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
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name + ' ' + lastName,
        }).then(() => {
        }).catch((error) => {
          console.log(error);
        });
        const configuration = {
          url: 'https://dayaguerra.github.io/LIM008-social-network/src/#/home'
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
      console.log('google logueado');
    }).catch(error => {
      console.log(error.code);
    });
};

export const facebookOnSubmit = () => {
  facebookAuth()
    .then(() => {
      window.location.hash = '';
      changeHash('/home'); 
      console.log('facebook logueado');
    }).catch(error => {
      console.log(error.code);
    });
};

export const logOutOnSubmit = () => {
  logOut()
    .then(() => {
      changeHash('/signin'); 
    }).catch(error => console.log(error.code));
};

export const getProfilePicUrl = () => {
  return firebase.auth().currentUser.photoURL || 'img/users.png';
};

export const getUserName = () => {
  return firebase.auth().currentUser.displayName;
};

export const isUserSignedIn = () => 
  userState() && firebase.auth().currentUser.uid;

export const userState = () => 
  firebase.auth().currentUser;

export const authStateObserver = (user) => {
  if (user && user.emailVerified) { 
    changeHash('/home');
  } else {
    logOut();
    changeHash('#/signin');
  }
};

export const initFirebaseAuth = () => {
  firebase.auth().onAuthStateChanged(authStateObserver);
};
