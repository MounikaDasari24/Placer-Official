import React, { useState } from "react";
import { Link } from "react-scroll";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcon, setShowMediaIcon] = useState(false);

    return (
        <nav className="main-nav">
            <div className="logo">
                <h2>Placer</h2>
            </div>
            <div
                className={
                    showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"
                }
            >
                <ul>
                    <li>
                        <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="Courses" spy={true} smooth={true} offset={50} duration={500}>Courses</Link>
                    </li>
                    <li>
                        <Link to="About" spy={true} smooth={true} offset={50} duration={500}>About Us</Link>
                    </li>
                    <li>
                        <Link to="Footer" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <GiHamburgerMenu
                    onClick={() => setShowMediaIcon(!showMediaIcon)}
                />
            </div>
        </nav>
    );
};

export default Navbar;