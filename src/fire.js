import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyAy981HLQEXf4bkKLp7_nmlIc13meP_ro4",
  authDomain: "ahmad-react-app.firebaseapp.com",
  databaseURL: "https://ahmad-react-app.firebaseio.com",
  projectId: "ahmad-react-app",
  storageBucket: "ahmad-react-app.appspot.com",
  messagingSenderId: "102620657431"
};
var fire = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default fire;
