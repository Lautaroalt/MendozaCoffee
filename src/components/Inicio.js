import React from 'react';
import '../styles/Inicio.css';
import banner from '../images/banner.jpg';
import quienesSomosImg from '../images/quienes-somos.jpg';
import barista from '../images/barista.jpg';
import croissant from '../images/croissant.jpg';

const Inicio = () => {
    return (
        <div className="inicio">
            <div className="banner" id="banner" style={{ backgroundImage: `url(${banner})` }}> {/* Añade el ID aquí */}
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
                        <p>Porque contamos con una amplia variedad de granos de cafe que se adaptan a tus gustos.Con granos seleccionados e incluso algunos importados</p>
                    </div>
                </div>
            </div>
            <div className="section" id="confiteria">
                <div className="card">
                    <img src={croissant} alt="Nuestra Confitería" className="card-img" />
                    <div className="card-content">
                        <h2>NUESTRA CONFITERIA</h2>
                        <p>Veni a probar y conocer lo mejor de Mendoza en nuestra confiteria de especialidad. Contamos con los mejores productos para que disfrutes completamente esta experiencia</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
