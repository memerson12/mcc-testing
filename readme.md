# MC Championship Firestore Database Exploration

In looking through the [mcc.live](https://mcc.live) site, I discovered that the Noxcrew were using a Firebase Firestore 
database to handle the event data. To find all the data I have been able to find in the database take a look at the 
`testing.js` file. In the `index.js` file, I have put together a small script to gather the data used by 
[fishfei137](https://github.com/fishfei137/MCC-Viewership) in their MCC stats. An example output of this file can be seen
below.

```json
{
  "event": "mcc25",
  "teams": {
    "Orange Ocelots": [
      "5up",
      "velvetiscake",
      "aimsey",
      "hannahxxrose"
    ],
    "Lime Llamas": [
      "AntVenom",
      "captainsparklez",
      "petezahhutt",
      "SolidarityGaming"
    ],
    "Yellow Yaks": [
      "Antfrost",
      "blushi",
      "punz",
      "shubbleyt"
    ],
    "Blue Bats": [
      "elainaexe",
      "illumina1337",
      "PearlescentMoon",
      "falsesymmetry"
    ],
    "Red Rabbits": [
      "foolish_gamers",
      "dropsbyponk",
      "sapnap",
      "vgumiho"
    ],
    "Green Geckos": [
      "goodtimeswithscar",
      "Seapeekay",
      "SmallishBeans",
      "jojosolos"
    ],
    "Pink Parrots": [
      "Xelqua",
      "philza",
      "Smajor",
      "wilbursoot"
    ],
    "Cyan Coyotes": [
      "hbomb94",
      "karacorvus",
      "kryticzeuz",
      "tubbo"
    ],
    "Aqua Axolotls": [
      "JackManifoldTV",
      "purpled",
      "RanbooLive",
      "snifferish"
    ],
    "Spectators": [
      "thenoxcrew"
    ],
    "Purple Pandas": [
      "eret",
      "Wisp",
      "awesamdude",
      "fruitberries"
    ]
  },
  "twitchUsers": [
    "5up",
    "AntVenom",
    "Antfrost",
    "blushi",
    "captainsparklez",
    "elainaexe",
    "foolish_gamers",
    "goodtimeswithscar",
    "hbomb94",
    "illumina1337",
    "JackManifoldTV",
    "karacorvus",
    "kryticzeuz",
    "thenoxcrew",
    "PearlescentMoon",
    "petezahhutt",
    "philza",
    "dropsbyponk",
    "punz",
    "purpled",
    "RanbooLive",
    "velvetiscake",
    "sapnap",
    "Seapeekay",
    "shubbleyt",
    "Smajor",
    "snifferish",
    "eret",
    "tubbo",
    "wilbursoot",
    "Wisp",
    "aimsey",
    "awesamdude",
    "falsesymmetry",
    "fruitberries",
    "hannahxxrose",
    "jojosolos",
    "vgumiho"
  ],
  "youtubeUsers": {
    "Xelqua": [
      "UCR9Gcq0CMm6YgTzsDxAxjOQ",
      0
    ],
    "SmallishBeans": [
      "UC4qdHN4zHhd4VvNy3zNgXPA",
      0
    ],
    "SolidarityGaming": [
      "UC6XAct-Bus4x3mYz3VC_HUw",
      0
    ]
  }
}
```
