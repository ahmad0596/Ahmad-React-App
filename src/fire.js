import firebase from 'firebase'
var config = {
  apiKey: "*******",
  authDomain: "*******.firebaseapp.com",
  databaseURL: "https://*******.firebaseio.com",
  projectId: "*******",
  storageBucket: "*******.appspot.com",
  messagingSenderId: "*******"
};
var fire = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default fire;
