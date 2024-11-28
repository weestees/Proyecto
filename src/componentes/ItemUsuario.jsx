import React, { Component } from "react";

class ItemUsuario extends Component {
    render() {
        const { nombre, correo, password, confpass, onChange } = this.props;

        return (
            <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', margin: '0 auto' }}>
                <h3>APP_NAME</h3>

                <label>
                    <p>Nombre:</p>
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={onChange}
                        placeholder="Ingrese el nombre de usuario"
                    />
                </label>
                <br /><br />

                <label>
                    <p>Correo Electrónico:</p>
                    <input
                        type="email"
                        name="correo"
                        value={correo}
                        onChange={onChange}
                        placeholder="Ingrese su correo electrónico"
                    />
                </label>
                <br /><br />

                <label>
                    <p>Contraseña:</p>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Ingrese su contraseña"
                    />
                </label>
                <br /><br />

                <label>
                    <p>Confirmar Contraseña:</p>
                    <input
                        type="password"
                        name="confpass"
                        value={confpass}
                        onChange={onChange}
                        placeholder="Ingrese nuevamente su contraseña"
                    />
                </label>
                <br /><br />

                <div className="button-container">
                    <button type="button" onClick={this.props.onRegister}>
                        REGISTRARSE
                    </button>
                </div>
            </div>
        );
    }
}

export default ItemUsuario;