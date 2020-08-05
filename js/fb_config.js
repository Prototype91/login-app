function Firebase_() {
    const firebaseConfig = {
        apiKey: "AIzaSyBqk2DmW7hYj9Ck8Wc4XesmE9oh7QvmMRY",
        authDomain: "login-app-7562e.firebaseapp.com",
        databaseURL: "https://login-app-7562e.firebaseio.com",
        projectId: "login-app-7562e",
        storageBucket: "login-app-7562e.appspot.com",
        messagingSenderId: "1089500683980",
        appId: "1:1089500683980:web:ff8ff83f78f6c8e92cac69"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    this.errors = {
        'auth/invalid-email': 'Adresse mail non valide.',
        'auth/weak-password': 'Mot de passe trop faible (au moins 6 caractères)',
        'auth/email-already-in-use': 'Cette adresse mail est déjà prise !',
        'auth/user-not-found': 'Utilisateur non-trouvé !',
        'auth/wrong-password': 'Mot de passe non valide !'
    };
}

const firebase_ = new Firebase_();