export const addNewPost = textNewNote =>
  firebase
    .firestore()
    .collection('post')
    .add({
      title: textNewNote,
      state: false
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
