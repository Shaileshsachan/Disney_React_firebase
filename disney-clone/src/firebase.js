const firebaseConfig = {
  apiKey: "AIzaSyCi62nqZb2hpBI3giXXNh_EO9k1l-3XWLE",
  authDomain: "disney-plus-5750d.firebaseapp.com",
  projectId: "disney-plus-5750d",
  storageBucket: "disney-plus-5750d.appspot.com",
  messagingSenderId: "703684504598",
  appId: "1:703684504598:web:b4ad22b7eb5fca44e81937",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
