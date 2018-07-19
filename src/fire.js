import firebase from 'firebase'
var config = {
  apiKey: "*********",
  authDomain: "***********",
  databaseURL: "**********",
  projectId: "ahmad-react-app",
  storageBucket: "*************",
  messagingSenderId: "************"
};
var fire = firebase.initializeApp(config);
export default fire;
