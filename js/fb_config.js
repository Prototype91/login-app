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
        'auth/wrong-password': 'Mot de passe non valide !',
        'auth/unauthorized-domain': `Votre domaine (${window.location.hostname}) n'est pas autorisé à effectuer cette opération. Vous pouvez l'ajouter à la liste 'OAuth redirect domains' dans votre console Firebase -> section 'Authentification' -> Onglet 'Méthode d'inscription'`,
        'auth/too-many-requests': 'Trop de requêtes échouées ... Veuillez réessayer dans quelques instants',
        'auth/operation-not-supported-in-this-environment': 'Opération non supportée par votre environnement de dévelopement. "location.protocol" doit être en "http", "https" ou "chrome-extension" et l\'API "web storage" doit être activée'
    };
}

const firebase_ = new Firebase_();