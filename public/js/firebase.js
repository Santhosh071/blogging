let firebaseConfig = {
    apiKey: "AIzaSyA-tgtxkNjeoLgKS_djiaIDDiglSnwhbpA",
    authDomain: "blogging-b8df8.firebaseapp.com",
    projectId: "blogging-b8df8",
    storageBucket: "blogging-b8df8.appspot.com",
    messagingSenderId: "271560195896",
    appId: "1:271560195896:web:30cf2d93c2859b903a0bcd"
 };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
