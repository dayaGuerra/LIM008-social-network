import { initRoutersSocialMedia } from './mvvc-arq/lib/util/root.js';
import { initFirebaseAuth } from './mvvc-arq/lib/view-controller/view-controller-auth.js';

const init = () => {
  const config = {
    apiKey: 'AIzaSyAXmqrQbsryZXVALre99FwzbJAsp4TCeCk',
    authDomain: 'red-social-2-80717.firebaseapp.com',
    databaseURL: 'https://red-social-2-80717.firebaseio.com',
    projectId: 'red-social-2-80717',
    storageBucket: 'red-social-2-80717.appspot.com',
    messagingSenderId: '615276403612'
  };

  firebase.initializeApp(config);

  initRoutersSocialMedia();
  initFirebaseAuth();
};

window.onload = init;
