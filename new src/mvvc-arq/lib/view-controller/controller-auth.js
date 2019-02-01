export const signUp = (email, pass) => {
  firebase.auth().createUserWithEmailAndPassword(email, pass);   
};
export const logIn = (email, pass) => {
  firebase.auth().signInWithEmailAndPassword(email, pass);
};
