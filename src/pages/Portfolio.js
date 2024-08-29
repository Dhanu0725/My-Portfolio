import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
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
                            Used postgres to store transactions, categories, and user data. </p>
                    </div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="200"> 
                    <h3 className="project-title">Virtual Classroom</h3>
                    <p className="project-date">August 2022 - December 2022</p>
                    <div className="project-description">
                        <img src={require('../assets/Virtual-Classroom.png')} alt="Virtual Classroom" className="project-image" />
                            <p>A Virtual Classroom is an online platform where teachers and students can
                                interact in real-time, conduct live classes, share resources, and 
                                 collaborate. This project focuses on building a physical classroom environment 
                                 through features like video conferencing, whiteboards, and assignments, 
                                 making it a comprehensive tool for remote learning. The frontend is built 
                                 with Angular, ensuring a dynamic and responsive user interface, while the 
                                 backend is developed using Python, providing robust data handling and processing. </p>
                    </div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="300"> 
                    <h3 className="project-title">Multiplayer Card Game</h3>
                    <p className="project-date">August 2021 - December 2021</p>
                    <div className="project-description">
                        <img src={require('../assets/card-game.png')} alt="Card Game" className="project-image" />
                            <p>The Multiplayer Card Game is an online application where players 
                                can join, create, and play various card games in real-time with others. 
                                The platform supports multiple card games (e.g., Poker, Blackjack, Uno) 
                                and includes features such as matchmaking, in-game chat, and leaderboards. 
                                The project focuses on building a robust backend with python and django 
                                to handle real-time interactions, game logic, and player management, 
                                while the frontend built with react provides a dynamic and 
                                engaging user interface. </p>
                    </div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="400"> 
                    <h3 className="project-title">Expense Reimbursement System</h3>
                    <p className="project-date">Nov 2019 - May 2020</p>
                    <div className="project-description">
                        <img src={require('../assets/expense-management.png')} alt="Expense Reimbursement System" className="project-image" />
                            <p>The Expense Reimbursement System is a web-based application that streamlines the process 
                                of submitting, reviewing, and approving employee expense claims. This system allows 
                                employees to submit their expenses online, managers to review and approve claims, and 
                                finance teams to track and manage reimbursements. The project focuses on creating a 
                                secure and efficient workflow for expense management, integrating both backend logic 
                                for data processing and frontend features for a user-friendly experience. Java and 
                                Spring boot for creating the RESTful API that handles business logic, expense 
                                processing, and integrations.</p>
                    </div>
                </div>
                <div className="item" data-aos="zoom-in" data-aos-delay="500"> 
                    <h3 className="project-title">Developer Blogging System</h3>
                    <p className="project-date">Nov 2019 - May 2020</p>
                    <div className="project-description">
                        <img src={require('../assets/blogging-platform.png')} alt="Developer Blogging System" className="project-image" />
                            <p>The Developer Blogging System is a platform designed specifically for developers to 
                                create, share, and engage with technical content. It allows users to write blog posts, 
                                share code snippets, participate in discussions, and follow other developers. The 
                                platform emphasizes features that cater to the needs of developers, such as syntax 
                                highlighting, GitHub integration, and a robust tagging system for organizing content. 
                                Used HTML, CSS and JavaScript for frontend and Java for backend.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
