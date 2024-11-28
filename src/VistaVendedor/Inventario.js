// import logo from './logo.svg';
import './Inventario.css';
//import logo from './flama.png';
//import icono from './iconoIngresar.png';
import Header from './Componentes/Header';
import PaginaBarra from './Componentes/PaginaBarra';
import BarraBusqueda from './Componentes/BarraBusqueda';
import TablaPedidos from './Componentes/TablaPedido';
import Estadisticas from './Componentes/Estadisticias';

function App() {
  return (
    <div className="App">
      <Header />
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
