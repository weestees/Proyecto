// import logo from './logo.svg';
import './GestionPedidos.css';
import Header from '../componentes/Header';
import MenuPestanas from '../componentes/MenuPestanas';
import PaginaBarra from '../componentes/PaginaBarra';
import BarraBusqueda from '../componentes/BarraBusqueda';
import TablaPedidos from '../componentes/TablaPedidos';

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