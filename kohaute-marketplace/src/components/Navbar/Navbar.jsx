import './Navbar.css';
import { ActionMode } from 'constants/index';

import sacola from 'assets/icons/sacola.svg';
import shop from 'assets/shop.svg';
import paleta from 'assets/icons/paleta.svg';
import atualizar from 'assets/icons/atualizar.svg';

function Navbar({ createCell, updateCell, mode }) {
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
          <button
            type="button"
            className={`Options__cell  Cell ${
              mode === ActionMode.ATUALIZE && 'Active--cell'
            }`}
            onClick={() => updateCell()}
          >
            <img
              src={atualizar}
              width="40px"
              className="Cell__icon"
              alt="Editar celular"
            />
          </button>
          <button
            type="button"
            className="Options__cell Cell"
            onClick={() => createCell()}
          >
            <img
              src={paleta}
              width="40px"
              className="Cell__icon"
              alt="Adicionar um celular"
            />
          </button>
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
