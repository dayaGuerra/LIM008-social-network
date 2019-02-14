const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();


global.firebase = firebasemock.MockFirebaseSdk(
// use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);


// iniciando tests
import { signUp, logIn, googleAuth, facebookAuth, logOut } from '../src/mvvc-arq/lib/controller/controller-auth.js';
import {isUserSignedIn } from '../src/mvvc-arq/lib/view-controller/view-controller-auth.js';
import { notEqual } from 'assert';
describe('lista de notas', () => {
  it('Debería poder iniciar sesion', () => {
    return logIn('janetgutmont@gmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('janetgutmont@gmail.com');
      });
  });
});
describe('logearse con facebook', () => {
  it('Debería poder iniciar sesión facebook', () => {
    const userId = isUserSignedIn();
    return facebookAuth().then((user) => {
      expect(userId).not.toBe(null);
    });
  });
});
describe('logearse con google', () => {
  it('Debería poder iniciar sesión google', () => {
    const userId = isUserSignedIn();
    return googleAuth().then((user) => {
      expect(userId).not.toBe(null);
    });
  });
});
describe('crea cuenta', () => {
  it('Debería poder crear una cuenta', () => {
    return signUp('daya@example.com', 'mandalaman')
      .then((user) => {
        expect(user.email).toBe('daya@example.com');
      });
  });
});

describe('cerrar sesion', () => {
  it('Debería poder cerrar sesión', () => {
    return logOut()
      .then((user) => {
        expect(user).toBe(undefined);
      });
  });
});
