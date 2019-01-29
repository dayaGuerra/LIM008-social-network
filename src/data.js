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

//obtener elementos 
	const emailSignup = document.getElementById('email-sign-up');
	const passwordSignup = document.getElementById('password-sign-up');
	const logInBtn = document.getElementById('login-btn');
	const signUpBtn = document.getElementById('btn-signup');
	const logOutBtn = document.getElementById('logout-btn');
	const paragraph = document.getElementById('paragraph');
	const yourName = document.getElementById('your-name');
	const googleBtn = document.getElementById('google-register-btn');
	const facebookBtn = document.getElementById('facebook-register-btn');
	const userName = document.getElementById('user-name');
	const userLastName = document.getElementById('user-lastname');
// creacion de cuenta
	const createAccount = () => {
		const name = userName.value;
		const lastname = userLastName.value;
		const email = emailSignup.value;
		const pass = passwordSignup.value;
		const auth = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(error => {
			console.log(error.code)
			if(error.code === 'auth/email-already-in-use')
			paragraph.innerHTML = `Otra cuenta usa ${email}.`
		});
	};
	signUpBtn.addEventListener('click', createAccount);

// inicio de sesion 		
	const logInUser = () => {
		const email = emailSignup.value;
		const pass = passwordSignup.value;
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(error => {
			const errorCode = error.code;
			console.log(errorCode)
			if (errorCode === 'auth/wrong-password') {
				paragraph.innerHTML = 'La contraseña no es correcta. Vuelve a intentarlo'
			} else if (errorCode === 'auth/user-not-found') {
				paragraph.innerHTML = 'El correo electronico que ingresaste no pertenece a ninguna cuenta.'
			}
		});
	};
	logInBtn.addEventListener('click', logInUser);

	// cerrar sesion
	logOutBtn.addEventListener('click', e => {
		firebase.auth().signOut();
	});
	// firebaseUser se ejecutara cada vez que haya un cambio en el estado del usuario
	const checksIfUserIsLogin = () => {
		firebase.auth().onAuthStateChanged(firebaseUser => {
			if (firebaseUser) {
				console.log(firebaseUser)
				console.log('estas logueado');
				logOutBtn.style.display = 'block';
				document.getElementById('buttons').style.display = 'none';
				// const email = emailSignup.value;
				paragraph.innerHTML = '';
				// yourName.innerHTML = email;
				document.getElementById('display-name').innerHTML = `
				<h4>Bienvenido ${firebaseUser.displayName}</h4>
				<img src=${firebaseUser.photoURL} class="profile-picture">
				<p>${firebaseUser.email}</p>
				<p>${firebaseUser.phoneNumber !== null ? `Número: ${firebaseUser.phoneNumber}` : ''}</p>
				`

			} else {
				console.log('no esta logueado');
				document.getElementById('buttons').style.display = 'block';
				logOutBtn.style.display = 'none';
			}
		});
	}; 
	checksIfUserIsLogin();
	
	const googleRegistration = () => {
		if(!firebase.auth().currentUer){
			const provider = new firebase.auth.GoogleAuthProvider();
			provider.addScope('https://www.googleapis.com/auth/plus.login');
			// Para ofrecer acceso con una ventana emergente, invoca signInWithPopup:
			firebase.auth().signInWithPopup(provider)
			.then(result => {
				const token = result.credential.accessToken;
				const user = result.user;
				
			}).catch(error => {
				const errorCode = error.code;
				console.log(error.code);
				const errorMessage = error.message;
				const email = error.email;
				const credential = error.credential;
				if(errorCode === 'auth/account-exists-with-different-credential'){
					alert('Es el mismo usuario')
				} 
			});
		} else {
			firebase.auth().signOut();
		}
		
	};
	googleBtn.addEventListener('click', googleRegistration);

	const facebookRegistration = () => {
		if(!firebase.auth().currentUer){
			const provider = new firebase.auth.FacebookAuthProvider();
			provider.addScope('public_profile,email');
			// Para ofrecer acceso con una ventana emergente, invoca signInWithPopup:
			firebase.auth().signInWithPopup(provider)
			.then(result => {
				const token = result.credential.accessToken;
				const user = result.user;
				console.log(user)
				// const name = result.user.displayName;
				// document.getElementById('display-name').innerHTML = `
				// <h4>Bienvenido ${name}</h4>
				// <img src=${result.user.photoURL} class="profile-picture">
				// `
			}).catch(error => {
				const errorCode = error.code;
				console.log(error.code);
				const errorMessage = error.message;
				const email = error.email;
				const credential = error.credential;
				if(errorCode === 'auth/account-exists-with-different-credential'){
					alert('Es el mismo usuario')
				} 
			});
		} else {
			firebase.auth().signOut();
		}
		
	};
	facebookBtn.addEventListener('click', facebookRegistration);
