import { getUserName, getProfilePicUrl } from '../view-controller/view-controller-auth.js';

export const addNewPost = textNewNote =>
  firebase
    .firestore()
    .collection('post')
    .add({
      name: getUserName(),
      title: textNewNote,
      profilePicUrl: getProfilePicUrl(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      state: false
    }).catch((error) => {
      console.error(error);
    });

    
export const deletePost = (idNote) =>
  firebase
    .firestore()
    .collection('post')
    .doc(idNote)
    .delete();

export const getAllPost = callback =>
  firebase
    .firestore()
    .collection('post')
    .onSnapshot(querySnapshot => {
      const data = [];
      querySnapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });
      callback(data);
    });
