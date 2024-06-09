import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/Logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <a href="#banner" className="navbar-logo"> {/* Cambia el href aquí */}
                <img src={logo} alt="Logo" />
            </a>
            <button className={`navbar-toggle ${menuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                <li className="navbar-item"><a href="#banner">Inicio</a></li>
                <li className="navbar-item"><a href="#cafeteria">Nosotros</a></li>
                <li className="navbar-item"><a href="#carta">Cafeteria</a></li>
                <li className="navbar-item"><a href="#contacto">Contacto</a></li>   
            </ul>
        </nav>
    );
}

export default Navbar;
