// import logo from './logo.svg';
import './Productos.css';
import React from 'react';
import logo from './flama.png';
import icono from './iconoIngresar.png';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {/* Header */}
        <header className="header">
          <div className="contenedor-logo">
            <img src={logo} alt="Logo" className="logo" />
            <h1>APP_NAME</h1>
          </div>
          
          <div className="contenedor-informativo">
            <nav>
              <a href="#home">Home</a>
              <a href="#about">Sobre Nosotros</a>
              <a href="#contact">Contáctenos</a>
              <a href="#messages">Mensajes</a>
            </nav>
            <img src={icono} alt="icono" className="profile-icon"/>
          </div>
          
        </header>

        <div className="contenedor-shop">
          <h2> Shop</h2>
          <p> Home {'>'} Shop</p>
        </div>

        <div className="product-header">
          <div className="barra-busqueda">
            <span>Búsqueda: </span>
            <input type="text" placeholder="Búsqueda" className="search-bar" />
          </div>
          <div className='barra-mostrar'>
            <span>Mostrar: </span>
            <select>
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
            <span> | Mostrando 1-12 de 32 resultados </span>
            <button className="map-button">VER MAPA</button>
          </div>
          
        </div>

        <div className="contenido-principal">
          
          <div className="filtros">
            <h3>FILTROS</h3>
            <div className="grupo-filtros">
              <h4>TIPOS:</h4>
              <div>
                <label>GLP en Cilindros</label>
                <div>
                  <div> <input type="checkbox" /> Doméstico </div>
                  <div> <input type="checkbox" /> Comercial e Industrial </div>
                </div>
                
              </div>
              <div>
                <label>GLP a granel</label>
                <div>
                  <div> <input type="checkbox" /> Residencial </div>
                  <div> <input type="checkbox" /> Industrial </div>
                  <div> <input type="checkbox" /> AgroIndustrial </div>
                </div>
                
              </div>
            </div>
            <div className="grupo-filtros">
              <h4>PRECIOS:</h4>
              
            </div>
            <div className="grupo-filtros">
              <h4>TIPO DE ENTREGA:</h4>
              
            </div>
            <div className="grupo-filtros">
              <h4>OTROS:</h4>
              
            </div>
          </div>

                    
          <section className="cuadro-productos">
            <div className="item-producto">
              <img src="https://www.duragas.com.ec/wp-content/uploads/2020/01/domestico.png" alt="Gas duragas" />
              <div className='descripcion'>
                <h4>Gas DURAGAS</h4>
                <p>Doméstico</p>
                <p>$3.50</p>
              </div>
            </div>

            <div className="item-producto">
              <img src="https://www.congasca.com/wp-content/uploads/2022/10/congas-cilindro.png" alt="Gas duragas" />
              <div className='descripcion'>
                <h4>Gas CONGAS</h4>
                <p>Doméstico</p>
                <p>$3.50</p>
              </div>
            </div>
            <div className="item-producto">
              <img src="https://www.kissu.com.ec/imagenes//productos/lg/16789070110.jpg" alt="Gas duragas" />
              <div className='descripcion'>
                <h4>Gas AGRIGAS</h4>
                <p>Doméstico</p>
                <p>$3.50</p>
              </div>
            </div>
            <div className="item-producto">
              <img src="https://www.kissu.com.ec/imagenes//productos/lg/16789070110.jpg" alt="Gas duragas" />
              <div className='descripcion'>
                <h4>Gas AGRIGAS</h4>
                <p>Doméstico</p>
                <p>$3.50</p>
              </div>
            </div>
            <div className="item-producto">
              <img src="https://www.congasca.com/wp-content/uploads/2022/10/congas-cilindro.png" alt="Gas duragas" />
              <div className='descripcion'>
                <h4>Gas CONGAS</h4>
                <p>Doméstico</p>
                <p>$3.50</p>
              </div>
            </div>
            <div className="item-producto">
              <img src="https://www.duragas.com.ec/wp-content/uploads/2020/01/domestico.png" alt="Gas duragas" />
              <div className='descripcion'>
                <h4>Gas DURAGAS</h4>
                <p>Doméstico</p>
                <p>$3.50</p>
              </div>
            </div>
                                
          </section>
        </div>
      </div>
    );
  }
}

export default App;
