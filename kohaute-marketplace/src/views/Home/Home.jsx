import { useState } from 'react';
import CellList from 'components/CellList/CellList';
import Navbar from 'components/Navbar/Navbar';
import AddEditCellModal from 'components/AddEditCellModal/AddEditCellModal';
import { ActionMode } from 'constants/index';
import './Home.css';

function Home() {
  const [canShowAddCellModal, setCanShowAddCellModal] = useState(false);
  const [cellForAdd, setCellForAdd] = useState();
  const [cellForEdit, setCellForEdit] = useState();
  const [cellForDelete, setCellForDelete] = useState();
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

  const handleCloseModal = () => {
    setCanShowAddCellModal(false);
    setCellForAdd();
    setCellForDelete();
    setCellForEdit();
  };

  return (
    <div className="Home">
      <Navbar
        mode={atualMode}
        createCell={() => setCanShowAddCellModal(true)}
        updateCell={() => handleActions(ActionMode.ATUALIZE)}
      />

      <div className="Home__container">
        <CellList
          mode={atualMode}
          createdCell={cellForAdd}
          deleteCell={handleDeleteCell}
          updateCell={handleUpdateCell}
        />
        {canShowAddCellModal && (
          <AddEditCellModal
            mode={atualMode}
            cellToUpdate={cellForEdit}
            closeModal={handleCloseModal}
            onCreateCell={(cell) => setCellForAdd(cell)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
