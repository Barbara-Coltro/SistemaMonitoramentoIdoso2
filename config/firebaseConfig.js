// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3DcesgL4OLNqaB4NzK_WCI0Iz-iOmpU4",
  authDomain: "sistemamonitoramento-82b9e.firebaseapp.com",
  projectId: "sistemamonitoramento-82b9e",
  storageBucket: "sistemamonitoramento-82b9e.firebasestorage.app",
  messagingSenderId: "482816731191",
  appId: "1:482816731191:web:e940ded4cc944f885ef7b2",
  measurementId: "G-XDHD4F0P0T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
