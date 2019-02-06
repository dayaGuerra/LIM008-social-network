import { signInForm, signUpForm } from '../../ui/logincreate.js';
import { tmpPostInSection, textareapublication, logOut} from '../../ui/newswall.js';
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
  const main = document.getElementById('main');
  const root = document.getElementById('root');
  const navBar = document.getElementById('nav');

     
  // const viewPost = (notes, uid) => {
  // return {...createPost(notes, uid)} ;
  // }
  root.innerHTML = '';
  navBar.innerHTML = '';
  main.innerHTML = '';
  switch (router) {
  case 'home': 
    navBar.appendChild(logOut());
    main.appendChild(textareapublication());
    getAllPost(notes => {
      root.innerHTML = '';
      const uid = isUserSignedIn();
      // root.appendChild(createPost(notes, uid));
      root.appendChild(Object.assign(tmpPostInSection(notes, uid)));
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
  console.log(window.location);
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};