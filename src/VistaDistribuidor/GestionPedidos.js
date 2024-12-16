// import logo from './logo.svg';
import './GestionPedidos.css';
import Header from '../Components/Header';
import MenuPestanas from '../Components/MenuPestanas';
import PaginaBarra from '../Components/PaginaBarra';
import BarraBusqueda from '../Components/BarraBusqueda';
import TablaPedidos from '../Components/TablaPedidos';

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