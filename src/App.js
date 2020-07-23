import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
    return (
        <div className="App">
            <Header />
            <NavMenu />
            <AboutMe />
        </div>
    );
}

export default App;
