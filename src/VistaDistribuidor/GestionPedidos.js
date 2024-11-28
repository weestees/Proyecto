// import logo from './logo.svg';
import './GestionPedidos.css';
import Header from './Componentes/Header';
import MenuPestanas from './Componentes/MenuPestanas';
import PaginaBarra from './Componentes/PaginaBarra';
import BarraBusqueda from './Componentes/BarraBusqueda';
import TablaPedidos from './Componentes/TablaPedidos';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contenido-principal">
        <button className="boton-atras">&lt; Atrás</button>
        <div className="gestion-pedidos">
          <h2>Gestión de Pedidos</h2>
          <MenuPestanas />
          <BarraBusqueda />
          <TablaPedidos />
          <PaginaBarra />
        </div>
      </div>
    </div>
  );
}

export default App;