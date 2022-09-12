import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore} from "firebase/firestore";

const firebaseConfig = { // Production Credentials
    apiKey: "AIzaSyBJoHjVU-L0FiafX_qOtmeG368QXw22lNw",
    authDomain: "mcc-event-web-app.firebaseapp.com",
    databaseURL: "https://mcc-event-web-app.firebaseio.com",
    projectId: "mcc-event-web-app",
    storageBucket: "mcc-event-web-app.appspot.com",
    messagingSenderId: "799033071869",
    appId: "1:799033071869:web:9026a06a4212bc64160694",
    measurementId: "G-FYG6WJKFPT"
}

// const firebaseConfig = { // Dev Credentials
//     apiKey: "AIzaSyCMIHL-TeolJWT6XbkO_dDidXUyzgufE04",
//     authDomain: "mcc-event-web-app---dev.firebaseapp.com",
//     projectId: "mcc-event-web-app---dev",
//     storageBucket: "mcc-event-web-app---dev.appspot.com",
//     messagingSenderId: "1052118037185",
//     appId: "1:1052118037185:web:a65500a98e653578659a40",
//     measurementId: "G-8GNXX6DD5F"
// }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('\n------ Config -----')
const querySnapshot = await getDocs(collection(db, "config"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${Object.keys(doc.data())}`);
});

console.log('\n------ Creators -----')
const querySnapshot2 = await getDocs(collection(db, "creators"));
querySnapshot2.forEach((doc) => {
    console.log(`${doc.id} => ${Object.keys(doc.data())}`);
});

console.log('\n------ Live -----')
const querySnapshot3 = await getDocs(collection(db, "live"));
querySnapshot3.forEach((doc) => {
    console.log(`${doc.id} => ${Object.keys(doc.data())}`);
});

console.log('\n------ Teams -----')
const querySnapshot4 = await getDocs(collection(db, "teams"));
querySnapshot4.forEach((doc) => {
    console.log(`${doc.id} => ${Object.keys(doc.data())}`);
});


// console.log(querySnapshot_1.data())

// main-1b25edc7.9952c7b5.js
