import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../images/Logo.png';
import { HamburgetMenuClose, HamburgetMenuOpen } from './Icons'; // Asegúrate de tener estos íconos definidos o importados

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#banner" className="nav-logo"> 
                    <img src={logo} alt="Logo" />
                </a>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#banner" className="nav-links" onClick={handleMenuToggle}>Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#cafeteria" className="nav-links" onClick={handleMenuToggle}>Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a href="#carta" className="nav-links" onClick={handleMenuToggle}>Cafeteria</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contacto" className="nav-links" onClick={handleMenuToggle}>Contacto</a>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleMenuToggle}>
                    {menuOpen ? (
                        <span className="icon">
                            <HamburgetMenuClose />
                        </span>
                    ) : (
                        <span className="icon">
                            <HamburgetMenuOpen />
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
