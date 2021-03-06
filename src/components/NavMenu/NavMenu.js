import React from 'react';
import ComputerImage from '../../static/img/pantalla.svg';
import './NavMenu.css';
import PencilImage from '../../static/img/lapiz.svg';

export default class NavMenu extends React.Component {
    render() {
        return (
            <section className="nav-menu">
                <div className="nav-menu-image-container">
                    {<img src={ComputerImage} alt="screen" />}
                    <div className="nav-menu-items-container">
                        <div className="nav-menu-links-container ">
                            <a href="#about-me" id="about-me-nav" className="uno nav-menu-link">
                                <span className="simbol"> {'<'}</span> About Me<span className="simbol">{'/>'}</span>
                            </a>
                            <a href="#curriculum" id="curriculum-nav" className="dos nav-menu-link">
                                <span className="simbol"> {'<'}</span> Curriculum<span className="simbol">{'/>'}</span>
                            </a>
                            <a href="#portfolio" id="portfolio-nav" className="tres nav-menu-link">
                                <span className="simbol"> {'<'}</span> Portfolio<span className="simbol">{'/>'}</span>
                            </a>
                            <a href="#contact-me" id="contact-me-nav" className="cuatro nav-menu-link">
                                <span className="simbol"> {'<'}</span> Contact me<span className="simbol">{'/>'}</span>
                            </a>
                        </div>

                        <img src={PencilImage} alt="pencil" className="pencil" />
                    </div>
                </div>
            </section>
        );
    }
}
