import React from "react";
import { SiCss3 } from "react-icons/si";
import { FaHtml5, FaJs, FaCss3 } from "react-icons/fa"


function About () {

    return (
        <>
        <img src="" alt="" />
        <div>
            <h2>
                Emanuel Nieto
            </h2>
            <h6>Full Stack Developer</h6>
            <p>
            👨🏽‍💻 Full Stack Developer with the ability to create and optimize 
             websites and applications aimed at the end user in a scalable 
             and modularized way.

             📚 I like to investigate, solve problems, learn from others
             and contribute ideas in order to achieve optimal results, 
             that is why in me you will find a developer with the ability to resolve
             conflicts, willing to listen to ideas and contribute all my knowledge
             to achieve the goals. proposed objectives.

             I have experience in JavaScript, HTML, CSS languages 
             and also in technologies such as Node.js, Express, Sequelize,
             PostgreSQL, React.js, Redux. VCS tool: Git.
            </p>
        </div>
        <button>
            My CV
        </button>

        <FaCss3  size={50} color="blue" />
        <FaJs size={50} color="yellow" />
        <FaHtml5 size={50} color="orange"/>

        </>
    )
}

export default About;