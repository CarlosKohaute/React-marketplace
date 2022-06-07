import './Navbar.css';

import sacola from 'assets/icons/sacola.svg';
import shop from 'assets/shop.svg';

function Navbar() {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={shop}
            width="70px"
            alt="Logo kohaute MarketPlace"
            className="Logo__icon"
          />
          <span className="Logo__tittle"> Kohaute MarketPlace </span>
        </div>
        <div className="Header__options Options">
          <div className="Options__bag Bag">
            <img
              src={sacola}
              width="40px"
              className="Bag__icon"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
