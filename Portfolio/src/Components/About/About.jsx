import React from "react";

import Image from "../../assets/about.png"
import { navigation} from "../../data";
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
                            <p className="mb-4 text-emerald-600 text-xl">Desarrollador Web</p>
                            <hr className="mb-8 opacy-5" />
                            <p className="mb-8">
                                👨🏽‍💻 Desarrollador Full Stack con capacidad de crear y optimizar
                                sitios web y aplicaciones dirigidas al usuario final de forma escalable
                                y modularizada. <br/>
                                <br />
                                📚 Me gusta investigar, resolver problemas, aprender de los demás.
                                y aportar ideas para lograr resultados óptimos,
                                por eso en mí encontrarás un desarrollador con capacidad de resolución
                                de conflictos, dispuesto a escuchar ideas y aportar todos mis conocimientos
                                para lograr las metas y objetivos propuestos. <br />
                                <br />
                                Tengo experiencia en lenguajes JavaScript, HTML, CSS.
                                y también en tecnologías como Node.js, Express, Sequelize,
                                PostgreSQL, React.js, Redux. Herramienta VCS: Git, Slack.
                            </p>
                        </div>
                        <a
                            href="https://drive.google.com/file/d/1bMcpZ1wRmv_Qvpdzf34CLyypel13xHgd/view"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
                                Mi CV
                            </button>
                        </a>

                    </div>

                </div>
            </div>   
        </section>
    )
}

export default About;
