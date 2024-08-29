import React from 'react';
import './Skills.css';

// Import logos
import javaLogo from '../assets/java.png';  // Adjust path if needed
import springbootLogo from '../assets/springboot.jpg';
import pythonLogo from '../assets/python.png';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';
import angularLogo from '../assets/angular.png';
import nodejsLogo from '../assets/nodejs.png';
import postgresLogo from '../assets/postgres.png';
import mongodbLogo from '../assets/mongodb.png';
import awsLogo from '../assets/aws.png';
import kafkaLogo from '../assets/kafka.png';
import jenkinsLogo from '../assets/jenkins.png';

const Skills = () => {
    return (
        <section id="skills" className="skills" data-aos="fade-up" data-aos-delay="500">
            <h2> Technical Skills </h2>
            <div className="skill-list">
                <div className="skill-item" data-aos="fade-up" data-aos-delay="100">
                    <img src={javaLogo} alt="Java Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="200">
                    <img src={springbootLogo} alt="Spring boot Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="300">
                    <img src={pythonLogo} alt="Python Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="400">
                    <img src={reactLogo} alt="React Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="500">
                    <img src={reduxLogo} alt="Redux Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="600">
                    <img src={angularLogo} alt="Angular Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="700">
                    <img src={nodejsLogo} alt="Node.js Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="800">
                    <img src={postgresLogo} alt="Postgres Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="900">
                    <img src={mongodbLogo} alt="MongoDB Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="1000">
                    <img src={awsLogo} alt="AWS Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="1100">
                    <img src={kafkaLogo} alt="Apache Kafka Logo" />
                </div>
                <div className="skill-item" data-aos="fade-up" data-aos-delay="1200">
                    <img src={jenkinsLogo} alt="Jenkins Logo" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
