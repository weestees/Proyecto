import React from "react";
import "./Vendedores_map.css";
import perfilIcono from "../img/perfil.png";

class Vendedores_map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      vendedores: [
        { id: 1, nombre: "Vendedor 1", ubicacion: "Mañosca", estado: "Activo" },
        { id: 2, nombre: "Vendedor 2", ubicacion: "Cumbayá", estado: "Inactivo" },
        { id: 3, nombre: "Vendedor 3", ubicacion: "El Condado", estado: "Activo" },
        { id: 4, nombre: "Vendedor 4", ubicacion: "La Floresta", estado: "Activo" },
      ],
    };
  }

  handleInputChange = (event) => {
    this.setState({ busqueda: event.target.value });
  };

  render() {
    return (
      <div className="vendedores-map">
        <h2>VENDEDORES</h2>
        <div className="breadcrumb">
          Home &gt; Shop | Vendedores
        </div>

        <div className="barra-busqueda">
          <label>
            Búsqueda: 
            <input
              type="text"
              value={this.state.busqueda}
              onChange={this.handleInputChange}
              placeholder="Ingrese nombre"
            />
          </label>
        </div>

        <div className="contenedor-principal">
          <div className="lista-vendedores">
            {this.state.vendedores.map((vendedor) => (
              <div key={vendedor.id} className="cuadro-vendedor">
                <img src={perfilIcono} alt="Vendedor" className="vendedor-imagen" />
                <p className="vendedor-nombre">{vendedor.nombre}</p>
                <p className="vendedor-ubicacion">{vendedor.ubicacion}</p>
                <p className={`vendedor-estado ${vendedor.estado.toLowerCase()}`}>
                  {vendedor.estado}
                </p>
              </div>
            ))}
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
  }
}

export default Vendedores_map;
