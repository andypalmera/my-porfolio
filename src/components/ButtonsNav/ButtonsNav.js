import React from 'react';
import './ButtonsNav.css';

const ButtonsNav = (props) => {
    return (
        <div className="buttons-nav-container">
            <button className="buttons-nav" id="about-me" onClick={(e) => props.switchId(e)}>
                {''}
            </button>
            <button className="buttons-nav" id="curriculum" onClick={(e) => props.switchId(e)}>
                {''}
            </button>
            <button className="buttons-nav" id="portfolio" onClick={(e) => props.switchId(e)}>
                {''}
            </button>
            <button className="buttons-nav" id="cotact-me" onClick={(e) => props.switchId(e)}>
                {''}
            </button>
        </div>
    );
};
export default ButtonsNav;
