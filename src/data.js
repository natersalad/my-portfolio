import weaponizeThumbnail from "./img/weaponizeImg.png";
import weaponizeVideo from "./vids/WeaponizeClip.mp4";
import csgoThumbnail from "./img/csgoThumbnail.png";
import csgoVideo from "./vids/csgoClip.mp4";
import medscanThumbnail from "./img//MedScanThumbnail.png";
import medscanVideo from "./vids//MedScanVideo.mp4";
import beatbladeVideo from "./vids/BeatBladeClip.mp4";
import beatbladeThumbnail from "./img/beatbladeThumbnail.png";
import repentThumbnail from "./img/repentThumbnail.png";
import repentVideo from "./vids/RepentClip.mp4";

export const products = [
  {
    id: "1",
    thumbnailSrc: medscanThumbnail,
    videoSrc: medscanVideo,
    link: "https://devpost.com/software/medscanai?ref_content=my-projects-tab&ref_feature=my_projects",
    heading: "MedScanAI: Exploring AI Precision in Brain Tumor Detection",
    madeWith:
      "React, TypeScript, Next.js, Python, Pytorch, Flask, Kaggle, Keras-core, Google Cloud",
    desc: "As a submisson at KnightsHack's Hackathon 2023, MedScanAI diagnoses brain tumors in MRI scans with a 99% accurate Convolutional Neural Network trained on an open-source MRI dataset. Using EfficientNetB3 for transfer learning, we overcame challenges in model optimization and cloud deployment, creating a user-friendly React frontend. This project highlights the potential of medical datasets in training models and aims to support healthcare professionals for better diagnoses.",
  },
  {
    id: "2",
    thumbnailSrc: weaponizeThumbnail,
    videoSrc: weaponizeVideo,
    link: "https://github.com/nicolasprothero/KyotoGame",
    heading: "Weaponize: A 2D Platformer/Fighting Game",
    madeWith: "Python, Pygame",
    desc: "Welcome to Weaponize, an exhilarating 2D platform and combat game designed for intense duels between two players. Featuring swift, strategic movement across platforms and skillful weapon-based combat, Weaponize brings excitement to every round. Engage in short, impactful rounds where performance earns randomized weapons, each with its own unique attributes. Developed using Pygame, Weaponize promises action-packed entertainment that's currently in the development phase.",
  },
  {
    id: "3",
    thumbnailSrc: repentThumbnail,
    videoSrc: repentVideo,
    link: "https://natersalad.itch.io/repent",
    heading: "Repent: A TopDown Procedural Horror Game",
    madeWith: "Unity, C#",
    desc: "Repent is a tense, 2D top-down horror game that tests your survival skills with a unique crutch-based movement system. Explore procedurally generated levels, evade relentless ghost of your Wife, and collect items to atone for your sins. Click on the image to play now and see if you can escape your own guilt!",
  },
  {
    id: "4",
    thumbnailSrc: beatbladeThumbnail,
    videoSrc: beatbladeVideo,
    link: "https://natersalad.itch.io/beatblade",
    heading: "BeatBlade: Rhythm is Your Weapon",
    madeWith: "Java, Processing 4 ",
    desc: "BeatBlade is a rhythm-based action game where timing is everything. Match the beat of the music to unleash powerful attacks against formidable foes. Choose between battling the Rhino in Easy Mode or the Demon King in Hard Mode. Stay in sync, stay alive, and bring the monsters down with precision strikes. Your rhythm is your weapon—can you keep up?",
  },
  {
    id: "5",
    thumbnailSrc: csgoThumbnail,
    videoSrc: csgoVideo,
    link: "https://github.com/natersalad/CS-GO-Data-Tracker",
    heading: "Counter-Strike: Global Offensive Data Analyser",
    madeWith: "HTML, CSS, JavaScript, ExpressJs, NodeJs",
    desc: "Presenting a project that tackles a significant challenge in the realm of competitive gaming. In the context of the tactical shooter CS:GO, our team developed an innovative solution to address the dilemma of optimizing loadouts based on maps and player preferences. As seasoned players ourselves, we recognized the frustration of suboptimal loadouts leading to defeats. To alleviate this, we created a web app that empowers users to strategically choose loadouts, minimizing setbacks and enhancing gameplay.",
  },
];
