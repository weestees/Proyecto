// import logo from './logo.svg';
import './Transacciones.css';
// import logo from './flama.png';
// import icono from './iconoIngresar.png';
import PaginaBarra from '../componentes/PaginaBarra';
import BarraBusqueda from '../componentes/BarraBusqueda';
import TablaPedidos from '../componentes/TablaPedidos';
import Header from '../componentes/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contenido-principal">
        <button className="boton-atras">&lt; Atrás</button>
        <div className="gestion-pedidos">
          <h2>Transacciones</h2>
          <BarraBusqueda />
          <TablaPedidos />
          <PaginaBarra />
        </div>
      </div>
    </div>
  );
}

export default App;
