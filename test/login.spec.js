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
import { signUp, logIn, googleAuth, facebookAuth, logOut } from '../new src/mvvc-arq/lib/controller/controller-auth.js';
describe('lista de notas', () => {
  it('Debería poder iniciar sesion', () => {
    return logIn('front@end.la', '123456')
      .then((user) => {
        expect(user.email).toBe('front@end.la');
      });
  });
});

describe('crea cuenta', () => {
  it('Debería poder crear una cuenta', () => {
    return signUp('daya@example.com', 'mandalaman')
    .then((user) => {
      expect(user.email).toBe('daya@example.com');
    })
  });
});