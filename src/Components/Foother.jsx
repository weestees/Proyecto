import React from "react";
import "./Foother.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-item">
        <img src=" https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F710%2F710078.png&f=1&nofb=1&ipt=e074de9d016add0ecccd64fc4022060e2e70512579d318bd51c4a563216989c1&ipo=images" alt="Alta Calidad" />
        <span>Alta Calidad</span>
      </div>
      <div className="footer-item">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fgarantia-png-6.png&f=1&nofb=1&ipt=1996b90562918a1db49985872082608593d1f61f3c24a55a7d38593677b590cf&ipo=images" alt="Garantía de Protección" />
        <span>Garantía de Protección</span>
      </div>
      <div className="footer-item">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230427%2Foriginal%2Fpngtree-shipping-line-icon-png-image_9117422.png&f=1&nofb=1&ipt=f02180f877871027df2a318e35cd644130ac6280e9f5fb8e3414da5bc8bbfcb2&ipo=images" alt="Envío Gratis" />
        <span>Envío Gratis<br />Orden mayor a $100</span>
      </div>
      <div className="footer-item">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F2618%2F2618521.png&f=1&nofb=1&ipt=78dcc5647a77f4f3e272cbba7e13b5c61fa40f60dd7b022be86aab5c8d62b8bf&ipo=images" alt="24 / 7 Soporte" />
        <span>24 / 7 Soporte</span>
      </div>
    </footer>
  );
};

export default Footer;
