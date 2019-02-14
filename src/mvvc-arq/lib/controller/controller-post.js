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
        ...doc.data(), 
      });
    });
    callback(data);
  });
};

export const privatePost = (callback, userId, condition) => {
  firebase.firestore().collection('post')
    .where('uid', '==', userId)
    .where('state', '==', condition)
    .onSnapshot(querySnapshot => {
      const dataPrivatePost = [];
      querySnapshot.forEach(doc => {
        dataPrivatePost.push({ 
          id: doc.id,
          ...doc.data(), 
        });
      });
      callback(dataPrivatePost);
    });
};

