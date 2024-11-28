// import logo from './logo.svg';
import './SobreNosotros.css';
import logo from '../img/flama.png';
// import icono from './iconoIngresar.png';
import Seccion from '../componentes/Seccion';
import ItemMenu from '../componentes/ItemMenu';

function App() {
  return (
    <div className="App">
      <ItemMenu/>
      <div className="contenido-principal">
        <Seccion logo={logo} />
      </div>
    </div>
  );
}

export default App;
