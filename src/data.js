// import firebase from 'firebase/app'
// import 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'

(function() {
    // Initialize Firebase
   const config = {
    apiKey: "AIzaSyCFIc9_Vwpj7_oVkfwCJ0jRww_66azD1hE",
    authDomain: "red-social-emprendimiento.firebaseapp.com",
    databaseURL: "https://red-social-emprendimiento.firebaseio.com",
    projectId: "red-social-emprendimiento",
    storageBucket: "red-social-emprendimiento.appspot.com",
    messagingSenderId: "110917534293"
  };
  firebase.initializeApp(config);

  //obtener elementos 
  const emailSignup = document.getElementById('email-sign-up');
  const passwordSignup = document.getElementById('password-sign-up');
  const logInBtn = document.getElementById('login-btn');
  const signUpBtn = document.getElementById('btn-signup');
  const logOutBtn = document.getElementById('logout-btn');

  logInBtn.addEventListener('click', e => {
    const email = emailSignup.value;
    const pass = passwordSignup.value;
    // almacenamos el valor que va a devolver la promise
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    // en caso que no pueda logearse
    promise.catch(e => console.log(e.message));
    
  });
  // evento de creacion de cuenta
  signUpBtn.addEventListener('click', e => {
    // TO-DO comprobar que el email es real
    const email = emailSignup.value;
    const pass = passwordSignup.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });
  logOutBtn.addEventListener('click', e => {
      firebase.auth().signOut();
  });
  // firebaseUser se ejecutara cada vez que haya un cambio en el estado del usuario
  firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      logOutBtn.style.display = 'none';
    } else {
        console.log('no esta logueado');
        logOutBtn.style.display = 'block';
    }
  });



} ());