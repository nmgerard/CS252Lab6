import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA_pZ0bMZ--ioBAt8W3vcO4NsY7d6kmPxg",
  authDomain: "wetalk-e5ec9.firebaseapp.com",
  databaseURL: "https://wetalk-e5ec9.firebaseio.com",
  projectId: "wetalk-e5ec9",
  storageBucket: "wetalk-e5ec9.appspot.com",
  messagingSenderId: "643618144693"
};
const app = firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const gitProvider = new firebase.auth.GithubAuthProvider()
export const fbProvider = new firebase.auth.FacebookAuthProvider()
export const twitterProvider = new firebase.auth.TwitterAuthProvider()
export const auth = firebase.auth()

const db = app.database()

export default Rebase.createClass(db)
