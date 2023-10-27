import React from "react";
import { navigation } from "../../data";
import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <div>
            <ul className="flex space-x-8 capítalize text-[15px]">
                {navigation.map((item, index) =>{
                    return (
                        <li
                        key={index}
                        className="text-white hover:text-accent cursor-pointer"
                        >
                            <Link to={item.href} activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavBar;