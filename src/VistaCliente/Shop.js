// import logo from './logo.svg';
import './Shop.css';
import React from "react";
import logo from '../img/flama.png';
import icono from '../img/iconoIngresar.png';
import Header from '../Components/Header';
import ContenedorShop from '../Components/ContenedorShop';
import InformacionProducto from '../Components/InformacionProducto';
import ProductoDetalle from '../Components/ProductoDetalle';

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
