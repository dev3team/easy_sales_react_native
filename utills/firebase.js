import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// // import {setStorageValue, removeStorageValue} from '../utills/localStorage';
// // import {setUserToken} from './axios';

const firebaseConfig = {
    apiKey: "AIzaSyCv8KZlHAqfGDEfUqMADU0SYrzB9rXXD5o",
    authDomain: "test-3709a.firebaseapp.com",
    databaseURL: "https://test-3709a-default-rtdb.firebaseio.com",
    projectId: "test-3709a",
    storageBucket: "test-3709a.appspot.com",
    messagingSenderId: "545953624513",
    appId: "1:545953624513:web:3e7ce140937716477e7f40",
    measurementId: "G-3S6DEY41E6"
  };

// var firebaseConfig = {
//   apiKey: 'AIzaSyCv8KZlHAqfGDEfUqMADU0SYrzB9rXXD5o',
//   authDomain: 'test-3709a.firebaseapp.com',
//   projectId: 'test-3709a',
//   storageBucket: 'test-3709a.appspot.com',
//   messagingSenderId: '545953624513',
//   appId: '1:545953624513:web:3e7ce140937716477e7f40',
//   measurementId: 'G-3S6DEY41E6',
// };
// // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
// console.log(1)

