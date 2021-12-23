import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import configuration from "./configuration";

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(configuration);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
