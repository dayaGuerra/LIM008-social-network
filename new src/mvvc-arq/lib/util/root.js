import { signInForm, signUpForm } from '../../ui/logincreate.js';

export const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signin');
  } else if (hash === '#/signup' || hash === '#/home') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signin');
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  console.log(router);
  const root = document.getElementById('root');
  console.log(root);
  root.innerHTML = '';
  switch (router) {
  case 'signin':
    root.appendChild(signInForm());
    break;
  default:
    root.appendChild(signUpForm());
    break;
  }
};


export const initRoutersSocialMedia = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if ((' onhashchange ' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
