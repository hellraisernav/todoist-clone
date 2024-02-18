import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDzXfvPOEGJmFp0caU8493ayZPnZb7SX4g",

    authDomain: "todist-clone-bd0f8.firebaseapp.com",

    databaseURL: "https://todist-clone-bd0f8-default-rtdb.firebaseio.com",

    projectId: "todist-clone-bd0f8",

    storageBucket: "todist-clone-bd0f8.appspot.com",

    messagingSenderId: "875817380829",

    appId: "1:875817380829:web:3c84efe591b06058d6a434"
});

export { firebaseConfig as firebase };
