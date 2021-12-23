import * as firebase from "firebase";
import configuration from "./configuration";

firebase.initializeApp(configuration);

firebase.firestore();

export default firebase;
