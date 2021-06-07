var firebaseConfig = {
  apiKey: "AIzaSyCrgezHL27x5IhbU15pNdMsgyvS052KjyA",
  authDomain: "directorylist-app.firebaseapp.com",
  projectId: "directorylist-app",
  storageBucket: "directorylist-app.appspot.com",
  messagingSenderId: "133108210",
  appId: "1:133108210:web:edac2be2aa82d5ce071b6b",
  measurementId: "G-F3MKCVV3RN",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshot: true });
