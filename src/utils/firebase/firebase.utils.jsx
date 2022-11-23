import { initializeApp } from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBtO5Uer-mfpFntxPCbhPZ9ZyG9Kgtw4cE",
    authDomain: "react-webshop-12d68.firebaseapp.com",
    projectId: "react-webshop-12d68",
    storageBucket: "react-webshop-12d68.appspot.com",
    messagingSenderId: "384672012827",
    appId: "1:384672012827:web:7e3235e39774da22d0b6be"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_acount"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);