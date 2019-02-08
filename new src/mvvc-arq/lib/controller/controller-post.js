import { getUserName, getProfilePicUrl } from '../view-controller/view-controller-auth.js';
import { postDate } from '../util/app.js';

export const addNewPost = (textNewNote, userUid, getUserName, getProfilePicUrl, type, like) =>
  firebase
    .firestore()
    .collection('post')
    .add({
      name: getUserName,
      title: textNewNote,
      profilePicUrl: getProfilePicUrl,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      state: type,
      likes: like,
      uid: userUid
    }).catch((error) => {
      console.log(error);
    });

    
export const deletePost = (idNote) =>
  firebase
    .firestore()
    .collection('post')
    .doc(idNote)
    .delete();

export const getAllPost = (callback) => {
  const query = firebase.firestore().collection('post').orderBy('date', 'desc');
  query.onSnapshot(querySnapshot => {
    const data = [];
    querySnapshot.forEach(doc => {
      data.push({ 
        id: doc.id,
        title: doc.data().title,
        name: doc.data().name,
        profilePicUrl: doc.data().profilePicUrl,
        date: postDate(doc.data().date.toDate()),
        state: doc.data().state,
        likes: doc.data().likes,
        uid: doc.data().uid,
        // ...doc.data(),
         
      });
    });
    callback(data);
  });
};

export const updateTitlle = (id, title) => {
  let refDoc = firebase.firestore().collection('post').doc(id);
  return refDoc.update({
    title: title
  });
};
export const updateLikePost = (id, mylikes) => {
  console.log(`del post =>${id} se agrega un atributo likes.megusta:'0'`);
  let refLikes = firebase.firestore().collection('post').doc(id);
  return refLikes.update({
    likes: mylikes
  });
};
