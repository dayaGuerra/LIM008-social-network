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
          profilePicUrl: 'foto de janet comiendo hamburguesonas.jpg',
          date: new Date('February 6, 2019 at 5:48:04 PM UTC-5'),
          userUid: 'ad123',
        },
        abc125: {
          name: 'D,yanara',
          title: 'comprar trufas',
          profilePicUrl: 'foto de daya en la playa.jpg',
          date: new Date('February 6, 2019 at 5:48:04 PM UTC-5'),
          userUid: 'ad134',
        },
      }
    }
  }
}


global.firebase = new MockFirebase(fixtureData, {isNaiveSnapshotListenerEnabled: true});

import {addNewPost, getAllPost} from '../new src/mvvc-arq/lib/controller/controller-post.js';


describe('addNewPost', () => {
  it('debería de poder agregar una nota', (done) => {
    return addNewPost('adventure of the lifetime beibis', 'ad152').then((data) => {
        const callback = (post) => {
        done()
        };
        // función de callback recibe la data
        getAllPost(callback)
        // recibe como argumento una función
    });
  });
});