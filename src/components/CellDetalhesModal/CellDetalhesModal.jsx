import './CellDetalhesModal.css'
import Modal from 'components/Modal/Modal'

function CellDetalhesModal(cell, closeModal) {

  return (
    <Modal closeModal={closeModal}>
      <div className="CellDetalhesModal">
        <div>
          <div className='CellDetalhesModal__name'>{cell.name}</div>
          <div className='CellDetalhesModal__price'>R$ {Number(cell.price).toFixed(2)}</div>
          <div className='CellDetalhesModal__description'><b>Descrição</b>{cell.description}</div>
        </div>
        <img  src={cell.photo} alt={`Celular: ${cell.name}`} className='CellDetalhesModal__photo' />
      </div>
    </Modal>
  )
}
export default CellDetalhesModal