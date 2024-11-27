import React, { useState } from 'react';
import './Payment.css';

function App() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [subPaymentMethod, setSubPaymentMethod] = useState('');

  return (
    <>
      <div className="payment-container">
        <div className="payment-header">
          <h1>PAGO</h1>
        </div>
        <div className="payment-content">
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
            {['Tarjeta de Crédito', 'Pago en Efectivo', 'Transferencia Bancaria'].map((method, index) => (
              <div className="method" key={index}>
                <input
                  type="radio"
                  id={method.toLowerCase().replace(' ', '-')}
                  name="payment-method"
                  value={method.toLowerCase().replace(' ', '-')}
                  checked={paymentMethod === method.toLowerCase().replace(' ', '-')}
                  onChange={() => {
                    setPaymentMethod(method.toLowerCase().replace(' ', '-'));
                    setSubPaymentMethod('');
                  }}
                />
                <label htmlFor={method.toLowerCase().replace(' ', '-')}>{method}</label>
              </div>
            ))}

            {paymentMethod === 'tarjeta-de-crédito' && (
              <div className="sub-payment-methods">
                {['Amazon Giftcard', 'Steam Giftcard', 'Otras Tarjetas'].map((subMethod, index) => (
                  <div className="method" key={index}>
                    <input
                      type="radio"
                      id={subMethod.toLowerCase().replace(' ', '-')}
                      name="sub-payment-method"
                      value={subMethod.toLowerCase().replace(' ', '-')}
                      checked={subPaymentMethod === subMethod.toLowerCase().replace(' ', '-')}
                      onChange={() => setSubPaymentMethod(subMethod.toLowerCase().replace(' ', '-'))}
                    />
                    <label htmlFor={subMethod.toLowerCase().replace(' ', '-')}>{subMethod}</label>
                  </div>
                ))}
              </div>
            )}
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
      </div>
    </>
  );
}

export default App;
