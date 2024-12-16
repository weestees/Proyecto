import React from "react";
import "./EstadoEntrega.css";
import perfilIcono from "../img/perfil.png";
import { Link } from "react-router-dom";

class EstadoEntrega extends React.Component {
  render() {
    return (
      <div className="fondo-compra">
        <h2>SHOP</h2>
        <div className="breadcrumb">
          Home &gt; Shop | Carrito | Entrega
        </div>

        <div className="contenedor-principal">
          <div className="informacion-seccion">
            {/* Estado de entrega */}
            <div className="filtro">
              <h3>Estado de entrega:</h3>
              <p>La entrega está en camino.</p>
            </div>

            {/* Información del vendedor */}
            <div className="informacion-vendedor">
              <h3>Información del vendedor:</h3>
              <div className="vendedor">
                <img src={perfilIcono} alt="Vendedor" className="vendedor-imagen" />
                <p className="vendedor-nombre">Vendedor 1</p>
                <p className="vendedor-ranking">Ranking 3</p>
              </div>
              <div className="vendedor-detalles">
                <p><strong>Nombre:</strong> [Nombre del vendedor]</p>
                <p><strong>Número:</strong> [Número del vendedor]</p>
                <p><strong>Detalles:</strong> [Detalles adicionales del vendedor]</p>
              </div>
            </div>

            {/* Botón Atrás */}
            <Link to="/estado-entrega" className="boton-atras">Atrás</Link>
          </div>

          <div className="mapa-cuadro">
            <iframe
              title="Mapa de Google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997411.0599582426!2d-78.72719837591333!3d-0.18659357444425203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a291af61f35%3A0xf0a74310d3fbdac0!2sQuito%2C%20Ecuador!5e0!3m2!1ses-419!2sus!4v1699886326000!5m2!1ses-419!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }r
}

export default EstadoEntrega;
