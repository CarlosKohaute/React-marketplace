import React, { useState, useEffect } from 'react';
import CellListItem from 'components/CellListItem/CellListItem';
import { CellService } from 'services/CellService';
import CellDetalhesModal from 'components/CellDetalhesModal/CellDetalhesModal';
import './CellList.css';

function CellList() {
  const [cells, setCells] = useState([]);

  const [selectedCell, setSelectedCell] = useState({});

  const [cellModal, setCellModal] = useState(false);

  const itemAdd = (cellIndex) => {
    const cell = { [cellIndex]: Number(selectedCell[cellIndex] || 0) + 1 };
    setSelectedCell({ ...selectedCell, ...cell });
  };

  const itemRemove = (cellIndex) => {
    const cell = { [cellIndex]: Number(selectedCell[cellIndex] || 0) - 1 };
    setSelectedCell({ ...selectedCell, ...cell });
  };

  const getList = async () => {
    const response = await CellService.getList();
    setCells(response);
  };

  const getCellById = async (cellId) => {
    const response = await CellService.getById(cellId);
    setCellModal(response);
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
          thaAmountSelected={selectedCell[index]}
          index={index}
          onRemove={(index) => itemRemove(index)}
          onAdd={(index) => itemAdd(index)}
          clickItem={(cellId) => getCellById(cellId)}
        />
      ))}
{cellModal && <CellDetalhesModal cell={cellModal} closeModal={() => setCellModal(false)} />}
    </div>
  );
}

export default CellList;
