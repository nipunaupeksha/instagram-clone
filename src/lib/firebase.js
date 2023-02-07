import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyCtNOZyk5Myqeox4Ye-QsQVYE29G9PoPTA",
    authDomain: "instagram-clone-f24a1.firebaseapp.com",
    projectId: "instagram-clone-f24a1",
    storageBucket: "instagram-clone-f24a1.appspot.com",
    messagingSenderId: "1027282999877",
    appId: "1:1027282999877:web:ebb4a47d5928733f34a12c",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// run seed.js file once.
// seedDatabase(firebase);

export { firebase, FieldValue };
