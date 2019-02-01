
export const profileContainer = () => {
  const formElemt = document.createElement('section');
  formElemt.setAttribute('id', 'signup');
  const tempLogout = `
    <div class="form-sign-up" id="signup">
        <button class="btn-logout" id="btn-logout">Cerrar sesión</button> 
    </div>`;
    
  formElemt.innerHTML = tempLogout;
  const logoutBtn = formElem.querySelector('#btn-register');
  logoutBtn.addEventListener('click', /* funcion cerrar sesion */);
  console.log(formElemt);
  return formElemt;
};