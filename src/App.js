import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import NavMenu from './components/NavMenu/NavMenu';
import AboutMe from './components/AboutMe/AboutMe';
import Curriculum from './components/Curriculum/Curriculum';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Presentation from './components/Presentation/Presentation';

function App() {
    return (
        <div className="App">
            <Header />
            <Presentation />
            <AboutMe />
            <Curriculum />
            <Portfolio />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;
