// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {getStorage } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlV8ACPYU76j_wkUE5QbbTEIypm2_uYXw",
  authDomain: "memews-app.firebaseapp.com",
  databaseURL: "https://memews-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "memews-app",
  storageBucket: "memews-app.appspot.com",
  messagingSenderId: "164995456352",
  appId: "1:164995456352:web:a2aaf52f2afbcdd1ee5205",
  measurementId: "G-7QJB7B5RXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);