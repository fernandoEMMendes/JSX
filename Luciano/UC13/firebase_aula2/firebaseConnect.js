import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDeu1-LecJqfnQRQwyLYA1ZyiTYvbkPYho",
    authDomain: "aulasenac-3f085.firebaseapp.com",
    databaseURL: "https://aulasenac-3f085-default-rtdb.firebaseio.com",
    projectId: "aulasenac-3f085",
    storageBucket: "aulasenac-3f085.appspot.com",
    messagingSenderId: "662899992715",
    appId: "1:662899992715:web:344bff63456d403b574c8e",
    measurementId: "G-291S3DJMPD"
  };

if (firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase