import './DeleteCellModal.css';
import Modal from 'components/Modal/Modal';
import { CellService } from 'services/CellService';

function DeleteCellModal({ closeModal, cellToDelete, onDeleteCell }) {
  const handleDelete = async (cell) => {
    await CellService.deleteById(cell.id);
    onDeleteCell(cell);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeleteCellModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{cellToDelete.name}</b> do
          marketplace?
        </p>

        <img
          className="DeleteCellModal__photo"
          src={cellToDelete.photo}
          alt={cellToDelete.name}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(cellToDelete)}
            className="DeleteCellModal__confirm"
          >
            {' '}
            Confirmar{' '}
          </button>
          <button onClick={closeModal} className="DeleteCellModal__cancel">
            {' '}
            Cancelar{' '}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteCellModal;
