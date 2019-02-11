// hacemos una funcion pura pasandole parametros 
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

    
export const deletePost = (noteId) =>
  firebase
    .firestore()
    .collection('post')
    .doc(noteId)
    .delete();

export const updateTitle = (id, title) => {
  let refDoc = firebase.firestore().collection('post').doc(id);
  return refDoc.update({
    title: title
  });
};
    
export const updateLikePost = (id, myLikes) => {
  let refLikes = firebase.firestore().collection('post').doc(id);
  return refLikes.update({
    likes: myLikes
  });
};

export const getAllPost = (callback) => {
  const query = firebase.firestore().collection('post').orderBy('date', 'desc');
  query.onSnapshot(querySnapshot => {
    const data = [];
    querySnapshot.forEach(doc => {
      data.push({ 
        id: doc.id,
        // title: doc.data().title,
        // name: doc.data().name,
        // profilePicUrl: doc.data().profilePicUrl,
        // date: doc.data().date,
        // state: doc.data().state,
        // likes: doc.data().likes,
        // uid: doc.data().uid,
        ...doc.data(), 
      });
    });
    callback(data);
  });
};


