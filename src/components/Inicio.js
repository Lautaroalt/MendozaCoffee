import React from 'react';
import '../styles/Inicio.css';
import banner from '../images/banner.jpg';
import quienesSomosImg from '../images/quienes-somos.jpg';
import barista from '../images/barista.jpg';
import croissant from '../images/croissant.jpg';
import cafe1 from '../images/cafe1.jpg';
import cafe2 from '../images/cafe2.jpg';
import cafe3 from '../images/cafe3.jpg';
import cafe4 from '../images/cafe4.jpg';
import cafe5 from '../images/cafe5.jpg';
import cafe6 from '../images/cafe6.jpg';
import cafe7 from '../images/cafe7.jpg';
import cafe8 from '../images/cafe8.jpg';
import cafe9 from '../images/cafe9.jpg';

const Inicio = () => {
    return (
        <div className="inicio">
            <div className="banner" id="banner" style={{ backgroundImage: `url(${banner})` }}>
                <div className="banner-content">
                    <h1>Bienvenidos a MendozaCoffee</h1>
                    <p>¿Estás listo para probar nuestro café?</p>
                </div>
            </div>
            <div className="section" id="cafeteria">
                <div className="card">
                    <img src={quienesSomosImg} alt="Quiénes Somos" className="card-img" />
                    <div className="card-content">
                        <h2>QUIENES SOMOS?</h2>
                        <p>Somos una cafetería ubicada en el centro de Mendoza, a metros del Parque San Martín. Contamos con estacionamiento exclusivo y servicio take away.</p>
                    </div>
                </div>
            </div>
            <div className="section section-alt">
                <div className="card card-alt">
                    <img src={barista} alt="Barista" className="card-img2" />
                    <div className="card-content">
                        <h2>POR QUE ELEGIRNOS?</h2>
                        <p>Porque contamos con una amplia variedad de granos de cafe que se adaptan a tus gustos. Con granos seleccionados e incluso algunos importados.</p>
                    </div>
                </div>
            </div>
            <div className="section" id="confiteria">
                <div className="card">
                    <img src={croissant} alt="Nuestra Confitería" className="card-img" />
                    <div className="card-content">
                        <h2>NUESTRA CONFITERIA</h2>
                        <p>Veni a probar y conocer lo mejor de Mendoza en nuestra confiteria de especialidad. Contamos con los mejores productos para que disfrutes completamente esta experiencia.</p>
                    </div>
                </div>
            </div>
            <div className="section section-alt" id="carta">
                <h2>NUESTRA CARTA</h2>
                <div className="product-cards">
                    <div className="card">
                        <img src={cafe1} alt="Café 1" className="card-img" />
                        <div className="card-content">
                            <h3>Café Premium</h3>
                            <p>Descripción del café Premium</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cafe2} alt="Café 2" className="card-img" />
                        <div className="card-content">
                            <h3>Café Especial</h3>
                            <p>Descripción del café Especial</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cafe3} alt="Café 3" className="card-img" />
                        <div className="card-content">
                            <h3>Café Clásico</h3>
                            <p>Descripción del café Clásico</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cafe4} alt="Café 4" className="card-img" />
                        <div className="card-content">
                            <h3>Café Especial</h3>
                            <p>Descripción del café Especial</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cafe5} alt="Café 5" className="card-img" />
                        <div className="card-content">
                            <h3>Café Clásico</h3>
                            <p>Descripción del café Clásico</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cafe6} alt="Café 6" className="card-img" />
                        <div className="card-content">
                            <h3>Café Especial</h3>
                            <p>Descripción del café Especial</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cafe7} alt="Café 7" className="card-img" />
                        <div className="card-content">
                            <h3>Café Clásico</h3>
                            <p>Descripción del café Clásico</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cafe8} alt="Café 8" className="card-img" />
                        <div className="card-content">
                            <h3>Café Especial</h3>
                            <p>Descripción del café Especial</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cafe9} alt="Café 9" className="card-img" />
                        <div className="card-content">
                            <h3>Café Clásico</h3>
                            <p>Descripción del café Clásico</p>
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
