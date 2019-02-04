import { signInForm, signUpForm } from '../../ui/logincreate.js';
import { createPost} from '../../ui/newswall.js';
import { getAllPost, deletePost } from '../controller/controller-post.js';
import { isUserSignedIn } from '../view-controller/view-controller-auth.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signin');
  } else if (hash === '#/signup' || hash === '#/home') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signin');
  }
};
// ;

const viewTmp = (routers) => {
  
  const router = routers.substr(2, routers.length - 2);
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
  case 'home': 
    getAllPost(notes => {
      root.innerHTML = '';
      const uid = isUserSignedIn();
      root.appendChild(createPost(notes, uid));
    });
    break;
  case 'signin':
    root.appendChild(signInForm());
    break;
  case 'signup':
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