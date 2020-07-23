import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me-main-container">
                <h3 className="about-me-title">
                    <span className="simbol-2">{'<'}</span> About Me <span className="simbol-2">{'/>'}</span>
                </h3>
                <p className="about-me-content">
                    <span className="greeting">Hello world!</span> I'm a junior Front-end Developer. I'm currently looking for my first formal work experience
                    in this particular area. I graduated from Law School in 2012 and I am looking to give a drastic change to my career path by fulfilling my
                    genuine vocation with the challenges of this fascinating field.
                </p>
            </div>
            <div className="other-information">
                <div className="other-information-container">
                    <button className="other-information-button">Skills</button>
                    <ul className="other-information-content">
                        <div className="list-separator">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>BOOTSTRAP</li>
                            <li>GIT</li>
                        </div>
                        <div className="list-separator">
                            <li>SOURCETREE</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                            <li>REACT NATIVE (currently learning)</li>
                        </div>
                    </ul>
                </div>
                <div className="other-information-container">
                    <button className="other-information-button">Interests</button>
                    <p className="other-information-content">
                        In my free time I like to paint, make collages, sculpture and other things related to the plastic arts. I consider myself a lover of
                        music and films.
                    </p>
                </div>
                <div className="other-information-container">
                    <button className="other-information-button">Languages</button>
                    <ul className="other-information-lenguages">
                        <li>
                            <span>Spanish:</span> Native.
                        </li>
                        <li>
                            <span>English:</span> Advance, spoken and written.
                        </li>
                        <li>
                            <span>Portuguese</span> Intermediate, spoken and written.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="networks">
                <a href="https://github.com/andypalmera/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/andrea-palmera-731114189/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </section>
    );
};

export default AboutMe;
