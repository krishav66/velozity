// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBjMcxo99raQfQKITx6-S3JdcWJh0bxHoQ",
    authDomain: "movie-search-586bf.firebaseapp.com",
    projectId: "movie-search-586bf",
    storageBucket: "movie-search-586bf.appspot.com",
    messagingSenderId: "601219073446",
    appId: "1:601219073446:web:38cc255a27b3cf111c3b67",
    measurementId: "G-D8F0GE7RV1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
