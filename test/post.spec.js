// import {addNewPost} from '../new src/mvvc-arq/lib/controller/controller-post.js';
// // usaremos un mock de firebase
// // crearemos un firebase falso

import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        abc123: {
          title: 'terminar la pildora',
        },
        abc125: {
          title: 'comprar trufas',
        },
      }
    }
  }
};


global.firebase = new MockFirebase(fixtureData, {isNaiveSnapshotListenerEnabled: true});

import {addNewPost, getAllPost, deletePost} from '../new src/mvvc-arq/lib/controller/controller-post.js';


describe('addNewPost', () => {
  it('debería de poder agregar una nota', () => {
    return addNewPost('adventure of the lifetime beibis').then((data) => {
      const callback = (post) => {
        console.log(post);
      };
        // función de callback recibe la data
      getAllPost(callback);
      // recibe como argumento una función
    });
  });
});

describe('deletePost', () => {
  it('debería de poder eliminar una nota', () => {
    return deletePost('abc123')
      .then(() => {
        const callback = (post) => {
          const result = notes.find((elemento) => {
            return elemento.id === 'abc123';
          });
          expect(result).toBe(undefined);
          done();
        };
        getAllPost(callback);
      });
  });
});
