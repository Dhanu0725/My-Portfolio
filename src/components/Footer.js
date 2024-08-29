import React from 'react';
import {FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Dhanusree Kodali's Portfolio</p>
            <div className="social-icons">
                <a href="mailto:dhanusreekodali@gmail.com" className="footer-link">
                    <FaGoogle/>
                </a>
                <a href="https://www.linkedin.com/in/dhanusreek/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
