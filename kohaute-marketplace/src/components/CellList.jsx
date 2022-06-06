import { cells } from 'mocks/cells';
import './CellList.css';

function CellList() {
  return (
    <div className="CellList">
      {cells.map((cell, index) =>(
      <div className="CellListItem">
        <div>
          <div className="CellListItem__name">{cell.name}</div>
          <div className="CellListItem__price">R$ {cell.price.toFixed(2)}</div>
          <div className="CellListItem__description">
          {cell.description}
          </div>
          <div className="CellListItem__actions Actions">
            <button className="Actions__add Actions__add--fill">
              Adicionar
            </button>
          </div>
        </div>
        <img className="CellListItem__photo" src={cell.photo} alt={cell.name} />
      </div>
      ) )}
    </div>
  );
}

export default CellList;
