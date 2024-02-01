import React from "react";

import Banner from "../../assets/img/Negro.png";
import { navigation } from "../../data";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section
        id="home"
        className=" lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
      >
        <div className="container mx-auto h-full">
            <div className="flex items-center h-full pt-8">
                <div className="flex-1 flex flex-col items-center lg:items-start">
                    <p className="text-4xl text-accent mb-[22px]">
                    Hola, soy Emanuel Nieto 🙋‍♂️ {" "}
                    </p>
                    <h1 className=" text-6xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]  ">
                        Desarrollador Web
                    </h1>
                    <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-2xl text-center lg:text-left">
                    Con ganas de aprender algo cada día participando
                    en experimentos y trabajando en proyectos. <br /> 
                    <b><i>Es algo maravilloso. No es sólo un trabajo, es una pasión.</i></b>
                    </p>
                    <Link to={navigation[3].href} activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
                        <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all"> ¡Contáctame!</button>
                    </Link>
                </div>
                <div className="hidden lg:flex flex-1 justify-end items-end h-full">
                    <img src={Banner} alt="banner"/>
                </div>
            </div>
        </div>

        </section>
    )
}

export default Hero;