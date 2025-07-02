const firebaseConfig = {
    apiKey: "AIzaSyCbm1483SCwRR9vB3qwzZ67Wq_gHOF_tU4",
    authDomain: "rreeggeeoo.firebaseapp.com",
    databaseURL: "https://rreeggeeoo-default-rtdb.firebaseio.com",
    projectId: "rreeggeeoo",
    storageBucket: "rreeggeeoo.firebasestorage.app",
    messagingSenderId: "627145496837",
    appId: "1:627145496837:web:79882ae486e0cfebb07f6c"
  };

  firebase.initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref('rreeggeeoo')