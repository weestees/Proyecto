// import logo from './logo.svg';
import './Shop.css';
import React from "react";
import logo from './flama.png';
import icono from './iconoIngresar.png';
import Header from './Componentes/Header';
import ContenedorShop from './Componentes/ContenedorShop';
import InformacionProducto from './Componentes/InformacionProducto';
import ProductoDetalle from './Componentes/ProductoDetalle';

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
