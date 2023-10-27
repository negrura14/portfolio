import React from "react";

import { social } from '../../data';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                    <div className="flex space-x-6 items-center justify-center">
                        {social.map((item, index) => {
                            const {href, icon} = item;
                            return (
                                <a className="btn btn-outline-light btn-floating m-1" href={href} target="blank" key={index}>
                                      {icon}
                                </a>
                            );
                        })};
                    </div>
                </div>
                <p>Emanuel Nieto</p>
            </div>
        </footer>
    )
}

export default Footer;