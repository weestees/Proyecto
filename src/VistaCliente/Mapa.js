import './Mapa.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemMenu from '../Components/ItemMenu';
import EstadoEntrega from '../Components/EstadoEntrega';
import Pago from '../Components/Pago';
import VendedoresMap from '../Components/Vendedores_map';
import InventarioLista from '../Components/InventarioLista';
import DetalleProducto from '../Components/DetalleProducto';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            {/* Ruta principal que muestra Pago */}
            <Route
              path="/"
              element={<ItemMenu contenido={<Pago />} rutaAtras={null} />}
            />
            {/* Ruta para EstadoEntrega */}
            <Route
              path="/estado-entrega"
              element={<ItemMenu contenido={<EstadoEntrega />} rutaAtras="/vendedores-map" />}
            />
            {/* Ruta para VendedoresMap */}
            <Route
              path="/vendedores-map"
              element={<ItemMenu contenido={<VendedoresMap />} rutaAtras="/" />}
            />
            {/* Ruta para Inventario */}
            <Route
              path="/inventario"
              element={<ItemMenu contenido={<InventarioLista />} rutaAtras="/" />}
            />
            {/* Ruta dinámica para mostrar detalles de un producto */}
            <Route
              path="/producto/:id"
              element={<ItemMenu contenido={<DetalleProducto />} rutaAtras="/inventario" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
