import {FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ImPhone } from "react-icons/im";

import project1 from "./assets/img/projecto 1.png";
import project2 from "./assets/img/projecto 2.png";

import SkillImg1 from "./assets/skills/js.png";
import SkillImg2 from "./assets/skills/reactjs.png";
import SkillImg3 from "./assets/skills/CSS.png";
import SkillImg4 from "./assets/skills/html5.png";
import SkillImg5 from "./assets/skills/nodejs.png";
import SkillImg6 from "./assets/skills/postgresql.png";
import SkillImg7 from "./assets/skills/redux.png";
import SkillImg8 from "./assets/skills/git.png";


export const navigation = [
    {
        name: "Home",
        href: "home",
    },
    {
        name: "About",
        href: "about",

    },
    {
        name: "Portfolio",
        href: "portfolio"
    },
    {
        name: "Contact",
        href: "contact"
    },
];

// social

export const social = [
    {
        icon: <FiLinkedin  className="h-6 w-6"/>,
        href: "https://www.linkedin.com/in/emanuel-nieto-230aab264/"
    },
    {
        icon: <FiGithub  className="h-6 w-6"/>,
        href: "https://github.com/negrura14",
    },
];

//projects

export const projectsData = [
    // {
    //     id: "1",
    //     image: project1,
    //     name: "Pokemon app",
    //     category: "Full Stack",
    //     href: "",
    //     description:
    //     "A full stack application that allows users to search for Pokemon and view their characteristics.",
    // },
    {
        id: "2",
        image: project2 ,
        name: "8 Bits app",
        category: "Full Stack",
        href: "https://8-bits-front.vercel.app/",
        description:
        "This application is a video game e-commerce, which allows users a unique experience when purchasing their favorite game.",
    },
]

export const skills = [
    {
        image: SkillImg1,
    },
    {
        image: SkillImg2,
    },
    {
        image: SkillImg3,
    },
    {
        image: SkillImg4,
    },
    {
        image: SkillImg5,
    },
    {
        image: SkillImg6,
    },
    {
        image: SkillImg7,
    },
    {
        image: SkillImg8,
    },
];

export const contact = [
    {
        icon: <FiMail />,
        title: "Do you have any question?",
        subtitle: "I am here to help you.",
        description: "Email me at talleresmatador114@gmail.com",
    },
    {
        icon: <FiMapPin />,
        title: "Current Location",
        subtitle: "Córdoba, Argentina",
        description: "Serving clients worldwide",
    },

    {
        icon: <FaWhatsapp  />,
        title: "Send me a message",
        subtitle: "I answer instantly",
        description: "+54 9 351 345-4697",
    },
    {
        icon: <ImPhone />,
        title: "Call me",
        subtitle: "For whatever you need",
        description: "+54 9 351 619-6235"
    },

];

