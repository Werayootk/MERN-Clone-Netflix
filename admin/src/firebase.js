import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEFxG9SjltmaX23kA6ERFFTMUrvUeYtm8",
  authDomain: "mern-netflix-c8cd3.firebaseapp.com",
  projectId: "mern-netflix-c8cd3",
  storageBucket: "mern-netflix-c8cd3.appspot.com",
  messagingSenderId: "672281970045",
  appId: "1:672281970045:web:2ca7957f4d2d0cd5d8b814",
  measurementId: "G-ERL6QG6739"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;