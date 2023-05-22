// import firebase from 'firebase/compat/app

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyBfYXSq1KV1FDBzYpfc8Q-U_8ulDwooud4",
  authDomain: "leadistro-12rh78.firebaseapp.com",
  databaseURL: "https://leadistro-12rh78-default-rtdb.firebaseio.com",
  projectId: "leadistro-12rh78",
  storageBucket: "leadistro-12rh78.appspot.com",
  messagingSenderId: "976545594978",
  appId: "1:976545594978:web:d9b11f6e1a811f9fb0db3b",
  measurementId: "G-FWCSYQ8EFY",
};

// Init Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
