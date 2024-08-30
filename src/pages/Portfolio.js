import React, { useState } from 'react'; 
import awsCertificateLogo from '../assets/aws-certificate.png';
import metaCertificateLogo from '../assets/meta-certificate.png';
import './Portfolio.css';

const Portfolio = () => {
    const [activePopup, setActivePopup] = useState(null);
    const [modalContent, setModalContent] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleClick = (cert) => {
        setModalContent(cert);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalContent(null);
    };

    const certifications = [
        {
            id: 1,
            logo: awsCertificateLogo,
            title: 'AWS Certified Developer-Associate',
            description: 'AWS Certified Developer - Associate showcases skills and knowledge in developing, optimizing, packaging, and deploying applications, using CI/CD workflows, and identifying and resolving application issues.',
            link: 'https://www.credly.com/badges/67e9d11c-0332-4461-93a2-cf154b7b4578/public_url'
        },
        {
            id: 2,
            logo: metaCertificateLogo,
            title: 'Meta Back-end Developer',
            description: 'Meta Back-end Developer is issued by Meta. It consists of 9 courses: Introduction to Back-End Development, Programming in Python, Version Control, Introduction to Databases for Back-End Development, Django Web Framework, APIs, The Full Stack, Back-End Developer Capstone, Coding Interview Preparation.',
            link: 'https://www.credly.com/badges/495d4855-d3f1-47aa-9730-b8beaa50e670/public_url'
        },
    ];

    return (
        <section id="projects" className="projects">
            <h2 data-aos="fade-right">Projects</h2>
            <div className="projects-items">
                <div className="item" data-aos="zoom-in" data-aos-delay="100"> 
                    <h3 className="project-title">Expense Tracker</h3>
                    <p className="project-date">January 2022 - April 2022</p>
                    <div className="project-description">
                        <img src={require('../assets/expense-tracker.png')} alt="Expense Tracker" className="project-image" />
                        <p>It is a personal finance management tool with React, allowing users to 
                            track income and expenses, categorize them, and visualize spending habits.
                            The main goal is to give users insight into their financial habits, enabling 
                            them to make informed decisions and manage their budgets effectively.
                            Used Postgres to store transactions, categories, and user data.</p>
                    </div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="200"> 
                    <h3 className="project-title">Virtual Classroom</h3>
                    <p className="project-date">August 2022 - December 2022</p>
                    <div className="project-description">
                        <img src={require('../assets/Virtual-Classroom.png')} alt="Virtual Classroom" className="project-image" />
                        <p>A Virtual Classroom is an online platform where teachers and students can
                            interact in real-time, conduct live classes, share resources, and collaborate. 
                            This project focuses on building a physical classroom environment through 
                            features like video conferencing, whiteboards, and assignments, making it a 
                            comprehensive tool for remote learning. The frontend is built with Angular, 
                            ensuring a dynamic and responsive user interface, while the backend is developed 
                            using Python, providing robust data handling and processing.</p>
                    </div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="300"> 
                    <h3 className="project-title">Multiplayer Card Game</h3>
                    <p className="project-date">August 2021 - December 2021</p>
                    <div className="project-description">
                        <img src={require('../assets/card-game.png')} alt="Card Game" className="project-image" />
                        <p>The Multiplayer Card Game is an online application where players can join, 
                            create, and play various card games in real-time with others. The platform 
                            supports multiple card games (e.g., Poker, Blackjack, Uno) and includes features 
                            such as matchmaking, in-game chat, and leaderboards. The project focuses on 
                            building a robust backend with Python and Django to handle real-time interactions, 
                            game logic, and player management, while the frontend built with React provides 
                            a dynamic and engaging user interface.</p>
                    </div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="400"> 
                    <h3 className="project-title">Expense Reimbursement System</h3>
                    <p className="project-date">Nov 2019 - May 2020</p>
                    <div className="project-description">
                        <img src={require('../assets/expense-management.png')} alt="Expense Reimbursement System" className="project-image" />
                        <p>The Expense Reimbursement System is a web-based application that streamlines 
                            the process of submitting, reviewing, and approving employee expense claims. 
                            This system allows employees to submit their expenses online, managers to review 
                            and approve claims, and finance teams to track and manage reimbursements. The 
                            project focuses on creating a secure and efficient workflow for expense management, 
                            integrating both backend logic for data processing and frontend features for a 
                            user-friendly experience. Java and Spring Boot were used for creating the RESTful API 
                            that handles business logic, expense processing, and integrations.</p>
                    </div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="500"> 
                    <h3 className="project-title">Developer Blogging System</h3>
                    <p className="project-date">Nov 2019 - May 2020</p>
                    <div className="project-description">
                        <img src={require('../assets/blogging-platform.png')} alt="Developer Blogging System" className="project-image" />
                        <p>The Developer Blogging System is a platform designed specifically for developers 
                            to create, share, and engage with technical content. It allows users to write blog 
                            posts, share code snippets, participate in discussions, and follow other developers. 
                            The platform emphasizes features that cater to the needs of developers, such as syntax 
                            highlighting, GitHub integration, and a robust tagging system for organizing content. 
                            HTML, CSS, and JavaScript were used for frontend and Java for backend development.</p>
                    </div>
                </div>
            </div>
            <div className="certifications-section" data-aos="zoom-in" data-aos-delay="500">
                <h2>Certifications</h2>
                <div className="certifications">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="certification-item"
                            onClick={() => handleClick(cert)}
                        >
                            <img
                                src={cert.logo}
                                alt={cert.title}
                                className="certification-logo"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {showModal && modalContent && (
                <div className="modal active">
                    <div className="modal-content">
                        <span className="modal-close" onClick={closeModal}>&times;</span>
                        <img src={modalContent.logo} alt={modalContent.title} />
                        <h2>{modalContent.title}</h2>
                        <p>{modalContent.description}</p>
                        {modalContent.link && (
                            <p>
                                Verify at{' '}
                                <a href={modalContent.link} target="_blank" rel="noopener noreferrer" className="modal-link">
                                    {modalContent.link}
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;