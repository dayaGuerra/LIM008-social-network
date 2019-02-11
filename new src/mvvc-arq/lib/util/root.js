import { signInForm, signUpForm } from '../../ui/logincreate.js';
import { postListSection, textarePublication, logOut, filterSelect} from '../../ui/newswall.js';
import { getAllPost, privatePost } from '../controller/controller-post.js';
import { isUserSignedIn } from '../view-controller/view-controller-auth.js';
import { showPrivatePostOnClick } from '../view-controller/view-controller-post.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signin');
  } else if (hash === '#/signup' || hash === '#/home' || hash === '#/privatePost') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signin');
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const main = document.getElementById('main');
  const root = document.getElementById('root');
  const navBar = document.getElementById('nav');

     
  root.innerHTML = '';
  navBar.innerHTML = '';
  main.innerHTML = '';
  switch (router) {
  case 'home': 
    navBar.appendChild(logOut());
    main.appendChild(textarePublication());
    // llamo a getallpost y le paso la funcion anonima con parametro notes
    getAllPost(notes => {
      root.innerHTML = '';
      const uid = isUserSignedIn();
      root.appendChild(postListSection(notes, uid));
    });
    break;
  case 'signin':
    root.appendChild(signInForm());
    break;
  case 'signup':
    root.appendChild(signUpForm());
    break;
  case 'privatePost':
    root.appendChild(filterSelect());
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