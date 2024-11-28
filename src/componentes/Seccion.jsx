import React from 'react';

const Seccion = ({ logo }) => {
  return (
    <div className="seccion-sobre-nosotros">
      <div className="imagen-equipo">
        <img src={require('../img/equipo.png')} alt="Equipo" />
      </div>
      <div className="texto-sobre-nosotros">
        <div className="compania-name">
          <img src={logo} alt="logo1" className="logo1" />
          <h2>COMPANY NAME</h2>
        </div>
        <div className="descripcion">
          <p>
            En COMPANY NAME, creemos en la comodidad y transparencia para nuestros usuarios.
            Con solo unos clics, puedes comparar precios, revisar la disponibilidad en tiempo real
            y realizar pedidos de gas a domicilio desde cualquier lugar.
          </p>
          <p>
            Nos esforzamos por brindar un servicio confiable y eficiente, apoyando tanto a los
            consumidores como a los proveedores locales, ayudando a que todos tengan acceso
            a energía en un solo lugar. Únete a COMPANY NAME y descubre una nueva manera de
            comprar y vender gas en tu ciudad.
          </p>
        </div>
        <div className="acciones">
          <button className="boton-leer-mas">LEER MÁS</button>
        </div>
      </div>
    </div>
  );
};

export default Seccion;
