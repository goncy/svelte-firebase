import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

import {FIREBASE_CREDENTIALS} from "../env"

firebase.initializeApp({
  apiKey: FIREBASE_CREDENTIALS.API_KEY,
  authDomain: FIREBASE_CREDENTIALS.AUTH_DOMAIN,
  databaseUrl: FIREBASE_CREDENTIALS.DATABASE_URL,
  projectId: FIREBASE_CREDENTIALS.PROJECT_ID,
  storageBucket: FIREBASE_CREDENTIALS.STORAGE_BUCKET,
  messagingSenderId: FIREBASE_CREDENTIALS.MESSAGING_SENDER_ID,
  appId: FIREBASE_CREDENTIALS.APP_ID,
});

const database = firebase.firestore();
const auth = firebase.auth();
const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export { database, auth, providers };
export default firebase;
