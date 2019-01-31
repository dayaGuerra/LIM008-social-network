const authFB = document.getElementById('login-facebook');
const authGoogle = document.getElementById('login-google');
const email = document.getElementById('email-social-media').value;
const password = document.getElementById('password-social-media').value;
const btnIniciaSesion = document.getElementById('btn-login');
const btnSignUp = document.getElementById('btn-signup');
const btnLogout = document.getElementById('btnLogout');
const perfil = document.getElementById('perfil');
const bienvenida = document.getElementById('bienvenida');
const btnMyPost =document.getElementById('btnMyPost');
const usuario = document.getElementById('user');

window.onload = () => {
  firebase.initializeApp(config);
  
  // const poster = new Post();
  post.consultarTodosPost();
  
  
  firebase.auth().onAuthStateChanged(user => {
    const message = document.getElementById('message');
  
    if (user) {
      usuario.innerHTML = 'Bienvenida ' + user.displayName;
      perfil.classList.add('show');
      perfil.classList.remove('hidden');
      bienvenida.classList.remove('show');
      bienvenida.classList.add('hidden');
    } else {
      message.innerHTML = 'Aun no has iniciado sesion';
      perfil.classList.remove('show');
      perfil.classList.add('hidden');
      bienvenida.classList.remove('hidden');
      bienvenida.classList.add('show');
    }
  });
  
  
  btnCreaCuenta.addEventListener('click', () => {
    const email = document.getElementById('emailSesion').value;
    const password = document.getElementById('passwordSesion').value;
    autentica.creaCuentaEmailPass(email, password);
  });
  
  btnIniciaSesion.addEventListener('click', () => {
    const email = document.getElementById('emailSesion').value;
    const password = document.getElementById('passwordSesion').value;
    autentica.iniciaSesion(email, password);
  });
  
  authFB.addEventListener('click', () => {
    autentica.autenticaFb();
  });
  
  authGoogle.addEventListener('click', () => {
    autentica.autenticaGoogle();
  });
  
  btnLogout.addEventListener('click', () => {
    autentica.cierraSesion();
  });
  
  btnMyPost.addEventListener('click', () => {
    const user = firebase.auth().currentUser;
    console.log(user);
    if (user) {
      post.consultPostUsuario(user.email);
    } else {
      console.log('Autenticate');
    }
  });
};
  

