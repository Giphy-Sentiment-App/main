// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA9nxkYPJsTEZ1FMaXLOKKEy3NhGfhnRj8",
  authDomain: "giphy-sentiment-a1d18.firebaseapp.com",
  databaseURL: "https://giphy-sentiment-a1d18-default-rtdb.firebaseio.com",
  projectId: "giphy-sentiment-a1d18",
  storageBucket: "giphy-sentiment-a1d18.appspot.com",
  messagingSenderId: "110837652044",
  appId: "1:110837652044:web:5a58334629085bb3b472e9"

};


// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

export default firebase;