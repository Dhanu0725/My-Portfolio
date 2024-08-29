import React from 'react';
import './About.css'; // Ensure this file contains your styles

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-me">
                    <h2 className="heading">About Me</h2>
                    <p data-aos="fade-out" data-aos-delay="500">
                        I am a enthusiastic Full stack developer eager to 
                        contribute to team success through hard work, 
                        attention to detail and excellent organisational skills.
                        With experience in React, Angular, JavaScript, and modern web 
                        technologies, I strive to deliver high-quality
                        user experiences. 
                    </p>
                    <p data-aos="fade-out" data-aos-delay="800">
                        Proficient in Java, Python, JavaScript, and SQL. 
                        Solid background in Agile methodologies, 
                        object-oriented programming, and web development 
                        frameworks. Managed successful delivery of 2 
                        software projects with teams of up to 8 members 
                        within stringent deadlines. 
                    </p>
                    <p data-aos="fade-out" data-aos-delay="1000">
                        Let's get in Touch and make something special!! 
                    </p>
                </div>
                <div className="education">
                    <h2 className="heading">Education</h2>
                    <div className="education-item" data-aos="fade-left" data-aos-delay="500">
                        <img src={require('../assets/university1.png')} alt="University XYZ" className="university-logo" />
                        <div className="education-box">
                            <p> University of North Texas (August 2021 to December 2022) </p>
                            <p> Masters in Computer Science </p>
                        </div>
                    </div>
                    <div className="education-item" data-aos="fade-left" data-aos-delay="800">
                        <img src={require('../assets/university2.jpeg')} alt="Swami Ramananda Tirtha Institute of Science and Technology" className="university-logo" />
                        <div className="education-box">
                            <p>Swami Ramananda Tirtha Institute of Science and Technology (August 2016 to October 2020)</p>
                            <p>Bachelor of Technology in Computer Science</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
