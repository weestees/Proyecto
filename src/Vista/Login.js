import React from 'react';
import './App.css';
import logo from './flama.png';

class App extends React.Component {
  render() {
    return (
      <div className="Aplicacion">
        <div className="contenedor-login">
          <div className="contenedor-logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <h1 className="nombre-aplicacion">APP_NAME</h1>
          <div className="formulario-login">
            <div className="usuario">
              <label>Usuario:</label>
              <input type="text" placeholder="Ingrese su usuario" />
            </div>
            <div className='password'>
              <label>Contraseña:</label>
              <input type="password" placeholder="Ingrese su contraseña" />
            </div>
          </div>
          <div>
            <button className="boton-ingresar">INGRESAR</button>
          </div>

          <div className="contenedor-crear-cuenta">
            <p>¿No tiene una cuenta?</p> 
            <a href="/register">Cree una cuenta</a>
          </div>
          <footer className="pie-de-pagina">
            Derechos Reservados (C) - 2024-2025
          </footer>
          
        </div>
        <div className="contenedor-imagen">
          <img src="https://www.camaraofespanola.org/files/Afiliados/Images/Duragas.jpg" alt="Imagen de fondo" />
        </div>
        

      </div>
    );
  }
}

export default App;
