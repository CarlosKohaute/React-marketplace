import './Navbar.css';

import sacola from 'assets/icons/sacola.svg';
import shop from 'assets/shop.svg';

function Navbar() {
  return ( 
    <div className="Home__header Header">
    <div className="row">
      <div className="Header__logo Logo">
        <img
          src={shop}  width="70px"  alt="Logo MarketPlace" className="Logo__icone"/>
        <span className="Logo__titulo"> Kohaute Place </span>
      </div>
      <div className="Header__opcoes Opcoes">
        <div className="Opcoes__sacola Sacola">
          <img
            src={sacola} width="40px" className="Sacola__icone"  alt="Sacola de compras" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navbar;