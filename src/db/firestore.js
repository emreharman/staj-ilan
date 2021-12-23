import * as firebase from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const configuration = {
  apiKey: "AIzaSyCYlibwzGF9xq9Hn3MjoJ4KI7Cpu1QWDjw",
  authDomain: "staj-ilan.firebaseapp.com",
  projectId: "staj-ilan",
  storageBucket: "staj-ilan.appspot.com",
  messagingSenderId: "1007442884292",
  appId: "1:1007442884292:web:0156f440e45b4ce9fbbb91",
  measurementId: "G-EG82RJN4S7",
};

const app = firebase.initializeApp(configuration);

// const configuration = {
//   apiKey: "AIzaSyCYlibwzGF9xq9Hn3MjoJ4KI7Cpu1QWDjw",
//   authDomain: "staj-ilan.firebaseapp.com",
//   projectId: "staj-ilan",
//   storageBucket: "staj-ilan.appspot.com",
//   messagingSenderId: "1007442884292",
//   appId: "1:1007442884292:web:0156f440e45b4ce9fbbb91",
//   measurementId: "G-EG82RJN4S7",
// };

//const app = firebase.initializeApp(configuration);
//export const fireDB = firebase.firestore();
const db = getFirestore(app);
export default db;
/////////////77********************************////////////////////7
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCYlibwzGF9xq9Hn3MjoJ4KI7Cpu1QWDjw",
//   authDomain: "staj-ilan.firebaseapp.com",
//   projectId: "staj-ilan",
//   storageBucket: "staj-ilan.appspot.com",
//   messagingSenderId: "1007442884292",
//   appId: "1:1007442884292:web:0156f440e45b4ce9fbbb91",
//   measurementId: "G-EG82RJN4S7",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;
///////////////////////////////////////////////////////////////////////////////////7
// import { initializeApp } from "firebase/app";

// // Optionally import the services that you want to use
// //import {...} from "firebase/auth";
// //import {...} from "firebase/database";
// //import {...} from "firebase/firestore";
// //import {...} from "firebase/functions";
// //import {...} from "firebase/storage";

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCYlibwzGF9xq9Hn3MjoJ4KI7Cpu1QWDjw",
//   authDomain: "staj-ilan.firebaseapp.com",
//   projectId: "staj-ilan",
//   storageBucket: "staj-ilan.appspot.com",
//   messagingSenderId: "1007442884292",
//   appId: "1:1007442884292:web:0156f440e45b4ce9fbbb91",
//   measurementId: "G-EG82RJN4S7",
// };

// const app = initializeApp(firebaseConfig);
// export default app;
