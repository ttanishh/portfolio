import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
// Use environment variables for production deployment
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCa7ON1sWlCi8rtxEalnhVXtQYnh68oUEU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "tanishp-23ee8.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "tanishp-23ee8",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "tanishp-23ee8.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "268454063313",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:268454063313:web:48e6b509d173e0472da9f0",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-0KM0CVG2FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app; 