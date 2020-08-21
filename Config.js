import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA3tJ576tPusx9JVeJnOVBwWX8VJzCWBYc",
    authDomain: "smart-library-d7c5b.firebaseapp.com",
    databaseURL: "https://smart-library-d7c5b.firebaseio.com",
    projectId: "smart-library-d7c5b",
    storageBucket: "smart-library-d7c5b.appspot.com",
    messagingSenderId: "914483470801",
    appId: "1:914483470801:web:24d3fdae6c2d1dce0b00f0",
    measurementId: "G-JW3GS5HEJ1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();