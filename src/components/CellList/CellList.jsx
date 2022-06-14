import React, { useState, useEffect, useCallback } from 'react';
import CellListItem from 'components/CellListItem/CellListItem';
import { CellService } from 'services/CellService';
import CellDetailsModal from 'components/CellDetailsModal/CellDetailsModal';
import { ActionMode } from 'constants/index';
import { matchByText } from 'helpers/utils';

import './CellList.css';

function CellList({
  createdCell,
  mode,
  updateCell,
  deleteCell,
  editedCell,
  removedCell,
}) {
  const selected = JSON.parse(localStorage.getItem('selected')) ?? {};

  const [cells, setCell] = useState([]);

  const [cellsFiltred, setcellsFiltred] = useState([]);

  const [chosedCell, setChosedCell] = useState(selected);

  const [cellModal, setCellModal] = useState(false);

  const itemAdd = (cellIndex) => {
    const cell = { [cellIndex]: (chosedCell[cellIndex] || 0) + 1 };
    setChosedCell({ ...chosedCell, ...cell });
  };

  const setSelected = useCallback(() => {
    if (!cells.length) return;

    const entries = Object.entries(chosedCell);
    const sacola = entries.map((arr) => ({
      cellId: cells[arr[0]].id,
      theAmountSelected: arr[1],
    }));

    localStorage.setItem('sacola', JSON.stringify(sacola));
    localStorage.setItem('selected', JSON.stringify(chosedCell));
  }, [chosedCell, cells]);

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

  const fillByName = ({ target }) => {
    const list = [...cells].filter(({ name }) =>
      matchByText(name, target.value),
    );
    setcellsFiltred(list);
  };
  useEffect(() => {
    setSelected();
  }, [setSelected, chosedCell]);

  useEffect(() => {
    if (createdCell && !cells.map(({ id }) => id).includes(createdCell.id)) {
      addCellOnList(createdCell);
    }
    setcellsFiltred(cells);
  }, [addCellOnList, createdCell, cells]);

  useEffect(() => {
    getList();
  }, [editedCell, removedCell]);

  return (
    <div className="CellList-Wrapper">
      <input
        className="CellList-fill"
        onChange={fillByName}
        placeholder="Busque um celular pelo nome"
      />
      <div className="CellList">
        {cellsFiltred.map((cell, index) => (
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
     
    </div>
  );
}

export default CellList;
