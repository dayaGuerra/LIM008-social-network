import { objTempLogin } from '../../ui/logincreate.js';


export const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signin');
  } else if (hash === '#/signup' || hash === '#/home') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signIn');
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (router) {
  case 'home':
    getNotes((notes) => {
      container.innerHTML = '';        
      container.appendChild(Home(notes));  
    });
    break;
  case 'signIn':
    container.appendChild(Login());
    break;
  default:
    container.appendChild(Login());
    break;
  }
};
  
export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
  