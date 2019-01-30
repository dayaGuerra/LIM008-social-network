window.authentication = {
    createEmailAndPass: (email, pass) => {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
	.then(result => {
	  const configuracion = {
		  url: 'http://localhost:5000/' // gh-pages link
	  }
	  result.user.sendEmailVerification(configuracion).catch(error  => {
		console.log(error.code)
		console.log('No se pudo enviar email')
	  });
	  firebase.auth().signOut()
	}).catch(error => {
		console.log(error.code);
		if(error.code === 'auth/email-already-in-use') {
		  errorSignup.innerHTML = `Otra cuenta usa ${email}.`
		}
	  });
    }
};