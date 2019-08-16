import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
  apiKey: "AIzaSyBQ6fv9F2xR22mlNcLnFBV5ZIUz-bG0770",
  authDomain: "data-survey-app.firebaseapp.com",
  databaseURL: "https://data-survey-app.firebaseio.com",
  projectId: "data-survey-app",
  storageBucket: "data-survey-app.appspot.com",
  messagingSenderId: "978402816363",
  appId: "1:978402816363:web:a78c8935cf14872b"
};

const app = firebase.initializeApp(firebaseConfig);

export default app.firestore()