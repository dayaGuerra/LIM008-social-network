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
      changeHash('/home');  
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
      const configuracion = {
        url: 'http://localhost:5000/' // gh-pages link
      };
      result.user.sendEmailVerification(configuracion).catch(error => {
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
      console.log('google logueado')
      // que queremos hacer cuando se inicie sesion con google
    }).catch(error => {
      console.log(error.code);
    });
};
export const facebookOnSubmit = () => {
  facebookAuth()
    .then(result => {
    // const user = result.user;
      console.log('facebook logueado')
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