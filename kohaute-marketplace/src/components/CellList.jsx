import { cells } from 'mocks/cells';
import React, {useState} from 'react';
import './CellList.css';

function CellList() {
  const [chosedCell, setChosedCell] = useState({});

  const itemAdd = (cellIndex) => {
          const cell = { [cellIndex]: Number(chosedCell[cellIndex] || 0) +1 }
          setChosedCell({ ...chosedCell, ...cell});
  }

  return (
    <div className="CellList">
      {cells.map((cell, index) =>(
      <div className="CellListItem"   key={`CellListItem-${index}`}>
        	<span className="CellListItem__badge"> {chosedCell[index] || 0} </span>

        <div>
          <div className="CellListItem__name">{cell.name}</div>
          <div className="CellListItem__price">R$ {cell.price.toFixed(2)}</div>
          <div className="CellListItem__description">
          {cell.description}
          </div>
          <div className="CellListItem__actions Actions">
            <button className="Actions__add Actions__add--fill" onClick={() => itemAdd(index)}>
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
