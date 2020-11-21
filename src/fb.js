import firebase from 'firebase/app';
import 'firebase/firestore';

// firebase configuration keys
const firebaseConfig = {
  apiKey: 'AIzaSyDZu5N0JajUjJ6CJFpjXX8RS_J5JkQ0lSU',
  authDomain: 'project-manager-c0606.firebaseapp.com',
  databaseURL: 'https://project-manager-c0606.firebaseio.com',
  projectId: 'project-manager-c0606',
  storageBucket: 'project-manager-c0606.appspot.com',
  messagingSenderId: '91269753233',
  appId: '1:91269753233:web:6862f7933de3c647d89230'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/**
 * Allow timestamps
 */
db.settings({ timestampsInSnapshots: true });

export default db;
