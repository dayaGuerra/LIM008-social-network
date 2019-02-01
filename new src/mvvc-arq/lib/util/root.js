import { signInForm, signUpForm } from '../../ui/logincreate.js';

   const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signin');
    // console.log('rojo')
  } else if (hash === '#/signup' || hash === '#/signin') {
    console.log('fresa')
    return viewTmp(hash);
  } else {
    return viewTmp('#/signin');
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  console.log(router);
  const root = document.getElementById('root');
  // console.log(root);
  root.innerHTML = '';
  switch (router) {
  case 'signin':
    root.appendChild(signInForm());
    break;
  case 'signup':
  // console.log(r)
    root.appendChild(signUpForm());
    break;
  default:
    root.appendChild(signInForm());
    break;
  }
};


export const initRoutersSocialMedia = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
