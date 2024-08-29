import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = ({ toggleTheme }) => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header className="header">
            <img 
                    src={require('../assets/dklogo.png')} 
                    alt="Logo" 
                    className="logo"
                />
            <h1>Dhanusree Kodali</h1>
            <nav className={`nav ${menuActive ? 'active' : ''}`}>
                <ul className="nav-list">
                    <li><Link to="home" smooth={true} duration={500} offset={-70}>
                            Home
                        </Link>
                    </li>
                    <li><Link to="about" smooth={true} duration={500} offset={-90}>
                            About
                        </Link>
                    </li>
                    <li><Link to="skills" smooth={true} duration={500} offset={-140}>
                            Skills
                        </Link>
                    </li>
                    <li><Link to="projects" smooth={true} duration={500} offset={-120}>
                            Projects
                        </Link>
                    </li>
                    <li><Link to="contact" smooth={true} duration={500} offset={-70}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
