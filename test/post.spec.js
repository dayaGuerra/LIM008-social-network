// import {addNewPost} from '../new src/mvvc-arq/lib/controller/controller-post.js';
// // usaremos un mock de firebase
// // crearemos un firebase falso

import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        abc123: {
          name: 'Janet',
          title: 'terminar la pildora',
          profilePicUrl: 'imagendejanet.jpg',
          uid: 'abc123',
          like: 1,
          state: 'privado',
          date: {
            toDate() {
              return new Date();
            }
          }
        },
        abc125: {
          name: 'Cinthya',
          title: 'comprar trufas',
          profilePicUrl: 'imagendecinthya.jpg',
          userUid: 'jhf214',
          like: 1,
          state: 'publico',
          date: {
            toDate() {
              return new Date();
            }
          }
        },
      }
    }
  }
};


global.firebase = new MockFirebase(fixtureData, {isNaiveSnapshotListenerEnabled: true});

import {addNewPost, getAllPost, deletePost, updateTitle, updateLikePost, privatePost	} from '../src/mvvc-arq/lib/controller/controller-post.js';

describe('getAllPost', () => {
  it('deberia retornar un array de objetos', (done) => {
    const callback = (post) => {
      expect(post).toBe(post);
      done();
    };
    return getAllPost(callback);
  });
});


describe('addNewPost', () => {
  it('debería de poder agregar una nota', (done) => {
    const callback = (posts) => {
      const result = posts.find((post) => {
        return post.title === 'adventure of the lifetime beibis';
      });
      expect(result.title).toBe('adventure of the lifetime beibis');
      done();
    };
    // función de callback recibe la data
    getAllPost(callback);
    addNewPost('adventure of the lifetime beibis', 'ghf215', 'getUserName', 'getProfilePicUrl', 'type', 1);
  });
});


describe('updateTitle', () => {
  it('debería de poder editar una nota', (done) => {
    updateTitle('abc125', 'Data a cambiar').then(() => {
      const callback = (posts) => {
        const resultEdit = posts.find((post) => {
          return post.id === 'abc125';
        });
        expect(resultEdit.title).toBe('Data a cambiar');
        
        done();
      };
        // función de callback recibe la data
      getAllPost(callback);
    });
  });
});
  
  
describe('updateLikePost', () => {
  it('debería de poder agregar likes a la publicacion', (done) => {
    updateLikePost('abc123', 2).then(() => {
      const callback = (posts) => {
        const resultEdit = posts.find((post) => {
          return post.id === 'abc123';
        });
        expect(resultEdit.likes).toBe(2);
        
        done();
      };
        // función de callback recibe la data
      getAllPost(callback);
    });
  });
});

describe('privatePost', () => {
  it('deberia retornar un array de objetos con state privado', (done) => {
    const callback = (post) => {
      expect(post.length).toBe(1);
      done();
    };
    return privatePost(callback, 'abc123', 'privado');
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

