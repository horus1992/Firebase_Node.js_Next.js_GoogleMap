// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyANMce1GtRQoTvkfesXbFQM3rbFzIwht6o",
    authDomain: "policemap-2c64c.firebaseapp.com",
    projectId: "policemap-2c64c",
    storageBucket: "policemap-2c64c.appspot.com",
    messagingSenderId: "248888375683",
    appId: "1:248888375683:web:f43a4830db9f34641edeb6",
    measurementId: "G-Q4XPMR5F1M"
  };

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;