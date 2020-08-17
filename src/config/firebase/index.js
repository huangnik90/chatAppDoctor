import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyD_2omhuuR_07DuH6d6pwJdRTy43-87nxw",
    authDomain: "mychatdoctor.firebaseapp.com",
    databaseURL: "https://mychatdoctor.firebaseio.com",
    projectId: "mychatdoctor",
    storageBucket: "mychatdoctor.appspot.com",
    messagingSenderId: "177643361139",
    appId: "1:177643361139:web:115bb41c50a3bf1d20eb06",
    measurementId: "G-C6WNEMXT0X"
})

const Firebase = firebase;

export default Firebase