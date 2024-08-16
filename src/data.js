import weaponizeThumbnail from "./img/weaponizeImg.png";
import weaponizeVideo from "./vids/WeaponizeClip.mp4";
import csgoThumbnail from "./img/csgoThumbnail.png";
import csgoVideo from "./vids/csgoClip.mp4";
import medscanThumbnail from "./img//MedScanThumbnail.png";
import medscanVideo from "./vids//MedScanVideo.mp4";

export const products = [
    {
        id: "3",
        thumbnailSrc: medscanThumbnail,
        videoSrc: medscanVideo,
        link: "https://devpost.com/software/medscanai?ref_content=my-projects-tab&ref_feature=my_projects",
        heading: "MedScanAI: Exploring AI Precision in Brain Tumor Detection",
        madeWith: "React, TypeScript, Next.js, Python, Pytorch, Flask, Kaggle, Keras-core, Google Cloud",
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
        thumbnailSrc: csgoThumbnail,
        videoSrc: csgoVideo,
        link: "https://github.com/natersalad/CS-GO-Data-Tracker",
        heading: "Counter-Strike: Global Offensive Data Analyser",
        madeWith: "HTML, CSS, JavaScript, ExpressJs, NodeJs",
        desc: "Presenting a project that tackles a significant challenge in the realm of competitive gaming. In the context of the tactical shooter CS:GO, our team developed an innovative solution to address the dilemma of optimizing loadouts based on maps and player preferences. As seasoned players ourselves, we recognized the frustration of suboptimal loadouts leading to defeats. To alleviate this, we created a web app that empowers users to strategically choose loadouts, minimizing setbacks and enhancing gameplay.",
    },
    

];