import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {ROUTES} from "../../routes/constans";

// Configure Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyDaLak0Yk4kyDxUDYpi8wicw_7oz-_YO8I",
    authDomain: "fir-app-80784.firebaseapp.com",
    databaseURL: "https://fir-app-80784.firebaseio.com",
    projectId: "fir-app-80784",
    storageBucket: "fir-app-80784.appspot.com",
    messagingSenderId: "186719753322",
    appId: "1:186719753322:web:3de556621e902a08a46613",
    measurementId: "G-FSNTVHMTT8"
};

const actionCodeSettings = {
    url: `${window.location.origin}${ROUTES.login}`,
    handleCodeInApp: true,
};

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export {
    uiConfig,
    firebaseApp,
    actionCodeSettings,
};
