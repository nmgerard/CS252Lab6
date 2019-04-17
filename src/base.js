import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC9usPu7Je0uEd-yJwsapgafdD9tqex2h4",
    authDomain: "chatarang-86e88.firebaseapp.com",
    databaseURL: "https://chatarang-86e88.firebaseio.com",
    projectId: "chatarang-86e88",
    storageBucket: "chatarang-86e88.appspot.com",
    messagingSenderId: "673669186530"
  };

  const app = firebase.initializeApp(config)

  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const gitProvider = new firebase.auth.GithubAuthProvider()
  export const fbProvider = new firebase.auth.FacebookAuthProvider()
  export const twitterProvider = new firebase.auth.TwitterAuthProvider()
  
  export const auth = firebase.auth()

  const db = app.database()

  export default Rebase.createClass(db)