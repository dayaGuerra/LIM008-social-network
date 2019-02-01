// window.authentication = {
//   createEmailAndPass: (email, pass) => {
//     firebase.auth().createUserWithEmailAndPassword(email, pass)
//       .then(result => {
//         const configuracion = {
//           url: 'http://localhost:5000/' // gh-pages link
//         };
//         result.user.sendEmailVerification(configuracion).catch(error => {
//           console.log(error.code);
//           console.log('No se pudo enviar email');
//         });
//         firebase.auth().signOut();
//       }).catch(error => {
//         console.log(error.code);
//         if (error.code === 'auth/email-already-in-use') {
//           //   errorSignup.innerHTML = `Otra cuenta usa ${email}.`;
//         }
//       });
//   },  
//   login: (email, password) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(result => {  
//         if (result.user.sendEmailVerified) {
//           // agregar lo que se debe mostrar
//         } else {
//           firebase.auth().signOut();
//           // mensaje que diga  verifica tu email
//         }
//       }).catch(error => {
//         console.log(error.code);
//         if (errorCode === 'auth/wrong-password') {
//           errorMesage.innerHTML = 'La contraseña no es correcta. Vuelve a intentarlo';
//         } else if (errorCode === 'auth/user-not-found') {
//           errorMessage.innerHTML = 'El correo electronico que ingresaste no pertenece a ninguna cuenta.';
//         }
//       });
//   },
//   authenticationWithGoogle: () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//       .then(result => {
//         const user = result.user.displayName;
//         // que queremos hacer cuando se inicie sesion con google
//       }).catch(error => {
//         console.log(error.code);
//       });
//   },
//   authenticationWithFacebook: () => {
//     const provider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//       .then(result => {
//         const user = result.user.displayName;
//         // que queremos hacer cuando se inicie sesion con google
//       }).catch(error => {
//         console.log(error.code);
//       });
//   },
    
  
// };