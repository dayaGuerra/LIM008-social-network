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
          profilePicUrl:'imagendejanet.jpg',
          userUid: 'abc123',
          date: {
              toDate() {
                  return new Date();
              }
          }
        },
        abc125: {
          name: 'Cinthya',
          title: 'comprar trufas',
          profilePicUrl:'imagendecinthya.jpg',
          userUid: 'jhf214',
          date: {
            toDate() {
                return new Date();
            }
          }
        },
      }
    }
  }
}


global.firebase = new MockFirebase(fixtureData, {isNaiveSnapshotListenerEnabled : true});

import {addNewPost, getAllPost, deletePost, updateTitlle} from '../new src/mvvc-arq/lib/controller/controller-post.js';

describe('addNewPost', () => {
  it('debería de poder agregar una nota', (done) => {
    const callback = (post) => {
        const result = post.find((chochito) => {
            return chochito.title === 'adventure of the lifetime beibis';
        });
        expect(result.title).toBe('adventure of the lifetime beibis')
        console.log(post)
        done()
    };
    // función de callback recibe la data
    getAllPost(callback)
    addNewPost('adventure of the lifetime beibis','ghf215','getUserName','getProfilePicUrl');
  });
});



  describe('updateTitlle', () => {
    it('debería de poder editar una nota', (done) => {
     
      updateTitlle('abc125','Data a cambiar').then(() => {

        const callback = (post) => {
            const resultEdit = post.find((chochitoLoco) => {
                return chochitoLoco.id === 'abc125';
            });
            expect(resultEdit.title).toBe('Data a cambiar')
            console.log(post)
            done()
        };
        // función de callback recibe la data
        getAllPost(callback)
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