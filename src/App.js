import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import AboutMe from './components/AboutMe/AboutMe';
import Curriculum from './components/Curriculum/Curriculum';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
    return (
        <div className="App">
            <Header />
            <NavMenu />
            <AboutMe />
            <Curriculum />
            <Portfolio />
        </div>
    );
}

export default App;
