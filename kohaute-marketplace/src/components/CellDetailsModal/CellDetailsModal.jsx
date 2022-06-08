import './CellDetailsModal.css';
import Modal from 'components/Modal/Modal';

function CellDetailsModal({ cell, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="CellDetailsModal">
        <div>
          <div className="CellDetailsModal__name"> {cell.name} </div>
          <div className="CellDetailsModal__price">
            {' '}
            R$ {Number(cell.price).toFixed(2)}{' '}
          </div>

          <div className="CellDetailsModal__description">
            {' '}
            <b>Descrição:</b> {cell.description}{' '}
          </div>
        </div>
        <img
          className="CellDetailsModal__photo"
          src={cell.photo}
          alt={cell.name}
        />
      </div>
    </Modal>
  );
}

export default CellDetailsModal;
