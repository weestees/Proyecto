import React, { Component } from "react";
import tarjetaInfo from "../img/tarjetainfo.png"; // Importa la imagen de la tarjeta
import perfilIcono from "../img/img_perfil.png"; // Importa la imagen del icono de usuario

class Perfil extends Component {
    render() {
        return (
            <div className="perfil-contenedor">
                {/* Encabezado del Perfil */}
                <div className="perfil-encabezado">
                    <h2>PERFIL</h2>
                    <div className="perfil-icono">
                        <img src={perfilIcono} alt="Icono de Usuario" className="icono-usuario" />
                    </div>
                </div>

                {/* Contenedor de las dos columnas */}
                <div className="perfil-bloque">
                    {/* Primera Columna */}
                    <div className="perfil-columna">
                        <h3>Información</h3>
                        <form>
                            <div className="form-grupo">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" name="first-name" placeholder="John" />
                            </div>
                            <div className="form-grupo">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" name="last-name" placeholder="Doe" />
                            </div>
                            <div className="form-grupo">
                                <label htmlFor="phone-number">Phone Number</label>
                                <input type="tel" id="phone-number" name="phone-number" placeholder="123-456-7890" />
                            </div>

                            <h3>Cambiar Contraseña</h3>
                            <div className="form-grupo">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="********" />
                            </div>
                            <div className="form-grupo">
                                <label htmlFor="new-password">New Password</label>
                                <input type="password" id="new-password" name="new-password" placeholder="********" />
                            </div>
                        </form>
                    </div>

                    {/* Segunda Columna */}
                    <div className="perfil-columna">
                        <h3>Información de la Cuenta: </h3>
                        <div className="tarjeta-info">
                            <img src={tarjetaInfo} alt="Información de Tarjeta" />
                        </div>
                        <h3>Configuración de la Cuenta</h3>

                        {/* Sección de botones de conmutación */}
                        <div className="configuracion-notificaciones">
                            <div className="notificaciones">
                                <label>Notificaciones Push</label>
                                <label className="switch">
                                    <input
                                        type="checkbox"

                                        checked={this.state.pushNotifications}
                                        onChange={this.handlePushNotificationToggle}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className="notificaciones">
                                <label>Notificaciones por Correo</label>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={this.state.emailNotifications}
                                        onChange={this.handleEmailNotificationToggle}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>

                        {/* Botón de guardar */}
            <div className="form-grupo">
              <button className="btn-guardar">
                Guardar y Continuar
              </button>
            </div>
                    </div>
                </div>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            pushNotifications: false,  // Estado para las notificaciones push
            emailNotifications: false  // Estado para las notificaciones por correo
        };
    }

    // Funciones para manejar el cambio de estado de los botones de conmutación
    handlePushNotificationToggle = () => {
        this.setState(prevState => ({
            pushNotifications: !prevState.pushNotifications
        }));
    }

    handleEmailNotificationToggle = () => {
        this.setState(prevState => ({
            emailNotifications: !prevState.emailNotifications
        }));
    }

}

export default Perfil;