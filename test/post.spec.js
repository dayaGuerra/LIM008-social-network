import {addNewPost} from '../new src/mvvc-arq/lib/controller/controller-post.js';
// usaremos un mock de firebase
// crearemos un firebase falso
const firebase = 
describe('addNewPost', () => {
  it('debería de poder agregar una nota', () => {
    return addNewPost('adventure of the lifetime beibis').then((data) => {
      expect(data).toBe('adventure of the lifetime beibis');
    });
  });
});