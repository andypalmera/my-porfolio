import React from 'react';
import './App.css';
// import ImagenFondo from './static/img/pantalla.svg';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';

function App() {
    return (
        <div className="App">
            <Header />
            <NavMenu />
        </div>
    );
}

export default App;
