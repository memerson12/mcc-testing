import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore, doc, getDoc} from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const eventInfo = (await getDoc(doc(db, "config", "event-info"))).data();
const allTeamNames = JSON.parse((await getDoc(doc(db, "config", "static"))).data()['language']);
const teamNames = allTeamNames[eventInfo['teamNameKey']];
const data = {
    event: `mcc${eventInfo['episode']}`,
    teams: {},
    twitchUsers: [],
    youtubeUsers: {}
};
const creators = await getDocs(collection(db, "creators"));
creators.forEach((creatorDoc) => {
    const creator = creatorDoc.data()
    if (creator['participating']) {
        const username = creator['username']
        const teamName = teamNames[creator['team']];
        data['teams'][teamName] ? data['teams'][teamName].push(username) : data['teams'][teamName] = [username]
        if(creator['platform'] === 'youtube') {
            data['youtubeUsers'][username] = [creator['id'], 0];
        } else {
            data['twitchUsers'].push(username);
        }
    }
})

console.log(data)

let sampleOutput = {
    event: 'mcc20',
    teams: {
        "Red Rabbits": ["BadBoyHalo", "Dream", "GeorgeNotFound", "Sapnap"],
    },
    twitchUsers: [
        "BadBoyHalo",
        "GeorgeNotFound",
        "Sapnap",
    ],
    youtubeUsers: {
        "Dream": ["UCTkXRDQl0luXxVQrRQvWS6w", 0]
    }
}

// main-1b25edc7.9952c7b5.js
