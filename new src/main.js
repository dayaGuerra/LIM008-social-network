import { initRoutersSocialMedia } from './mvvc-arq/lib/util/root.js';
import { initFirebaseAuth } from './mvvc-arq/lib/view-controller/view-controller-auth.js';
// Función anterior initRouter en archivo de Dani

const init = () => {
  const config = {
    apiKey: 'AIzaSyCFIc9_Vwpj7_oVkfwCJ0jRww_66azD1hE',
    authDomain: 'red-social-emprendimiento.firebaseapp.com',
    databaseURL: 'https://red-social-emprendimiento.firebaseio.com',
    projectId: 'red-social-emprendimiento',
    storageBucket: 'red-social-emprendimiento.appspot.com',
    messagingSenderId: '110917534293'
  };

  firebase.initializeApp(config);

  initRoutersSocialMedia();
  initFirebaseAuth();
};

window.onload = init;
