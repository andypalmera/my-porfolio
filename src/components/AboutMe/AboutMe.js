import React from 'react';
import './AboutMe.css';
import OtherInformation from '../OtherInformation/OtherInformation';

const AboutMe = () => {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me-main-container">
                <h3 className="section-title">
                    <span className="simbol-2">{'<'}</span> About Me <span className="simbol-2">{'/>'}</span>
                </h3>
                <p className="about-me-content">
                    <span className="greeting">Hello world!</span> I'm a junior Front-end Developer. I'm currently looking for my first formal work experience
                    in this particular area. I graduated from Law School in 2012 and I am looking to give a drastic change to my career path by fulfilling my
                    genuine vocation with the challenges of this fascinating field.
                </p>
            </div>
            <OtherInformation />
            <div className="networks">
                <a href="https://github.com/andypalmera/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/andrea-palmera-731114189/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </section>
    );
};

export default AboutMe;
