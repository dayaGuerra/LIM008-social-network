export const signUpForm = () => {
  const tempformSignUp = 
    // Segundo, creas el nodo hijo o template que va a ir en ese elemento
    `
    <div class="form-sign-up" id="signup">
      <form action="">
      <div class="col-form-create-account">
        <p class="text-login text-first"> <a href="#/" class="back fa fa-chevron-circle-left "></a> Crea una cuenta ¡Es gratis!</p>
        <a href="#/facebook-create" class="fb btn-social-media">
        <i class="fa fa-facebook fa-fw space-media"></i> Facebook
        </a>   
        <a href="#/google-create" class="google btn-social-media"><i class="fa fa-google fa-fw space-media">
        </i> Google+
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
      
      </form>
      <button class="login-social-media btn-login" id="btn-registrer">Registrate</button>
      
    </div>
    `;

  // const btnLogin = form.querySelector('#btn-login');
  // btnLogin.addEventListener('click', createNewAccount);
  // return form;
  
  const formElem = document.createElement('form');
  formElem.setAttribute('id', 'form-login');
  formElem.innerHTML = tempformSignUp;
 return formElem;
};
    