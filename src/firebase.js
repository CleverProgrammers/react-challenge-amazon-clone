import firebase from "firebase";

const firebaseConfig = {
  //enter firebase config
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
