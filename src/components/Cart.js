import React from 'react';
import '../styles/Cart.css';

const Cart = ({ isOpen, onClose }) => {
    return (
        <div className={`cart ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={onClose}>Cerrar</button>
            <h2>Carrito</h2>
            
        </div>
    );
}

export default Cart;
