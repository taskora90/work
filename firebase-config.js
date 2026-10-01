// Taskora Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBITIN70jLaM8XCXhCjYKbg2uhdG6yFOS4",
  authDomain: "taskora-b2b29.firebaseapp.com",
  projectId: "taskora-b2b29",
  storageBucket: "taskora-b2b29.firebasestorage.app",
  messagingSenderId: "376297360134",
  appId: "1:376297360134:web:ba6ab17055df42a8e36c87",
  measurementId: "G-9803M7DPM5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
