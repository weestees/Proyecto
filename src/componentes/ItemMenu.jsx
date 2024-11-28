import React, { Component } from "react";
import perfilIcono from "../img/perfil.png"; // Importa la imagen de perfil

class ItemMenu extends Component {
    render() {
        return (
          <nav className="menu-superior">
            <div className="menu-logo">APP_NAME</div>
            <div className="menu-links">
              <a href="#home">Home</a>
              <a href="#about">Sobre Nosotros</a>
              <a href="#contact">Contáctenos</a>
              <a href="#messages" onClick={this.toggleMensajes}>
                Mensajes
              </a>
              <img src={perfilIcono} alt="Perfil" className="menu-perfil-icono" />
            </div>

            {this.state.mostrarMensajes && (
          <div className="chat-desplegable">
            <h4>Mensajes Recibidos</h4>
            <div className="mensaje-item">
              <h5>Juan</h5>
              <p>Hola, ¿cómo estás?</p>
            </div>
            <div className="mensaje-item">
              <h5>Ana</h5>
              <p>¿Podemos hablar más tarde?</p>
            </div>
            <div className="mensaje-item">
              <h5>Carlos</h5>
              <p>Te envié los documentos.</p>
            </div>
          </div>
        )}
      
          </nav>


        );
      }
  constructor(props) {
    super(props);
    // Estado para controlar la visibilidad de los mensajes
    this.state = {
      mostrarMensajes: false,
    };
  }
  // Función para alternar la visibilidad de los mensajes
  toggleMensajes = () => {
    this.setState((prevState) => ({
      mostrarMensajes: !prevState.mostrarMensajes,
    }));
  };

  
}

export default ItemMenu;