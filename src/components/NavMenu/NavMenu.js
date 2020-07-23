import React from 'react';
import ComputerImage from '../../static/img/pantalla.svg';
import './NavMenu.css';
import PencilImage from '../../static/img/lapiz.svg';
import ButtonsNav from '../ButtonsNav/ButtonsNav';

const NavMenu = () => {
    return (
        <section className="nav-menu">
            <div className="nav-menu-image-container">{<img src={ComputerImage} alt="screen" />}</div>
            <div className="nav-menu-items-container">
                <a href="www.google.com" className="nav-menu-title">
                    <span className="simbol">{'<'}</span> About Me <span className="simbol">{'/>'}</span>
                </a>
                <img src={PencilImage} alt="pencil" className="pencil" />
                <ButtonsNav />
            </div>
        </section>
    );
};

export default NavMenu;
