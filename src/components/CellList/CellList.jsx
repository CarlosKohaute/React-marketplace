import React, { useState } from 'react';
import CellListItem from 'components/CellListItem/CellListItem';
import { cells } from 'mocks/cells.js';
import './CellList.css';

function CellList() {
  const [selectedCell, setSelectedCell] = useState({});
  const itemAdd = (cellIndex) => {
    const cell = { [cellIndex]: Number(selectedCell[cellIndex] || 0) + 1 };
    setSelectedCell({ ...selectedCell, ...cell });
  };

  const itemRemove = (cellIndex) => {
    const cell = { [cellIndex]: Number(selectedCell[cellIndex] || 0) - 1 };
    setSelectedCell({ ...selectedCell, ...cell });
  };

  return (
    <div className="CellList">
      {cells.map((cell, index) => (
        <CellListItem
          key={`CellListItem-${index}`}
          cell={cell}
          thaAmountSelected={selectedCell[index]}
          index={index} 
          onRemove={index=>itemRemove(index)}
          onAdd={index=>itemAdd(index)}/>
      ))}
    </div>
  );
}

export default CellList;
