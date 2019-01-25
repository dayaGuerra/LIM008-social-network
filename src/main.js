// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const loginBtn = document.getElementById('login-btn-access');
const signUp = document.getElementById('signup-btn');

loginBtn.addEventListener('click', () => {
    document.getElementById('section-intro-network').style.display = 'none';
    document.getElementById('section-intro-network-login').style.display = 'block';
    document.getElementById('section-register-user').style.display = 'none';

});
signUp.addEventListener('click', () => {
    document.getElementById('section-intro-network').style.display = 'none';
    document.getElementById('section-intro-network-login').style.display = 'none';
    document.getElementById('section-register-user').style.display = 'block';
});
