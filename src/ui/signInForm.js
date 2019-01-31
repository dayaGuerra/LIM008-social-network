
import {createNewAccount} from '../lib/firebase.js';
export const signInForm = () => {
  const form = document.createElement('form');
  form.innerHTML = `
    <div id="signin">
      <div class="text-first text-login">
        <h4>La primera Red Social para emprendedores peruanos</h4>
      </div>
    <div>
      <div class="col-form-login-account">
            <p class="text-login text-first-sesion">Iniciar Sesión</p>
            <a href="#/facebook-login" class="fb btn-social-media">
            <i class="fa fa-facebook fa-fw space-media"></i> Facebook
            </a>   
            <a href="#/google-login" class="google btn-social-media"><i class="fa fa-google fa-fw space-media">
            </i> Google+
            </a>
      </div>
      <div class="space-form"><span>o</span></div>
      <div class="register-inputs-field col-form-create-account">
        <input type="email" class="login-social-media" id="email-social-media" placeholder="Correo electronico">
        <input type="password" class="login-social-media" id="password-social-media" placeholder="Contraseña">
        <p id = "error-message"></p>
      </div>
      <button class="login-social-media btn-login" id="btn-login">Ingresa</button>
      <p>Eres nuevo en Social Media? <a href="#/signup">Registrate</a></p>
      </div>
      </div>
      `;
  const errorMessage = document.getElementById('error-message');
  const userName = document.getElementById('name-social-media');
  const userLastName = document.getElementById('lastname-social-media');
  const emailSignup = document.getElementById('create-email');
  const passwordSignup = document.getElementById('create-password');
  const btnLogin = form.querySelector('#btn-login');
  btnLogin.addEventListener('click', createNewAccount);
  return form;
};
