// import logo from './logo.svg';
import './App.css';
import logo from './flama.png';
// import icono from './iconoIngresar.png';
import Seccion from './Componentes/Seccion';
import Header from './Componentes/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="contenido-principal">
        <Seccion logo={logo} />
      </div>
    </div>
  );
}

export default App;
