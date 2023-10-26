import React from "react";

import Image from "../../assets/about.png"
import { navigation } from "../../data";
import { Link } from "react-scroll";




function About () {

    return (
        <section className="section bg-secondary" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                    <img
                    className="object-cover h-full w-[250px] md:mx-auto lg:mx-0 rounded-2xl"
                    src={Image}
                    alt="img_about"
                    />
                    <div className="flex flex-col items-ceter text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                                Emanuel Nieto
                            </h2>
                            <p className="mb-4 text-accent">Full Stack Developer</p>
                            <hr className="mb-8 opacy-5" />
                            <p className="mb-8">
                                👨🏽‍💻 Full Stack Developer with the ability to create and optimize 
                                websites and applications aimed at the end user in a scalable 
                                and modularized way. <br/>
                                <br />
                                📚 I like to investigate, solve problems, learn from others
                                and contribute ideas in order to achieve optimal results, 
                                that is why in me you will find a developer with the ability to resolve
                                conflicts, willing to listen to ideas and contribute all my knowledge
                                to achieve the goals. proposed objectives. <br />
                                <br />
                                I have experience in JavaScript, HTML, CSS languages 
                                and also in technologies such as Node.js, Express, Sequelize,
                                PostgreSQL, React.js, Redux. VCS tool: Git.
                            </p>
                        </div>
                        <Link to={navigation[3].href} activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
                            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                                My CV
                            </button>
                        </Link>

                    </div>

                </div>
            </div>   
        </section>
    )
}

export default About;
