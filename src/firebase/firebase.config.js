// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdn11fS2etz9batqch0IT050yEsXgyLFo",
    authDomain: "the-news-dragon-8f9dd.firebaseapp.com",
    projectId: "the-news-dragon-8f9dd",
    storageBucket: "the-news-dragon-8f9dd.appspot.com",
    messagingSenderId: "755553741616",
    appId: "1:755553741616:web:6ffb7dc414098d176536f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;