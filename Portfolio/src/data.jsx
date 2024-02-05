import {FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { RiPhoneLine } from "react-icons/ri";

import project1 from "./assets/img/projecto 1.png";
import project2 from "./assets/img/projecto 2.png";
import project3 from "./assets/img/proyecto 3.png"

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
     {
        id: "1",
        image: project1,
        name: "Pokemon App",
        category: "Full Stack",
        href: "https://pokemon-nieto.vercel.app/",
        description:
        "Una aplicación completa que permite a los usuarios buscar Pokémon y ver sus características.",
    },
    {
        id: "2",
        image: project2 ,
        name: "8 Bits App",
        category: "Full Stack",
        href: "https://8-bits-front.vercel.app/",
        description:
        "Esta aplicación es un E-commerce de videojuegos, que permite a los usuarios una experiencia única al adquirir su juego favorito.",
    },
    {
        id: "3",
        image: project3,
        name: "Peliculas App",
        category: "Full Stack",
        href: "https://peliculas-nieto.vercel.app/",
        description:
        "Esta aplicacion se esta trabajando actualmente con Angular, se vera un progreso dia a dia",
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
        title: "¿Tienes alguna pregunta?",
        subtitle: "Estoy aqui para ayudarte.",
        description: "Enviame un correo a talleresmatador114@gmail.com",
    },
    {
        icon: <FiMapPin />,
        title: "Ubicación actual",
        subtitle: "Córdoba, Argentina",
        description: "Sirviendo a clientes en todo el mundo",
    },

    {
        icon: <FaWhatsapp  />,
        title: "Enviame un WhatsApp",
        subtitle: "Respondo al instante",
        description: "+54 9 351 345-4697",
    },
    {
        icon: <RiPhoneLine />,
        title: "Llamame",
        subtitle: "Para lo que necesites",
        description: "+54 9 351 619-6235"
    },

];

