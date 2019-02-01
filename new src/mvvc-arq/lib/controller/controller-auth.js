export const signUp = (email, pass) => {
  firebase.auth().createUserWithEmailAndPassword(email, pass);   
};
export const logIn = (email, pass) => {
  console.log(logIn('dayamandalaman@gmail.com', '123456'))
  console.log(email, pass)
  firebase.auth().signInWithEmailAndPassword(email, pass);
};
