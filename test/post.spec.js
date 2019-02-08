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
          userUid: 'jha213',
          date: {
              toDate() {
                  return new Date();
              }
          }
        },
        abc125: {
          title: 'comprar trufas',
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

import {addNewPost, getAllPost} from '../new src/mvvc-arq/lib/controller/controller-post.js';

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
    addNewPost('adventure of the lifetime beibis','ghf215')
  });
});