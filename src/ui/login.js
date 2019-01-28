const objTempLogin = {
    signin: `
    <div id="signin"><div class="text-first text-login"><h4>La primera Red Social para emprendedores peruanos</h4></div>
    <div>
        <form action="">
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
      </div>
      <form action=""></form>
      <button class="login-social-media btn-login" id="btn-login">Ingresa</button>
      <p>Eres nuevo en Social Media? <a href="#/signup">Registrate</a></p>
      </div>
      </div>`,
    signup: `
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
    </div>`,

     diferent:`
     <div id="message">
     <h2>404</h2>
     <h1>Página no encontrada</h1>
     <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
   </div>`
  }
  
  export  { objTempLogin }