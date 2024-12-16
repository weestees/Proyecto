// import logo from './logo.svg';
import './Transacciones.css';
// import logo from './flama.png';
// import icono from './iconoIngresar.png';
import PaginaBarra from '../Components/PaginaBarra';
import BarraBusqueda from '../Components/BarraBusqueda';
import TablaPedidos from '../Components/TablaPedidos';

function App() {
  return (
    <div className="App">
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
