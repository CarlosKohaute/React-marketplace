import React, { useState, useEffect, useCallback } from 'react';
import CellListItem from 'components/CellListItem/CellListItem';
import { CellService } from 'services/CellService';
import CellDetailsModal from 'components/CellDetailsModal/CellDetailsModal';
import { ActionMode } from 'constants/index';
import './CellList.css';

function CellList({ createdCell, mode, updateCell, deleteCell }) {
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

  const getCellById = async (cellId) => {
    const response = await CellService.getById(cellId);
    setCellModal(response);
    const mapper = {
      [ActionMode.NORMAL]: () => setCellModal(response),
      [ActionMode.ATUALIZE]: () => updateCell(response),
      [ActionMode.DELETE]: () => deleteCell(response),
    };

    mapper[mode]();
  };

  const addCellOnList = useCallback(
    (cell) => {
      const list = [...cells, cell];
      setCell(list);
    },
    [cells],
  );

  useEffect(() => {
    if (createdCell && !cells.map(({ id }) => id).includes(createdCell.id)) {
      addCellOnList(createdCell);
    }
  }, [addCellOnList, createdCell, cells]);

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="CellList">
      {cells.map((cell, index) => (
        <CellListItem
          mode={mode}
          key={`CellListItem-${index}`}
          cell={cell}
          theAmountSelected={chosedCell[index]}
          index={index}
          onAdd={(index) => itemAdd(index)}
          onRemove={(index) => itemRemove(index)}
          clickItem={(cellId) => getCellById(cellId)}
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
