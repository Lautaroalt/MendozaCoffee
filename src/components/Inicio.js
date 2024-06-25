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

const cafes = [
    { img: cafe1, nombre: 'Café Premium', descripcion: 'Una mezcla de granos seleccionados para un sabor superior.' },
    { img: cafe2, nombre: 'Capucchino', descripcion: 'Sabor único, de lo mejor que podrías probar' },
    { img: cafe3, nombre: 'Cafe Latte Vainilla', descripcion: 'Para paladar con gusto a lo dulce, ideal para endulzar el día' },
    { img: cafe4, nombre: 'Café Aromático', descripcion: 'Notas florales y frutales en cada sorbo.' },
    { img: cafe5, nombre: 'Café Latte Dulce de Leche', descripcion: 'Tradicional sabor Argentino en un café.' },
    { img: cafe6, nombre: 'Café Suave', descripcion: 'Café clasico suave, para iniciales del café.' },
    { img: cafe7, nombre: 'Café Clasico', descripcion: 'Un clasico, al alcance de tu mano.' },
    { img: cafe8, nombre: 'Café Orgánico', descripcion: 'Cultivado de manera sostenible y sin químicos.' },
    { img: cafe9, nombre: 'Café Descafeinado', descripcion: 'Todo el sabor del café sin la cafeína.' }
];

const testimonios = [
    {
        nombre: "Juan Pérez",
        comentario: "El mejor café que he probado, lugar increible. 100% Recomendado",
        imagen: cafe1
    },
    {
        nombre: "Ana Gómez",
        comentario: "Un lugar calido y con un excelente servicio.",
        imagen: cafe2
    },
    {
        nombre: "Francisco Navarro",
        comentario: "Recomendado al 100%, especialmente las facturas y el café intenso.",
        imagen: cafe3
    }
];

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
                        <h2>¿QUIÉNES SOMOS?</h2>
                        <p>Somos una cafetería ubicada en el centro de Mendoza, a metros del Parque San Martín. Contamos con estacionamiento exclusivo y servicio take away.</p>
                    </div>
                </div>
            </div>
            <div className="section section-alt">
                <div className="card card-alt">
                    <img src={barista} alt="Barista" className="card-img2" />
                    <div className="card-content">
                        <h2>¿POR QUÉ ELEGIRNOS?</h2>
                        <p>Porque contamos con una amplia variedad de granos de café que se adaptan a tus gustos. Con granos seleccionados e incluso algunos importados.</p>
                    </div>
                </div>
            </div>
            <div className="section" id="confiteria">
                <div className="card">
                    <img src={croissant} alt="Nuestra Confitería" className="card-img" />
                    <div className="card-content">
                        <h2>NUESTRA CONFITERÍA</h2>
                        <p>Ven a probar y conocer lo mejor de Mendoza en nuestra confitería de especialidad. Contamos con los mejores productos para que disfrutes completamente esta experiencia.</p>
                    </div>
                </div>
            </div>
            <div className="section section-alt" id="carta">
                <h2>NUESTRA CARTA</h2>
                <div className="product-cards">
                    {cafes.map((cafe, index) => (
                        <div className="card" key={index}>
                            <img src={cafe.img} alt={cafe.nombre} className="card-img" />
                            <div className="card-content">
                                <h3>{cafe.nombre}</h3>
                                <p>{cafe.descripcion}</p>
                                <button>Añadir al carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section" id="testimonios">
                <h2>TESTIMONIOS</h2>
                <div className="testimonios-cards">
                    {testimonios.map((testimonio, index) => (
                        <div className="card" key={index}>
                            <img src={testimonio.imagen} alt={`Testimonio ${index + 1}`} className="card-img" />
                            <div className="card-content">
                                <h3>{testimonio.nombre}</h3>
                                <p>"{testimonio.comentario}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section section-dark" id="contacto">
    <h2>CONTACTO</h2>
    <div className="contact-content">
        <div className="contact-links">
            <h3>Síguenos en:</h3>
            <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
            </a>
        </div>
        <div className="map">
    <iframe
        title="Ubicación de la Cafetería"
        src="https://www.google.com/maps/embed?pb=!4v1718048755643!6m8!1m7!1sx1LpIYgURqd4w78tRNR83g!2m2!1d-32.98806192914351!2d-68.83052269958738!3f72.29206561813697!4f-14.462486831977273!5f0.7820865974627469"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>

        </div>
            <footer className="footer">
                <p>Derechos Reservados Lautaro Altamirano</p>
            </footer>
        </div>

    </div>
        
    );
}

export default Inicio;
