// import { objTempLogin } from '../ui/login.js'
// import { objTempProfile } from '../ui/profile.js'



  firebase.initializeApp(config);

// obtener elementos
const fbBtn = document.getElementsByClassName('fb btn-social-media');
const googleBtn = document.getElementsByClassName('google btn-social-media');
// const objTemplate = objTempLogin;
const logInBtn = document.getElementById('btn-login');
const emailLoginInput = document.getElementById('email-social-media');
const passwordLoginInput = document.getElementById('password-social-media');
const userName = document.getElementById('name-social-media');
const userLastname = document.getElementById('lastname-social-media');
const emailSignup = document.getElementById('create-email');
const passwordSignup = document.getElementById('create-password');
const signUpBtn = document.querySelector('#btn-registrer');
const errorSignup = document.getElementById('error-message-signup');
const paragraph = document.getElementById('paragraph');
const logOutBtn = document.getElementById('logout-btn');

// creacion de cuenta
signUpBtn.addEventListener('click', () => {
  const name = userName.value;
  const lastname = userLastname.value;
  const email = emailSignup.value;
  const pass = passwordSignup.value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then(result => {
    const configuracion = {
        url: 'http://localhost:5000/' // gh-pages link
    }
    result.user.sendEmailVerification(configuracion).catch(error  => {
      console.log(error.code)
      console.log('No se pudo enviar email')
    });
    firebase.auth().signOut()
  }).catch(error => {
      console.log(error.code);
      if(error.code === 'auth/email-already-in-use') {
        errorSignup.innerHTML = `Otra cuenta usa ${email}.`
      }
    });
});

// // inicio de sesion 		
// logInBtn.addEventListener('click', () => {
//   const email = emailLoginInput.value;
//   const pass = passwordLoginInput.value;
//   const auth = firebase.auth();
//   const promise = auth.signInWithEmailAndPassword(email, pass);
//   promise.catch(error => {
//     const errorCode = error.code;
//     console.log(errorCode)
//     if (errorCode === 'auth/wrong-password') {
//       paragraph.innerHTML = 'La contraseña no es correcta. Vuelve a intentarlo'
//     } else if (errorCode === 'auth/user-not-found') {
//       paragraph.innerHTML = 'El correo electronico que ingresaste no pertenece a ninguna cuenta.'
//     }
//   });
// });

// // cerrar sesion
// logOutBtn.addEventListener('click', e => {
//     firebase.auth().signOut();
//     con
// });

// // firebaseUser se ejecutara cada vez que haya un cambio en el estado del usuario
// const checksIfUserIsLogin = () => {
//     firebase.auth().onAuthStateChanged(firebaseUser => {
//         if (firebaseUser) {
//             console.log(firebaseUser)
//             console.log('estas logueado');
//             logOutBtn.style.display = 'block';
//             // document.getElementById('buttons').style.display = 'none';
//             const email = emailSignup.value;
//             paragraph.innerHTML = '';
//             // yourName.innerHTML = email;
//             document.getElementById('second-page').innerHTML = `
//             <h4>Bienvenido ${firebaseUser.displayName}</h4>
//             <img src=${firebaseUser.photoURL} class="profile-picture">
//             <p>${firebaseUser.email}</p>
//             <p>${firebaseUser.phoneNumber !== null ? `Número: ${firebaseUser.phoneNumber}` : ''}</p>
//             `

//         } else {
//             console.log('no esta logueado');
//             // document.getElementById('buttons').style.display = 'block';
//             logOutBtn.style.display = 'none';
//         }
//     });
// }; 
// checksIfUserIsLogin();

// const googleRegistration = () => {
//     if(!firebase.auth().currentUer){
//         const provider = new firebase.auth.GoogleAuthProvider();
//         provider.addScope('https://www.googleapis.com/auth/plus.login');
//         // Para ofrecer acceso con una ventana emergente, invoca signInWithPopup:
//         firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const token = result.credential.accessToken;
//             const user = result.user;  
//         }).catch(error => {
//             const errorCode = error.code;
//             console.log(error.code);
//             const errorMessage = error.message;
//             const email = error.email;
//             const credential = error.credential;
//             if(errorCode === 'auth/account-exists-with-different-credential'){
//                 alert('Es el mismo usuario')
//             } 
//         });
//     } else {
//         firebase.auth().signOut();
//     }
    
// };
// googleBtn[1].addEventListener('click', googleRegistration);


// const facebookRegistration = () => {
//     if(!firebase.auth().currentUer){
//         const provider = new firebase.auth.FacebookAuthProvider();
//         provider.addScope('public_profile,email');
//         // Para ofrecer acceso con una ventana emergente, invoca signInWithPopup:
//         firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const token = result.credential.accessToken;
//             const user = result.user;
//             console.log(user)
//             // const name = result.user.displayName;
//             // document.getElementById('display-name').innerHTML = `
//             // <h4>Bienvenido ${name}</h4>
//             // <img src=${result.user.photoURL} class="profile-picture">
//             // `
//         }).catch(error => {
//             const errorCode = error.code;
//             console.log(error.code);
//             const errorMessage = error.message;
//             const email = error.email;
//             const credential = error.credential;
//             if(errorCode === 'auth/account-exists-with-different-credential'){
//                 alert('Es el mismo usuario')
//             } 
//         });
//     } else {
//         firebase.auth().signOut();
//     }
    
// };
// fbBtn[1].addEventListener('click', facebookRegistration);




