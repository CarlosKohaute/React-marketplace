import React, { useState } from 'react';
import { cells } from './mocks/cells.js';
import './CellList.css';

function CellList() {
  const [selectedCell, setSelectedCell] = useState({});
  const itemAdd = (cellIndex) => {
    const cell = { [cellIndex]: Number(selectedCell[cellIndex] || 0) + 1 };
    setSelectedCell({ ...selectedCell, ...cell});
  };

  const itemRemove = (cellIndex) => {
    const cell = { [cellIndex]: Number(selectedCell[cellIndex] || 0) - 1 };
    setSelectedCell({ ...selectedCell, ...cell});
  };

  const badgeCounter = (canRender, index) =>
	Boolean(canRender) && (<span className="CellListItem__badge"> {selectedCell[index]} </span>);

  const removebutton = (canRender, index) =>
	Boolean(canRender) && (<button className='Actions__remove' onClick={() => itemRemove(index)}>remover</button>);

  return (
    <div className="CellList">
      {cells.map((cell, index) => (
        <div className="CellListItem" key={`CellListItem-${index}`}>
	{badgeCounter(selectedCell[index], index)}
          <div>
            <div className="CellListItem__name">{cell.name}</div>
            <div className="CellListItem__price">{cell.price.toFixed(2)}</div>
            <div className="CellListItem__description">{cell.description}</div>
            <div className="CellListItem__actions Actions">
            <button className={`Actions__add ${!selectedCell[index] && "Actions__add-fill"}`} onClick={() => itemAdd(index)}>adicionar</button>
            {removebutton(selectedCell[index], index)}
           </div>
          </div>
          <img
            className="CellListItem__photo"
            src={cell.photo}
            alt={`Celular: ${cell.name}`}
          />
        </div>
      ))}
    </div>
  );
}

export default CellList;
