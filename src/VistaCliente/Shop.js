// import logo from './logo.svg';
import './Shop.css';
import React from "react";
import logo from '../img/flama.png';
import icono from '../img/iconoIngresar.png';
import Header from '../componentes/Header';
import ContenedorShop from '../componentes/ContenedorShop';
import InformacionProducto from '../componentes/InformacionProducto';
import ProductoDetalle from '../componentes/ProductoDetalle';

function App() {
  return (
    <div className="App">
      <Header logo={logo} icono={icono} />
      <ContenedorShop />
      <div className="contenido-principal">
        <ProductoDetalle />
        <InformacionProducto />
      </div>
    </div>
  );
}

export default App;
