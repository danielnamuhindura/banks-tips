import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5yPGFoBCh9ptFerrQIjsZyR6Vm1PW_Ko",
  authDomain: "benkstips.firebaseapp.com",
  databaseURL: "https://benkstips-default-rtdb.firebaseio.com",
  projectId: "benkstips",
  storageBucket: "benkstips.firebasestorage.app",
  messagingSenderId: "581515723508",
  appId: "1:581515723508:web:0547a6761dfb49fc8814a1",
  measurementId: "G-1HD02ZTR78"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);