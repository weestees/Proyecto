// import logo from './logo.svg';
import './Inventario.css';
//import logo from './flama.png';
//import icono from './iconoIngresar.png';
import PaginaBarra from '../Components/PaginaBarra';
import BarraBusqueda from '../Components/BarraBusqueda';
import TablaPedidos from '../Components/TablaPedidos';
import Estadisticas from '../Components/Estadisticias';

function App() {
  return (
    <div className="App">
      <div className="contenido-principal">
        <button className="boton-atras">&lt; Atrás</button>
        <div className="gestion-pedidos">
          <h2>Inventario</h2>
          <Estadisticas />
          <BarraBusqueda />
          <TablaPedidos />
          <PaginaBarra />
        </div>
      </div>
    </div>
  );
}

export default App;
