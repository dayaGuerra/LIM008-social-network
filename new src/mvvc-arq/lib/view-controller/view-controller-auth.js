import { signUp, logIn, googleAuth, facebookAuth, logOut } from '../controller/controller-auth.js';


const changeHash = (hash) => {
  location.hash = hash;
};

export const logInOnSubmit = (event) => {
  event.preventDefault();
  const email = document.querySelector('#email-social-media').value;
  const pass = document.querySelector('#password-social-media').value;
  const errorMessage = document.querySelector('#error-message-login');
  logIn(email, pass)
    .then(result => {  
      // if (result.user.sendEmailVerified) {
      // agregar lo que se debe mostrar
      console.log('estas logueado');
      // changeHash('/home');  
      // } 
      // else {
      //   firebase.auth().signOut();  
      // }
    }).catch(error => {
      console.log(error.code);
      if (error.code === 'auth/wrong-password') {
        errorMessage.innerHTML = 'La contraseña no es correcta. Vuelve a intentarlo';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage.innerHTML = 'El correo electronico que ingresaste no pertenece a ninguna cuenta.';
      }
    });
};

export const signUpOnSubmit = (event) => {
  event.preventDefault();
  const email = document.querySelector('#create-email').value;
  const password = document.querySelector('#create-password').value;
  const errorMessage = document.querySelector('#error-message-signup');
  signUp(email, password)
    .then(result => {
      // changeHash('/home')  
      const configuration = {
        url: 'http://localhost:5000/' // gh-pages link
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
      // changeHash('/home'); 
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

export function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}
// Returns the signed-in user's profile Pic URL.
export function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL;
}
// Returns the signed-in user's display name.
export function getUserName() {
  return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}

export function authStateObserver(user) {
  if (user) { // User is signed in!
    // Get the signed-in user's profile pic and name.
    const profilePicUrl = getProfilePicUrl();
    const userName = getUserName();
    changeHash('/home');
    // const signoutBtn = document.querySelector('#sign-out-btn');
    // signoutBtn.removeAttribute('hidden');
    console.log(user)
  }
}


/* export const getProfilePicUrl = () => {
  return firebase.auth().currentUser.photoURL;
  // || '/images/profile_placeholder.png';
}
// Returns the signed-in user's display name.
export const getUserName = () => {
  return firebase.auth().currentUser.displayName;
}
const isUserSignedIn = () => {
  return !!firebase.auth().currentUser;
}


export const authStateObserver = (user) => {
  if (user) {
    console.log(user)
      // const profilePicUrl = getProfilePicUrl();
      // const userName = getUserName();
      // changeHash('/home');
      // console.log(userName);
      // const divElement = document.createElement('div');
      // divElement.innerHTML = `
      //   <p></p>
      // `
    }
    return user;
  };
  // authStateObserver();


  export const authState = () => 
  firebase.auth().onAuthStateChanged(authStateObserver);
  // console.log(authStateObserver) */