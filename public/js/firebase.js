let firebaseConfig = {
    apiKey: "AIzaSyCbxGPRo1FzRDiTr0HuB20fmAKAoWOMkW4",
    authDomain: "blogging-website-648ee.firebaseapp.com",
    projectId: "blogging-website-648ee",
    storageBucket: "blogging-website-648ee.appspot.com",
    messagingSenderId: "524479071687",
    appId: "1:524479071687:web:9e52bf3df4c4226aeb45e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();