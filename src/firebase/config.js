import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEE3v498aLh9-2rWNGDFjlXGyvp5uJuCM",
  authDomain: "miniblog-b6573.firebaseapp.com",
  projectId: "miniblog-b6573",
  storageBucket: "miniblog-b6573.appspot.com",
  messagingSenderId: "129529395905",
  appId: "1:129529395905:web:cac7013dbdfb755b45f240"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore (app);

export { db, app };