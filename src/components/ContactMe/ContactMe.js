import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <section className="contact-me" id="contact-me">
            <h3 className="section-title">
                <span className="simbol-2">{'<'}</span> Contact Me <span className="simbol-2">{'/>'}</span>
            </h3>
            <div className="contacte-me-container">
                <p className="contacte-me-item">
                    <i className="fas fa-envelope"></i> andypalmera00@gmail.com
                </p>
                <p className="contacte-me-item">
                    <i className="fas fa-mobile-alt"></i> + 54 9 1127920790
                </p>
                <p className="contacte-me-item">
                    <i className="fas fa-map-marker-alt"></i> Av. Rivadavia 1239, Ciudad Autonoma de Buenos Aires, Argentina
                </p>
            </div>
        </section>
    );
};
export default ContactMe;
