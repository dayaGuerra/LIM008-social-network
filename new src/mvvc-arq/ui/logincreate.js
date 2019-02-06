// Importas el archivo que contiene el elemento padre
import { signUpOnSubmit, logInOnSubmit, googleOnSubmit, facebookOnSubmit, logOutOnSubmit } from '../lib/view-controller/view-controller-auth.js';
import { createNewPost } from '../lib/view-controller/view-controller-post.js';
export const signInForm = () => {
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'signin');
  const tempformLogin = `
  <div id="sign-in">
    <div class="text-first text-login">
      <h4>La primera Red Social para emprendedores peruanos</h4>
    </div>
    <div>
      <div class="col-form-login-account">
        <p class="text-login text-first-sesion">Iniciar Sesión</p>
        <a href="#/facebook-login" class="fb btn-social-media" id="facebook-login">
          <i class="fa fa-facebook fa-fw space-media"></i> Facebook
        </a>   
        <a href="#/google-login" class="google btn-social-media" id="google-login">
          <i class="fa fa-google fa-fw space-media"></i> Google+
        </a>
      </div>
      <div class="space-form"><span>o</span></div>
      <div class="register-inputs-field col-form-create-account">
      <input type="email" class="login-social-media" id="email-social-media" placeholder="Correo electronico" required>
      <input type="password" class="login-social-media" id="password-social-media" placeholder="Contraseña" required>
      <p id="error-message"></p>
    </div>
    <p id="error-message-login"></p>
    <button class="login-social-media btn-login" id="btn-login">Ingresa</button>
    <p>Eres nuevo en Social Media? <a href="#/signup">Registrate</a></p>
   </div>
  </div>`;
  
  formElem.innerHTML = tempformLogin;
  const logInBtn = formElem.querySelector('#btn-login');
  logInBtn.addEventListener('click', logInOnSubmit);
  const googleBtn = formElem.querySelector('#google-login');
  googleBtn.addEventListener('click', googleOnSubmit);
  const facebookBtn = formElem.querySelector('#facebook-login');
  facebookBtn.addEventListener('click', facebookOnSubmit);
  return formElem;
};

export const signUpForm = () => {
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'signup');
  const tempFormSignUp = `
    <div class="form-sign-up" id="signup">
      <div class="col-form-create-account">
        <p class="text-login text-first">
          <a href="#/" class="back fa fa-chevron-circle-left "></a> Crea una cuenta ¡Es gratis!
        </p>
        <a href="#/facebook-create" class="fb btn-social-media" id="facebook-create-btn">
          <i class="fa fa-facebook fa-fw space-media"></i> Facebook
        </a>   
        <a href="#/google-create" class="google btn-social-media" id="google-create-btn">
          <i class="fa fa-google fa-fw space-media"></i> Google+
        </a>
      </div>
      <div class="space-form"><span class="text-login-or">o</span></div>
      <div class="register-inputs-field col-form-create-account">
        <input type="text" class="login-social-media" id="name-social-media" placeholder="Nombre">
        <input type="text" class="login-social-media" id="lastname-social-media" placeholder="Apellido">
        <select name="" id="" class="login-social-media">
        <option value="">Cuentanos a que te dedicas</option>
        <option value=""></option>
        </select>
        <input type="email" class="login-social-media" id="create-email" placeholder="Correo electronico">
        <input type="password" class="login-social-media" id="create-password" placeholder="Contraseña">
      </div>
      <p id="error-message-signup"></p>
      <button class="login-social-media btn-login" id="btn-register">Registrate</button> 
    </div>`;
  
  formElem.innerHTML = tempFormSignUp;
  const SignUpBtn = formElem.querySelector('#btn-register');
  SignUpBtn.addEventListener('click', signUpOnSubmit);
  const googleBtn = formElem.querySelector('#google-create-btn');
  googleBtn.addEventListener('click', googleOnSubmit);
  const facebookBtn = formElem.querySelector('#facebook-create-btn');
  facebookBtn.addEventListener('click', facebookOnSubmit);
  return formElem;
};


