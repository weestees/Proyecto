import './Perfil.css';
import React from "react";
import ItemMenu from './componentes/ItemMenu';
import Perfil from './componentes/Perfil';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Menú superior */}
        <ItemMenu />
        {/* Componente de Perfil */}
        <Perfil />
      </div>
    );
  }
}

export default App;
