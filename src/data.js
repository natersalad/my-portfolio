import weaponizeThumbnail from "./img/weaponizeImg.png";
import weaponizeVideo from "./vids/WeaponizeClip.mp4";
import csgoThumbnail from "./img/csgoThumbnail.png";
import csgoVideo from "./vids/csgoClip.mp4";

export const products = [
    {
        id: "1",
        thumbnailSrc: weaponizeThumbnail,
        videoSrc: weaponizeVideo,
        link: "https://github.com/nicolasprothero/KyotoGame",
        heading: "Weaponize: A 2D Platformer/Fighting Game",
        madeWith: "Pygame",
        desc: "Welcome to Weaponize, an exhilarating 2D platform and combat game designed for intense duels between two players. Featuring swift, strategic movement across platforms and skillful weapon-based combat, Weaponize brings excitement to every round. Engage in short, impactful rounds where performance earns randomized weapons, each with its own unique attributes. Developed using Pygame, Weaponize promises action-packed entertainment that's currently in the development phase.",
    },
    {
        id: "2",
        thumbnailSrc: csgoThumbnail,
        videoSrc: csgoVideo,
        link: "",
        heading: "Counter-Strike: Global Offensive Data Analyser",
        madeWith: "HTML, CSS, JavaScript",
        desc: "Presenting a project that tackles a significant challenge in the realm of competitive gaming. In the context of the tactical shooter CS:GO, our team developed an innovative solution to address the dilemma of optimizing loadouts based on maps and player preferences. As seasoned players ourselves, we recognized the frustration of suboptimal loadouts leading to defeats. To alleviate this, we created a web app that empowers users to strategically choose loadouts, minimizing setbacks and enhancing gameplay.",
    },

];