import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBR2UPR2JwtuaA8kWmH7yMhHph31VxdXRQ",
    authDomain: "reread-c9c7d.firebaseapp.com",
    projectId: "reread-c9c7d",
    storageBucket: "reread-c9c7d.firebasestorage.app",
    messagingSenderId: "702275631174",
    appId: "1:702275631174:web:a1d2dbc477b57bba857247",
    measurementId: "G-QC4P7V1L0Q"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
