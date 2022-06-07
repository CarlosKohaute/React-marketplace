import { cells } from 'mocks/cells';
import React, {useState} from 'react';
import './CellList.css';

function CellList() {
  const [chosedCell, setChosedCell] = useState({});

  const itemRemove = (cellIndex) => {
    const cell = { [cellIndex]: Number(chosedCell[cellIndex] || 0) -1 }
    setChosedCell({...chosedCell, ...cell});
}

  const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="CellListItem__badge"> {chosedCell[index]} </span>);

  const itemAdd = (cellIndex) => {
          const cell = { [cellIndex]: Number(chosedCell[cellIndex] || 0) +1 }
          setChosedCell({ ...chosedCell, ...cell});
  }

  const removeButton = (canRender, index) =>
	Boolean(canRender) && (<button className="Actions__remove" onClick={() => itemRemove(index)}>remover</button>);

  return (
    <div className="CellList">
      {cells.map((cell, index) =>(
      <div className="CellListItem"   key={`CellListItem-${index}`}>
        	{badgeCounter(chosedCell[index], index)}

        <div>
          <div className="CellListItem__name">{cell.name}</div>
          <div className="CellListItem__price">R$ {cell.price.toFixed(2)}</div>
          <div className="CellListItem__description">
          {cell.description}
          </div>
          <div className="CellListItem__actions Actions">
            <button className={`Actions__add ${!chosedCell[index] && "Actions__add--fill"}`}onClick={() => itemAdd(index)}>
              Adicionar
            </button>
            {removeButton(chosedCell[index], index)}
          </div>
        </div>
        <img className="CellListItem__photo" src={cell.photo} alt={cell.name} />
      </div>
      ) )}
    </div>
  );
}

export default CellList;
