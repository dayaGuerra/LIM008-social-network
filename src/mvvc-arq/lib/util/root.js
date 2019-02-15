import { signInForm, signUpForm } from '../../ui/logincreate.js';
import { postListSectionnn, postListSection, textarePublication, logOut, filterSelect} from '../../ui/newswall.js';
import { getAllPost, privatePost } from '../controller/controller-post.js';
import { isUserSignedIn, userState } from '../view-controller/view-controller-auth.js';

const changeTmp = (hash) => {
  if (userState() === null) {
    if ((hash === '#/signin' || hash === '#/signup')) {
      return viewTmp(hash);
    }
    window.location.hash = '';
    return viewTmp('#/signin');
  } else {
    if (hash === '#/' || hash === '' || hash === '#' || hash === '#/signin' || hash === '#/signup') {
      window.location.hash = '';
      return viewTmp('#/home');
    } else if (hash === '#/home' || hash === '#/privatePost' || hash === '#/publicPost') {
      return viewTmp(hash);
    }
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const main = document.getElementById('main');
  const root = document.getElementById('root');
  const navBar = document.getElementById('nav');
  const backgroundBody = document.getElementById('background-body');
  root.innerHTML = '';
  navBar.innerHTML = '';
  main.innerHTML = '';
  switch (router) {
  case 'home':
   
    navBar.appendChild(logOut());
    main.appendChild(textarePublication());
    getAllPost(notes => {
      root.innerHTML = '';
      const uid = isUserSignedIn();
      root.appendChild(postListSection(notes, uid));
      backgroundBody.style.background = 'white';
    });
    break;
  case 'signin':
    
    root.appendChild(signInForm());
    break;
  case 'signup':
    root.appendChild(signUpForm());
    break;
  case 'privatePost':
    privatePost(notes => {
      root.innerHTML = '';
      root.appendChild(postListSection(notes, isUserSignedIn()));
    }, isUserSignedIn(), 'privado');
    navBar.appendChild(logOut());
    main.appendChild(textarePublication());
    root.appendChild(postListSectionnn());
    
    break;
  case 'publicPost':
    privatePost(notes => {
      root.innerHTML = '';
      root.appendChild(postListSection(notes, isUserSignedIn()));
    }, isUserSignedIn(), 'publico');
    navBar.appendChild(logOut());
    main.appendChild(textarePublication());
    root.appendChild(postListSectionnn());
  default:
    root.appendChild(signInForm());
    break;
  }
};

export const initRoutersSocialMedia = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};