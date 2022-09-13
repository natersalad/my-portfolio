import discord from "./img/discordbot.png"
import soap from "./img/SoapDispenser.png"
import NoImg from "./img/transparent.png"


export const products = [
    {
        id: "1",
        img: discord,
        link: "https://github.com/natersalad",
        heading: "GPT3 Discord Bot",
        desc: "This is a discord bot that will allow the user to access GPT3's API via Discord Chat. This project is still in process."
    },
    {
        id: "2",
        img: soap,
        link: "https://drive.google.com/file/d/19wvX5UINMFr0Sgjj0VHMaCDYlr9wpGmp/view?usp=sharing",
        heading: "Automatic Soap Dispenser",
        desc: "A simple soap dispenser that turns on with motion detection and puts on a 20 second song. This song encourages peopole to wash their hands for the recommended amount of time. I learned arduino, 3d printing, and circuits in this project",
    },
    {
        id: "3",
        img: NoImg,
        link: "https://cad.onshape.com/documents/169e9a07421b29a226996dc5/w/2e411131f17a7150503bf905/e/1f9b414ff4156570008790e5?renderMode=0&uiState=630cd2f9a3b39c537265c425",
        heading: "FLCL Cat Keychain",
        desc: "This is a keychain that I 3D modeled from scratch on Onshape and printed with cura. This project allowed me to learn Onshape and 3d Modeling basics as well as using 3d printers via CURA"
    },
];