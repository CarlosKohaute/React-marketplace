import { cells } from 'mocks/cells';
import React, { useState } from 'react';
import './CellList.css';
import CellListItem from './CellListItem/CellListItem';

function CellList() {
  const [chosedCell, setChosedCell] = useState({});

  const itemAdd = (cellIndex) => {
    const cell = { [cellIndex]: (chosedCell[cellIndex] || 0) + 1 };
    setChosedCell({ ...chosedCell, ...cell });
  };

  const itemRemove = (cellIndex) => {
    const cell = { [cellIndex]: Number(chosedCell[cellIndex] || 0) - 1 };
    setChosedCell({ ...chosedCell, ...cell });
  };

  return (
    <div className="CellList">
      {cells.map((cell, index) => (
        <CellListItem
          key={`CellListItem-${index}`}
          cell={cell}
          theAmountSelected={chosedCell[index]}
          index={index}
          onAdd={(index) => itemAdd(index)}
          onRemove={(index) => itemRemove(index)}
        />
      ))}
    </div>
  );
}

export default CellList;
