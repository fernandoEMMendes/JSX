import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCMRUEF3JZgNSEherIlK7uXNSBBkKLPvxU",
  authDomain: "projetomotoca-b8cd2.firebaseapp.com",
  databaseURL: "https://projetomotoca-b8cd2-default-rtdb.firebaseio.com",
  projectId: "projetomotoca-b8cd2",
  storageBucket: "projetomotoca-b8cd2.appspot.com",
  messagingSenderId: "816766006663",
  appId: "1:816766006663:web:f5f19037443a30345c0f22"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase