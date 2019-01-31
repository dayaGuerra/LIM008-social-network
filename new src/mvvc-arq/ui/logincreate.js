// Importas el archivo que contiene el elemento padre
// import {crearFormularioLogin} from '../lib/view-controller/logincreate-controller.js';
export const signInForm = () => {
  const tempformLogin = 
  // Segundo, creas el nodo hijo o template que va a ir en ese elemento
  `
<div id="signin">
  <div class="text-first text-login">
    <h4>La primera Red Social para emprendedores peruanos</h4>
  </div>
    
      <div class="col-form-login-account">
        <p class="text-login text-first-sesion">Iniciar Sesión</p>
        <button class="fb btn-social-media" id = "login-faceboo">
          <i class="fa fa-facebook fa-fw space-media"></i> Facebook
        </button>   
        <button class="google btn-social-media"  id = "login-google"><i class="fa fa-google fa-fw space-media">
          </i> Google+  
        </button>
        <div class="space-form"><span>o</span></div>
      </div>
    <div id = "login-or-signup">
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
    <button class="login-social-media btn-login" id="btn-signup">Registrate</button>
    </div>
</div>
      `; 

  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'form-login');
  formElem.innerHTML = tempformLogin;
  return formElem;
};
