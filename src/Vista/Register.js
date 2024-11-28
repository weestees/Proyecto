//import logo from './logo.svg';
import './Register.css';
import React from "react";
import ItemUsuario from './componentes/ItemUsuario';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Pasar los datos y funciones necesarias a ItemUsuario */}
        <ItemUsuario
          nombre={this.state.nombre}
          correo={this.state.correo}
          password={this.state.password}
          confpass={this.state.confpass}
          onChange={this.handleChange}
          onRegister={this.handleRegister}
        />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      correo: '',
      password: '',
      confpass: ''
    };
  }

  // Manejar cambios en los campos del formulario
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Manejar el registro cuando se hace clic en "Registrarse"
  handleRegister = () => {
    const { nombre, correo, password, confpass } = this.state;
    if (password === confpass) {
      alert(`Usuario registrado: ${nombre}, ${correo}`);

    } else {
      alert("Las contraseñas no coinciden.");
    }
  };
}



export default App;
