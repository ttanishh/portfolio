import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase configuration
// Replace these with your actual Firebase project credentials
// You can also use environment variables: import.meta.env.VITE_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: "AIzaSyCa7ON1sWlCi8rtxEalnhVXtQYnh68oUEU",
  authDomain: "tanishp-23ee8.firebaseapp.com",
  projectId: "tanishp-23ee8",
  storageBucket: "tanishp-23ee8.firebasestorage.app",
  messagingSenderId: "268454063313",
  appId: "1:268454063313:web:48e6b509d173e0472da9f0",
  measurementId: "G-0KM0CVG2FT"
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