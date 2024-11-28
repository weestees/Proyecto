import './ListShop.css';
import React from "react";
import ItemMenu from './componentes/ItemMenu';
import ProductoGas from './componentes/ProductoGas';
//import fondoCompra from './img/fondo_compra.jpg';

class App extends React.Component {
  render() {
    const productosFiltrados = this.filtrarProductos();

    return (
      <div className="App">
        {/* Menú superior */}
        <ItemMenu />

        {/* Contenido principal */}
        <div className="fondo-compra">
        <h2>MAPA</h2>
          <div className="breadcrumb">
            Home &gt; Tienda &gt; Mapa
          </div>

          {/* Barra de búsqueda y botón de mapa */}
          <div className="busqueda">
            <label>
              Búsqueda:
              <input type="text" placeholder="Por nombre" />
            </label>
            <button className="boton-mapa" onClick={this.toggleMapa}>
              Ver Mapa
            </button>
          </div>

          <div className="contenedor-principal">
            {/* Filtro de tipo de gas */}
            <div className="filtro">
              <h3>Filtrar por tipo de gas</h3>
              <label>
                <input
                  type="checkbox"
                  name="domestico"
                  checked={this.state.filtro.domestico}
                  onChange={this.handleFiltroChange}
                />
                Doméstico
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="industrial"
                  checked={this.state.filtro.industrial}
                  onChange={this.handleFiltroChange}
                />
                Industrial
              </label>
            </div>

            {/* Lista de productos */}
            <div className="lista-productos">
              <h3>Lista de productos</h3>
              <div className="productos-grid">
                {productosFiltrados.map((prod, index) => (
                  <ProductoGas
                    key={index}
                    nombre={prod.nombre}
                    precio={prod.precio}
                    tipo={prod.tipo}
                    imagen={prod.imagen}
                  />
                ))}
              </div>
            </div>
             {/* Cuadro del mapa */}
             {this.state.mostrarMapa && (
              <div className="mapa-cuadro">
                <iframe
                  title="Mapa de Google"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997411.0599582426!2d-78.72719837591333!3d-0.18659357444425203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a291af61f35%3A0xf0a74310d3fbdac0!2sQuito%2C%20Ecuador!5e0!3m2!1ses-419!2sus!4v1699886326000!5m2!1ses-419!2sus"
                  width="300"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      productos: [
        { nombre: "Gas Doméstico 10kg", precio: 30, tipo: "domestico", imagen: require("./img/domestico10kg.png") },
        { nombre: "Gas Industrial 20kg", precio: 50, tipo: "industrial", imagen: require("./img/industrial20kg.jpg") },
        { nombre: "Gas Doméstico 5kg", precio: 20, tipo: "domestico", imagen: require("./img/domestico5kg.jpg") },
        { nombre: "Gas Industrial 50kg", precio: 100, tipo: "industrial", imagen: require("./img/industrial50kg.jpeg") }
      ],
      filtro: {
        domestico: true,
        industrial: true,
      },
      mostrarMapa: false
    };
  }

  handleFiltroChange = (event) => {
    const { name, checked } = event.target;
    this.setState(prevState => ({
      filtro: {
        ...prevState.filtro,
        [name]: checked
      }
    }));
  };

  filtrarProductos = () => {
    const { productos, filtro } = this.state;
    return productos.filter(prod => filtro[prod.tipo]);
  };

  toggleMapa = () => {
    this.setState(prevState => ({ mostrarMapa: !prevState.mostrarMapa }));
  };

}

export default App;
