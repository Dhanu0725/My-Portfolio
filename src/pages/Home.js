import React from 'react';
import CustomTypewriter from '../components/CustomTypewriter';
import './Home.css';

const Home = () => {
    const htmlContent = `
        <h1>Welcome to My <span style="color: #3498db;">Portfolio</span></h1>
        <p>I am <span style="color: #3498db;"<strong>Dhanusree Kodali,</strong></span> a Full Stack Developer.</p>
    `;

    return (
        <section id="home" className="home">
            <div className="intro">
                <CustomTypewriter
                    text={htmlContent}
                    speed={50}
                    cursorColor="#000"
                />
            </div>
            <div className="intro-image" data-aos="fade-left" data-aos-delay="300">
                <img src={require('../assets/background.gif')} alt="Profile" />
            </div>
        </section>
    );
};

export default Home;
