import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDOd2DspfwaMyuOcqY21cEAqYwSPyhF5DI',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'diazone-a695e.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'diazone-a695e',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'diazone-a695e.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '609942252503',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:609942252503:web:80ca08f9db8eb96f113992',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-BKC4T9SYPV'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

let analyticsInstance: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  try {
    analyticsInstance = getAnalytics(app);
  } catch (error) {
    console.warn('Firebase analytics not available in this environment.', error);
  }
}

export const analytics = analyticsInstance;

// Auth providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// Configure providers
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

facebookProvider.setCustomParameters({
  display: 'popup'
});

export default app;

// Database Types
export interface PatientProfile {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  height?: number;
  weight?: number;
  diabetesType: string;
  diagnosisYear: number;
  currentMedications?: string;
  hba1c?: number;
  lastHbA1cDate?: string;
  fastingGlucose?: number;
  postMealGlucose?: number;
  targetGlucoseMin?: number;
  targetGlucoseMax?: number;
  bloodPressureSystolic?: number;
  bloodPressureDiastolic?: number;
  cholesterol?: number;
  allergies?: string;
  complications?: string;
  familyHistory?: string;
  dietaryRestrictions?: string;
  exerciseLevel?: string;
  exerciseFrequency?: string;
  smokingStatus?: string;
  alcoholConsumption?: string;
  sleepHours?: number;
  stressLevel?: string;
  healthGoals?: string;
  cuisinePreferences?: string;
  budgetRange?: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  emergencyContactEmail?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  glycemicIndex: number;
  carbs: number;
  fiber: number;
  protein: number;
  fat?: number;
  calories?: number;
  allergens: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  createdAt?: Date;
}

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  createdAt?: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: any[];
  total: number;
  status: string;
  shippingAddress: any;
  createdAt?: Date;
}