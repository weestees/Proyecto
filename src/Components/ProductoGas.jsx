import React, { Component } from "react";

class ProductoGas extends Component {
    render() {
        const { nombre, precio, tipo, imagen } = this.props;
    
        return (
          <div className="producto-gas">
            <img src={imagen} alt={`${nombre}`} className="imagen-producto" />
            <h4>{nombre}</h4>
            <p>Tipo: {tipo}</p>
            <p>Precio: ${precio}</p>
          </div>
        );
      }
}


export default ProductoGas;