import { postDate } from '../util/app.js';

export const addNewPost = (textNewNote, userUid, getUserName, getProfilePicUrl) =>
  firebase
    .firestore()
    .collection('post')
    .add({
      name: getUserName,
      title: textNewNote,
      profilePicUrl: getProfilePicUrl,
      date: new Date(),
      state: false,
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
      console.log(typeof(postDate(doc.data().date.toDate())) + postDate(doc.data().date.toDate()))
      data.push({ 
        id: doc.id,
        title: doc.data().title,
        name: doc.data().name,
        profilePicUrl: doc.data().profilePicUrl,
        date: postDate(doc.data().date.toDate()),
        uid: doc.data().uid,
        // ...doc.data(), 
  
      });
    

    });
    callback(data);
  });
};

export const updateTitlle = (id, title) => {
  let refDoc = firebase.firestore().collection('post').doc(id);
  refDoc.update({
    title: title
  });
};
  
