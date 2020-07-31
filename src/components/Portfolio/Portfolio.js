import React from 'react';
import ImageSearch from '../../static/img/buscador de imagenes-.jpg';
import MovieSearchEngine from '../../static/img/movies search engine-.jpg';
import SalesControlApp from '../../static/img/Sales control app-.jpg';
import LayoutSample from '../../static/img/Layout sample-.jpg';
import ToDoList from '../../static/img/To do list-.jpg';
import Clock from '../../static/img/react clock.jpg';

import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h3 className="section-title">
                <span className="simbol-2">{'<'}</span> Portfolio <span className="simbol-2">{'/>'}</span>
            </h3>
            <div className="portfolio-image-container">
                <a href="https://andypalmera.github.io/reloj-react/" target="_blank" rel="noopener noreferrer">
                    <img alt="clock-react" src={Clock}></img>
                </a>
                <a href="https://to-do-list-bice.vercel.app/" target="_blank">
                    <img alt="my-proyect" src={ToDoList}></img>
                </a>
                <a href="https://andypalmera.github.io/layout-website-sample/" target="_blank" rel="noopener noreferrer">
                    <img alt="layout-sample" src={LayoutSample}></img>
                </a>
                <a href="https://andypalmera.github.io/contabilizador-de-ventas/" target="_blank" rel="noopener noreferrer">
                    <img alt="sales-control-app" src={SalesControlApp}></img>
                </a>
                <a href="https://wiki-image-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img alt="my-proyect" src={ImageSearch}></img>
                </a>
                <a href="www.google.com" target="_blank" rel="noopener noreferrer">
                    <img alt="my-proyect" src={MovieSearchEngine}></img>
                </a>
            </div>
        </section>
    );
};

export default Portfolio;
