  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFIc9_Vwpj7_oVkfwCJ0jRww_66azD1hE",
    authDomain: "red-social-emprendimiento.firebaseapp.com",
    databaseURL: "https://red-social-emprendimiento.firebaseio.com",
    projectId: "red-social-emprendimiento",
    storageBucket: "red-social-emprendimiento.appspot.com",
    messagingSenderId: "110917534293"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();
  const docRef = firestore.doc("usuario/publication");
  const inputTextArea = document.querySelector('#text-post');
  const btnPost = document.querySelector("#btn-post");
  const sectionPost = document.querySelector('#section-post');
  btnPost.addEventListener('click',function(){
    const postToSave = inputTextArea.value;
    sectionPost.innerHTML= postToSave;
    console.log('I am going to save'+postToSave+'to firestore');
    docRef.set({
        post : postToSave
    }).then(function(){
        console.log('status saved!');
    }).catch(function(error){
        console.log('hay un error');
    });
  });
