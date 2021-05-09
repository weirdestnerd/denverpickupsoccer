import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4IVtwgW2Q2BhOhNw5QJ7MhBMnr_E5wEA",
  authDomain: "denverpickupsoccer.firebaseapp.com",
  projectId: "denverpickupsoccer",
  storageBucket: "denverpickupsoccer.appspot.com",
  messagingSenderId: "823515802871",
  appId: "1:823515802871:web:2ef79040298f2504e477f2",
  measurementId: "G-1BED8SWYQ2"
};

firebase.initializeApp(firebaseConfig);

const signInUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

const createNewUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

const getCurrentUser = async (callback) => {
  await firebase.auth().onAuthStateChanged(callback);
}

const signOutUser = () => {
  return firebase.auth().signOut()
}

export { signInUser, createNewUser, getCurrentUser, signOutUser }
