
//import * as firebase from 'firebase'
import firebase from "@firebase/app"
import "@firebase/auth"
import "@firebase/database"
import firestore from "firebase/firestore"

  var config = {
    apiKey : "AIzaSyAgfQgbjgobbS5RZ6lOB5vxBCoR-x661aU",
    authDomain: "structural-rn.firebaseapp.com",
    databaseURL: "https://structural-rn.firebaseio.com",
    projectId: "structural-rn",
    storageBucket: "structural-rn.appspot.com",
    messagingSenderId: "389774152318"
  };
  firebase.initializeApp(config);

  export default firebase