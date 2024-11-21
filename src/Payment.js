import React, { useState } from 'react';
import './Payment.css';

function App() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  return (
    <div className="payment-container">
      {/* Dirección de Envio */}
      <div className="shipping-info">
        <h2>Dirección de Envio</h2>
        <div className="input-box">
          <input type="text" placeholder="Nombre Cliente" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Dirección General" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Dirección Específica" />
        </div>
      </div>

      {/* Métodos de Pago */}
      <div className="payment-methods">
        <h2>Métodos de Pago</h2>
        {['Tarjeta de Crédito', 'Amazon Giftcard', 'Steam Giftcard', 'Otras Tarjetas'].map((method, index) => (
          <div className="method" key={index}>
            <input
              type="radio"
              id={method.toLowerCase().replace(' ', '-')}
              name="payment-method"
              value={method.toLowerCase().replace(' ', '-')}
              checked={paymentMethod === method.toLowerCase().replace(' ', '-')}
              onChange={() => setPaymentMethod(method.toLowerCase().replace(' ', '-'))}
            />
            <label htmlFor={method.toLowerCase().replace(' ', '-')}>{method}</label>
          </div>
        ))}

        <div className="method disabled">
          <input type="radio" id="bank-transfer" name="payment-method" disabled />
          <label htmlFor="bank-transfer">Transferencia Bancaria</label>
        </div>
        <div className="method disabled">
          <input type="radio" id="cash" name="payment-method" disabled />
          <label htmlFor="cash">Efectivo</label>
        </div>
      </div>

      {/* Resumen del Producto */}
      <div className="product-summary">
        <h2>Producto</h2>
        <div className="product-details">
          <span>Gas</span>
          <span>x 1</span>
        </div>
        <div className="summary">
          <div className="subtotal">
            <span>Subtotal:</span>
            <span>$10</span>
          </div>
          <div className="total">
            <span>Total:</span>
            <span>$10.5</span>
          </div>
        </div>
        <button className="pay-button">PAGAR</button>
        <p className="privacy-text">
          Sus datos personales se utilizarán para respaldar su experiencia en este sitio web,
          para administrar el acceso a su cuenta y para otros fines descritos en nuestra
          política de privacidad.
        </p>
      </div>
    </div>
  );
}

export default App;
