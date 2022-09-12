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

/**
 *  Sample Output:
 *
 *  ------ Config -----
 * event-info => confetti,teamIconKey,updateVideo,episode,season,teamNameKey,date
 * event-stage => eventStage
 * maintenance-mode => maintenance
 * static => halloffame,featureTours,images,language,particles,toasts
 *
 * ------ Creators -----
 * 5uppps => participating,team,isLive,username,avatar,logo,id,uuid,platform
 * AntVenom => username,id,uuid,avatar,participating,isLive,team,platform,logo
 * Antfrost => team,platform,isLive,participating,id,uuid,username,logo,avatar
 * BadBoyHalo => avatar,team,platform,isLive,participating,id,logo,username,uuid
 * Bitzel => uuid,id,platform,participating,isLive,avatar,logo,username,team
 * Blushi => platform,username,participating,avatar,logo,uuid,team,id,isLive
 * CaptainPuffy => logo,platform,team,id,uuid,username,participating,avatar,isLive
 * CaptainSparklez => avatar,id,team,logo,username,uuid,participating,platform,isLive
 * ConnorEatsPants => avatar,participating,isLive,id,uuid,team,logo,username,platform
 * CrankGameplays => id,username,team,isLive,participating,avatar,logo,platform,uuid
 * DanTDM => id,avatar,logo,uuid,platform,isLive,team,participating,username
 * Dream => platform,id,isLive,avatar,team,username,uuid,participating,logo
 * Drgluon => id,uuid,participating,logo,isLive,username,platform,team,avatar
 * ElainaExe => id,username,logo,avatar,platform,team,isLive,uuid,participating
 * F1NN5TER => team,logo,platform,uuid,id,isLive,username,participating,avatar
 * FoolishG => participating,uuid,isLive,platform,team,username,id,avatar,logo
 * Fundy => isLive,team,id,username,logo,platform,avatar,participating,uuid
 * GeeNelly => username,uuid,logo,avatar,team,id,participating,platform,isLive
 * GeminiTay => username,id,platform,uuid,logo,isLive,participating,team,avatar
 * GeorgeNotFound => platform,avatar,team,id,logo,username,participating,isLive,uuid
 * GizzyGazza => participating,logo,team,uuid,avatar,link,isLive,platform
 * GoodTimeWithScar => avatar,team,uuid,platform,displayOverride,id,participating,username,logo,isLive
 * Grian => participating,platform,avatar,logo,id,isLive,username,uuid,team
 * HBomb94 => platform,id,uuid,avatar,logo,isLive,team,participating,username
 * Illumina => platform,avatar,logo,username,uuid,participating,team,isLive,id
 * InTheLittleWood => team,id,logo,participating,isLive,username,uuid,platform,avatar
 * ItsValkyrae => isLive,avatar,team,displayOverride,uuid,logo,platform,link,participating
 * JackManifoldTV => id,platform,participating,username,logo,team,uuid,avatar,isLive
 * JamesTurner => isLive,id,team,platform,uuid,username,logo,participating,avatar
 * JeromeASF => id,logo,team,participating,uuid,platform,isLive,avatar,username
 * KaraCorvus => participating,username,platform,avatar,logo,team,id,uuid,isLive
 * KarlJacobs => username,logo,uuid,id,participating,avatar,isLive,team,platform
 * King_Burren => platform,participating,uuid,username,team,isLive,logo,avatar,id
 * Kreekcraft => username,isLive,avatar,team,participating,platform,id,logo,uuid
 * Krinios => isLive,uuid,participating,platform,avatar,logo,username,team,id
 * Krtzy => avatar,participating,id,platform,uuid,team,isLive,logo,username
 * KryticZeuZ => username,logo,platform,isLive,participating,team,avatar,id,uuid
 * LDShadowLady => username,platform,uuid,isLive,id,logo,participating,avatar,team
 * LazarCodeLazar => uuid,platform,participating,link,displayOverride,isLive,team,avatar,logo
 * Magistrex => avatar,participating,username,team,isLive,uuid,platform,logo,id
 * Mefs => avatar,uuid,platform,participating,username,isLive,logo,id,team
 * Michaelmcchill => avatar,id,isLive,team,uuid,participating,logo,username,platform
 * MiniMuka => avatar,uuid,logo,id,team,username,platform,participating,isLive
 * Nihachu => uuid,id,avatar,participating,platform,isLive,logo,team,username
 * Noxite => uuid,isLive,displayOverride,logo,participating,avatar,id,username,team,platform
 * OrionSound => avatar,team,participating,logo,id,platform,isLive,uuid,username
 * PearlescentMoon => id,team,isLive,username,participating,logo,avatar,platform,uuid
 * PeteZahHutt => team,avatar,platform,participating,username,id,isLive,logo,uuid
 * Ph1LzA => id,logo,avatar,uuid,isLive,username,team,participating,platform
 * Ponk => logo,uuid,platform,participating,id,isLive,team,username,avatar
 * Punz => uuid,logo,username,platform,avatar,isLive,id,team,participating
 * Purpled => platform,team,isLive,username,participating,avatar,id,logo,uuid
 * Quackity => id,username,team,platform,participating,logo,uuid,isLive,avatar
 * Quig => team,participating,logo,avatar,username,isLive,platform,id,uuid
 * Ranboo => uuid,username,avatar,id,participating,platform,team,isLive,logo
 * RedVelvetCake => platform,uuid,avatar,team,id,isLive,participating,logo,username
 * Renthedog => logo,uuid,isLive,participating,avatar,team,id,username,platform
 * SB737 => uuid,isLive,id,avatar,platform,participating,logo,username,team
 * Sapnap => isLive,participating,uuid,id,username,logo,avatar,team,platform
 * Seapeekay => platform,uuid,id,isLive,logo,participating,team,avatar,username
 * ShubbleYT => platform,avatar,logo,participating,username,id,team,isLive,uuid
 * Skeppy => link,participating,platform,isLive,avatar,logo,team,uuid
 * Slimecicle => participating,uuid,isLive,id,username,logo,team,avatar,platform
 * Smajor1995 => isLive,uuid,platform,username,participating,team,id,logo,avatar
 * Smallishbeans => logo,id,uuid,username,avatar,platform,team,isLive,participating
 * Sneegsnag => avatar,id,username,logo,participating,uuid,platform,team,isLive
 * Snifferish => avatar,team,isLive,username,id,logo,uuid,participating,platform
 * SolidarityGaming => platform,team,id,uuid,avatar,isLive,logo,username,participating
 * Spifeey => platform,id,displayOverride,uuid,username,logo,isLive,team,participating,avatar
 * Spifey => participating,logo,platform,username,team,uuid,avatar,id,isLive
 * Sykkuno => link,logo,participating,uuid,platform,isLive,avatar,team
 * TBNRfrags => link,platform,participating,logo,isLive,avatar,uuid,team
 * TapL => team,id,avatar,participating,logo,isLive,username,platform,uuid
 * TeanaKitten => uuid,id,team,displayOverride,platform,isLive,participating,avatar,logo,username
 * Technoblade => isLive,platform,team,avatar,username,id,uuid,logo,participating
 * The_Eret => logo,isLive,avatar,participating,id,team,uuid,username,platform
 * TommyInnit => uuid,logo,username,team,id,participating,platform,avatar,isLive
 * Tubbo_ => uuid,id,logo,username,platform,isLive,participating,team,avatar
 * Vikkstar123 => platform,participating,logo,isLive,uuid,id,avatar,username,team
 * Vixella => isLive,avatar,platform,id,participating,username,team,uuid,logo
 * WilburSoot => uuid,username,id,participating,logo,platform,isLive,team,avatar
 * Wisp => username,uuid,logo,team,isLive,id,platform,avatar,participating
 * aimsey => avatar,id,participating,isLive,logo,platform,uuid,team,username
 * awesamdude => logo,team,username,avatar,isLive,platform,uuid,id,participating
 * cubfan135 => id,platform,logo,team,username,avatar,participating,isLive,uuid
 * fWhip => participating,uuid,avatar,logo,isLive,link,platform,team
 * falsesymmetry => platform,isLive,team,avatar,username,uuid,logo,id,participating
 * fruitberries => uuid,isLive,platform,logo,team,username,id,avatar,participating
 * hannahxxrose => logo,avatar,uuid,username,isLive,id,participating,team,platform
 * jojosolos => avatar,id,platform,username,uuid,isLive,logo,team,participating
 * katherineeliz => team,avatar,logo,username,uuid,platform,isLive,id,participating
 * ludwigahgren => uuid,logo,participating,isLive,avatar,platform,link,team
 * ryguyrocky => participating,avatar,link,isLive,logo,uuid,team,platform
 * septicbooper => participating,id,avatar,uuid,team,platform,displayOverride,logo,isLive,username
 * sylvee_ => id,avatar,logo,team,isLive,platform,username,participating,uuid
 * vGumiho => username,id,platform,team,isLive,avatar,logo,participating,uuid
 *
 * ------ Live -----
 * dodgebolt => placeholder
 * dome => placeholder
 * game => game
 * game-information => round,totalGameAmount,multiplier,map,valid,maxRounds,currentIndex
 * hub-timer => placeholder
 * post-event => game,eventPlacements,eventScores,dodgeboltData,gamePlacements,individualScores,gameScores
 * timer => placeholder
 * toast-notify => title,message,display
 * twitter => url
 *
 * ------ Teams -----
 * event-placements => YELLOW,ORANGE,LIME,BLUE,CYAN,PINK,PURPLE,AQUA,RED,GREEN
 * event-score => YELLOW,GREEN,CYAN,PURPLE,ORANGE,AQUA,LIME,PINK,BLUE,RED
 * game-placements => RED,YELLOW,LIME,CYAN,BLUE,PURPLE,GREEN,AQUA,PINK,ORANGE
 * game-score => YELLOW,AQUA,PINK,LIME,CYAN,PURPLE,RED,ORANGE,GREEN,BLUE
 * individual-score => WilburSoot,Ranboo,Seapeekay,Tubbo_,CaptainPuffy,Krtzy,GeorgeNotFound,sylvee_,jojosolos,CaptainSparklez,Sapnap,Smajor1995,hannahxxrose,Krinios,Ph1LzA,aimsey,Purpled,OrionSound,PearlescentMoon,TommyInnit,5uppps,InTheLittleWood,TapL,JackManifoldTV,Skeppy,fruitberries,GeminiTay,Michaelmcchill,AntVenom,ShubbleYT,ryguyrocky,GoodTimeWithScar,Smallishbeans,Illumina,BadBoyHalo,Dream,FoolishG,cubfan135,GeeNelly,HBomb94
 *
 */


// console.log(querySnapshot_1.data())

// main-1b25edc7.9952c7b5.js
