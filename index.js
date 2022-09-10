import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, doc, getDoc} from "firebase/firestore";

// const x = await fetch("https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel?database=projects%2Fmcc-event-web-app%2Fdatabases%2F(default)&VER=8&RID=54522&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F%20fire%2F9.7.0%0D%0AContent-Type%3Atext%2Fplain%0D%0AX-Firebase-GMPID%3A1%3A799033071869%3Aweb%3A9026a06a4212bc64160694%0D%0A&zx=cftiksn4l505&t=1", {
//     "headers": {
//         "accept": "*/*",
//         "accept-language": "en-US,en;q=0.9",
//         "cache-control": "no-cache",
//         "content-type": "application/x-www-form-urlencoded",
//         "pragma": "no-cache",
//         "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"macOS\"",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "cross-site",
//         "Referer": "https://mcc.live/",
//         "Referrer-Policy": "strict-origin-when-cross-origin"
//     },
//     "body": "count=18&ofs=0&req0___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Fconfig%2Fstatic%22%5D%7D%2C%22targetId%22%3A2%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req1___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Fconfig%2Fevent-stage%22%5D%7D%2C%22targetId%22%3A4%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req2___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Fconfig%2Fevent-info%22%5D%7D%2C%22targetId%22%3A6%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req3___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22query%22%3A%7B%22structuredQuery%22%3A%7B%22from%22%3A%5B%7B%22collectionId%22%3A%22creators%22%7D%5D%2C%22orderBy%22%3A%5B%7B%22field%22%3A%7B%22fieldPath%22%3A%22__name__%22%7D%2C%22direction%22%3A%22ASCENDING%22%7D%5D%7D%2C%22parent%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%22%7D%2C%22targetId%22%3A8%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req4___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Fconfig%2Fmaintenance-mode%22%5D%7D%2C%22targetId%22%3A10%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req5___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Flive%2Fgame%22%5D%7D%2C%22targetId%22%3A12%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req6___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Flive%2Fgame-information%22%5D%7D%2C%22targetId%22%3A14%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req7___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Flive%2Ftimer%22%5D%7D%2C%22targetId%22%3A16%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req8___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Flive%2Fhub-timer%22%5D%7D%2C%22targetId%22%3A18%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req9___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Fteams%2Fevent-score%22%5D%7D%2C%22targetId%22%3A20%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req10___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Fteams%2Fevent-placements%22%5D%7D%2C%22targetId%22%3A22%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req11___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Fteams%2Fgame-score%22%5D%7D%2C%22targetId%22%3A24%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req12___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Fteams%2Fgame-placements%22%5D%7D%2C%22targetId%22%3A26%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req13___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Fteams%2Findividual-score%22%5D%7D%2C%22targetId%22%3A28%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req14___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Flive%2Fdodgebolt%22%5D%7D%2C%22targetId%22%3A30%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req15___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Flive%2Ftoast-notify%22%5D%7D%2C%22targetId%22%3A32%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req16___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Flive%2Ftwitter%22%5D%7D%2C%22targetId%22%3A34%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D&req17___data__=%7B%22database%22%3A%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22documents%22%3A%7B%22documents%22%3A%5B%22projects%2Fmcc-event-web-app%2Fdatabases%2F(default)%2Fdocuments%2Flive%2Fpost-event%22%5D%7D%2C%22targetId%22%3A36%2C%22resumeToken%22%3A%22CgkImcWA9M2J%2BgI%3D%22%7D%7D",
//     "method": "POST"
// });
//
// console.log(await x.text())

const firebaseConfig = {
    apiKey: "AIzaSyBJoHjVU-L0FiafX_qOtmeG368QXw22lNw",
    authDomain: "mcc-event-web-app.firebaseapp.com",
    databaseURL: "https://mcc-event-web-app.firebaseio.com",
    projectId: "mcc-event-web-app",
    storageBucket: "mcc-event-web-app.appspot.com",
    messagingSenderId: "799033071869",
    appId: "1:799033071869:web:9026a06a4212bc64160694",
    measurementId: "G-FYG6WJKFPT"
}

// const firebaseConfig = {
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
//
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
//
// console.log('\n------ Current Participants -----')
// const creators = await getDocs(collection(db, "creators"));
// const participatingCreators = creators.docs.filter(doc => doc.data()['participating'])
// participatingCreators.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()['team']}`);
// })

const querySnapshot_1 = await getDoc(doc(db, "creators", "SolidarityGaming"));
console.log(querySnapshot_1.data())

// main-1b25edc7.9952c7b5.js
