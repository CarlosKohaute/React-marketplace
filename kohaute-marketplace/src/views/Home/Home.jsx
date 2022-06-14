import { useState } from 'react';
import CellList from 'components/CellList/CellList';
import Navbar from 'components/Navbar/Navbar';
import AddEditCellModal from 'components/AddEditCellModal/AddEditCellModal';
import { ActionMode } from 'constants/index';
import DeleteCellModal from 'components/DeleteCellModal/DeleteCellModal';
import SacolaModal from 'components/SacolaModal/SacolaModal';
import { SacolaService } from 'services/SacolaService';
import './Home.css';

function Home() {
  const [canOpenBag, setCanOpenBag] = useState();
  const [editedCell, setEditedCell] = useState();
  const [canShowAddCellModal, setCanShowAddCellModal] = useState(false);
  const [cellForAdd, setCellForAdd] = useState();
  const [cellForEdit, setCellForEdit] = useState();
  const [cellForDelete, setCellForDelete] = useState();
  const [removedCell, setRemovedCell] = useState();
  const [atualMode, setatualMode] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const newAction = atualMode === action ? ActionMode.NORMAL : action;
    setatualMode(newAction);
  };

  const handleDeleteCell = (cellToDelete) => {
    setCellForDelete(cellToDelete);
  };

  const handleUpdateCell = (cellToUpdate) => {
    setCellForEdit(cellToUpdate);
    setCanShowAddCellModal(true);
  };
  const abrirSacola = async () => {
    const list = JSON.parse(localStorage.getItem('sacola'));
    const sacola = list.filter((i) => i.theAmount > 0);

    await SacolaService.create(sacola);

    setCanOpenBag(true);
  };

  const handleCloseModal = () => {
    setCanShowAddCellModal(false);
    setCellForAdd();
    setCellForDelete();
    setCellForEdit();
    setatualMode(ActionMode.NORMAL);
  };

  return (
    <div className="Home">
      <Navbar
        mode={atualMode}
        createCell={() => setCanShowAddCellModal(true)}
        deleteCell={() => handleActions(ActionMode.DELETE)}
        openBag={abrirSacola}
        updateCell={() => handleActions(ActionMode.ATUALIZE)}
      />

      <div className="Home__container">
        <CellList
          mode={atualMode}
          createdCell={cellForAdd}
          editedCell={editedCell}
          removedCell={removedCell}
          deleteCell={handleDeleteCell}
          updateCell={handleUpdateCell}
        />
        {canShowAddCellModal && (
          <AddEditCellModal
            mode={atualMode}
            cellToUpdate={cellForEdit}
            onUpdateCell={(cell) => setEditedCell(cell)}
            closeModal={handleCloseModal}
            onCreateCell={(cell) => setCellForAdd(cell)}
          />
        )}
        {cellForDelete && (
          <DeleteCellModal
            cellForDelete={cellForDelete}
            closeModal={handleCloseModal}
            onDeleteCell={(cell) => setRemovedCell(cell)}
          />
        )}
        {canOpenBag && <SacolaModal closeModal={() => setCanOpenBag(false)} />}
      </div>
    </div>
  );
}

export default Home;
