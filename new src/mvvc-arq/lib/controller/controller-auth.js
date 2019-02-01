export const signUp = (email, pass) => 
  firebase.auth().createUserWithEmailAndPassword(email, pass);   

export const logIn = (email, pass) =>
  firebase.auth().signInWithEmailAndPassword(email, pass);

export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const facebookAuth = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};