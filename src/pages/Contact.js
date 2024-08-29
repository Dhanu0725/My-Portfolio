import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact" data-aos="fade-up" data-aos-delay="500">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
