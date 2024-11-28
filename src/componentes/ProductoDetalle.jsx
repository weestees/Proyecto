import React from 'react';

const ProductoDetalle = () => {
  return (
    <div className="producto-detalle">
      <div className="imagenes">
        <div className="miniaturas">
          <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Miniatura 1" />
          <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Miniatura 2" />
          <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Miniatura 3" />
          <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Miniatura 4" />
        </div>

        <div className="imagen-producto">
          <img src="https://agas.ec/25-large_default/cilindros-15kg-duragas.jpg" alt="Gas duragas" />
        </div>
      </div>

      <div className="info-producto">
        <h3>Gas Duragas</h3>
        <p className="precio">$3.50</p>
        <p className="rating">⭐⭐⭐⭐⭐ | 5 Reseñas de Clientes</p>
        <p className="descripcion">
          Ideal para tu hogar, este gas comprimido de alta calidad es perfecto para cocinar, calentar agua
          y calefacción. Viene en cilindros de fácil manejo, garantizando comodidad y seguridad en su uso.
          A un precio accesible de $3.50, es la opción perfecta para mantener tu hogar siempre listo y funcionando
          con eficiencia. ¡Obtén el tuyo y disfruta de la comodidad del gas en casa!
        </p>
        <div className="acciones">
          <input type="number" defaultValue="1" min="1" className="cantidad" />
          <button className="btn">Agregar a Carrito</button>
          <button className="btn">+ Comparar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
