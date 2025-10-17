const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth');

// Centralized Firebase initialization for server-side usage
const firebaseConfig = {
  apiKey: "",
  authDomain: "blog-27d94.firebaseapp.com",
  projectId: "blog-27d94",
  storageBucket: "blog-27d94.firebasestorage.app",
  messagingSenderId: "758607613236",
  appId: "1:758607613236:web:4a73ce8a8ead1664722961",
  measurementId: "G-9KWGXGVL92",
};

// Initialize app once and export instances
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

module.exports = { app, db, auth };

