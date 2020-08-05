import React from 'react';
import './Presentation.css';
import ProfilePicture from '../../static/img/foto.jpg';
import NavMenu from '../NavMenu/NavMenu';

const Presentation = () => {
    return (
        <section className="presentation">
            <div className="profile">
                <div className="profile-picture">
                    <img src={ProfilePicture} alt="profile"></img>
                </div>
                <p className="title"> Andrea Palmera</p>
                <p className="header-slogan">Front-end developer</p>
            </div>
            <NavMenu />
        </section>
    );
};

export default Presentation;
