import auth from '@react-native-firebase/auth';

// import {setStorageValue, removeStorageValue} from '../utills/localStorage';
// import {setUserToken} from './axios';

// const firebaseConfig = {
//     apiKey: "AIzaSyCv8KZlHAqfGDEfUqMADU0SYrzB9rXXD5o",
//     authDomain: "test-3709a.firebaseapp.com",
//     databaseURL: "https://test-3709a-default-rtdb.firebaseio.com",
//     projectId: "test-3709a",
//     storageBucket: "test-3709a.appspot.com",
//     messagingSenderId: "545953624513",
//     appId: "1:545953624513:web:3e7ce140937716477e7f40",
//     measurementId: "G-3S6DEY41E6"
//   };

// var firebaseConfig = {
//   apiKey: 'AIzaSyCv8KZlHAqfGDEfUqMADU0SYrzB9rXXD5o',
//   authDomain: 'test-3709a.firebaseapp.com',
//   projectId: 'test-3709a',
//   storageBucket: 'test-3709a.appspot.com',
//   messagingSenderId: '545953624513',
//   appId: '1:545953624513:web:3e7ce140937716477e7f40',
//   measurementId: 'G-3S6DEY41E6',
// };
// Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }
// console.log(1)

export const login = async (email, password) => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
    //   console.log('Username: ', user.user.displayName); // show user params in firebase
    //   const {user: userInfo} = user;
    //   setUserToken(userInfo.uid, userInfo.email, token);
      return {message: 'Login', error: false};
    } catch (error) {
      console.log('error login', error);
      return {message: error.message, error: true};
    }
  };

export const register = async (email, password, username, token) => {
    try {
        const user = await auth().createUserWithEmailAndPassword(email, password);
        //   const profile = firebase.auth().currentUser;
        //   profile.updateProfile({
        //     displayName: username,
        //   });
        console.log('register', user);
        //   const {
        //     user: {uid, email: mail},
        //   } = user;

        //   setUserToken(uid, mail, token);
        await setStorageValue('auth', true);
        return {message: 'User create!'};
        } catch (error) {
        console.log('error register', error);
        return {message: 'User is already exist'};
    }
};

export const out = async () => {
    try {
        await auth().signOut();
        await setStorageValue('auth', false);
        return {message: 'Logout'};
    } catch (error) {
        console.log('error', error);
    }
};