import React from "react";
import amazonIcon from "../img/amazongfc.png"; 
import steamIcon from "../img/steamgfc.png"; 
import itunesIcon from "../img/itunesgfc.png";

const Pago = () => {
    return (
        <div className="pago-contenedor">
            {/* Historial de Transacciones */}
            <div className="historial-transacciones">
                <h2>Historial de Transacciones</h2>
                {/* Total */}
                <div className="circulo grande">
                    <span>Número Total</span>
                    <h3>50</h3>
                </div>
                {/* Subtotales */}
                <div className="circulos-fila">
                    <div className="circulo pequeno">
                        <h3>✓</h3>
                        <span>Successful</span>
                        <h3>47</h3>
                    </div>
                    <div className="circulo pequeno">
                        <h3>...</h3>
                        <span>En Progreso</span>
                        <h3>02</h3>
                    </div>
                    <div className="circulo pequeno">
                        <h3>X</h3>
                        <span>Canceladas</span>
                        <h3>01</h3>
                    </div>
                </div>
                {/* Total */}
                <div className="total">
                    <span>TOTAL</span>
                    <h3>$100</h3>
                </div>
            </div>

            {/* Transacciones Recientes */}
      <div className="transacciones-recientes">
        <h2>Transacciones Recientes</h2>
        <ul className="lista-transacciones">
          <li>
            <img src={amazonIcon} alt="Amazon Giftcard" className="icono-transaccion" />
            <div>
              <span>Amazon Giftcard</span>
              <span className="valor">$50.00</span>
            </div>
            <div>
              <span>01 Nov 2024</span>
              <span className="estado successful">Successful</span>
            </div>
          </li>
          <li>
            <img src={steamIcon} alt="Steam Giftcard" className="icono-transaccion" />
            <div>
              <span>Steam Giftcard</span>
              <span className="valor">$20.00</span>
            </div>
            <div>
              <span>15 Nov 2024</span>
              <span className="estado in-progress">In Progress</span>
            </div>
          </li>
          <li>
            <img src={itunesIcon} alt="iTunes Giftcard" className="icono-transaccion" />
            <div>
              <span>iTunes Store Giftcard</span>
              <span className="valor">$30.00</span>
            </div>
            <div>
              <span>20 Nov 2024</span>
              <span className="estado failed">Failed</span>
            </div>
          </li>
          <li>
            <img src={amazonIcon} alt="Amazon Giftcard" className="icono-transaccion" />
            <div>
              <span>Amazon Giftcard</span>
              <span className="valor">$50.00</span>
            </div>
            <div>
              <span>01 Nov 2024</span>
              <span className="estado successful">Successful</span>
            </div>
          </li>
          <li>
            <img src={steamIcon} alt="Steam Giftcard" className="icono-transaccion" />
            <div>
              <span>Steam Giftcard</span>
              <span className="valor">$20.00</span>
            </div>
            <div>
              <span>15 Nov 2024</span>
              <span className="estado in-progress">In Progress</span>
            </div>
          </li>
          <li>
            <img src={itunesIcon} alt="iTunes Giftcard" className="icono-transaccion" />
            <div>
              <span>iTunes Store Giftcard</span>
              <span className="valor">$30.00</span>
            </div>
            <div>
              <span>20 Nov 2024</span>
              <span className="estado failed">Failed</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default Pago;