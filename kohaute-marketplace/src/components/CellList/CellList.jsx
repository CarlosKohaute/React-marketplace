import React, { useState, useEffect } from 'react';
import CellListItem from 'components/CellListItem/CellListItem';
import { CellService } from 'services/CellService';
import CellDetailsModal from 'components/CellDetailsModal/CellDetailsModal';
import './CellList.css';

function CellList() {
  const [cells, setCell] = useState([]);
  const [chosedCell, setChosedCell] = useState({});
  

  const [cellModal, setCellModal] = useState(false);

  const itemAdd = (cellIndex) => {
    const cell = { [cellIndex]: (chosedCell[cellIndex] || 0) + 1 };
    setChosedCell({ ...chosedCell, ...cell });
  };

  const itemRemove = (cellIndex) => {
    const cell = { [cellIndex]: Number(chosedCell[cellIndex] || 0) - 1 };
    setChosedCell({ ...chosedCell, ...cell });
  };

  const getList = async () => {
    const response = await CellService.getList();
    setCell(response);
  };

  useEffect(() => {
    getList();
  }, []);

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
          clickItem={(cellId) => setCellModal(cell)}
        />
      ))}

      {cellModal && (
        <CellDetailsModal
          cell={cellModal}
          closeModal={() => setCellModal(false)}
        />
      )}
    </div>
  );
}

export default CellList;
