import './SacolaModal.css';
import Modal from 'components/Modal/Modal';
import { SacolaService } from 'services/SacolaService';
import { useEffect, useState } from 'react';
import { CellService } from 'services/CellService';
import { useNavigate } from 'react-router-dom';

function SacolaModal({ closeModal }) {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const purchase = async () => {
    await SacolaService.purchase();
    navigate('/loading');
  };

  const handleClose = async () => {
    await SacolaService.purchase();
    closeModal();
  };

  const getLists = async () => {
    const cellList = await CellService.getList();
    const sacolaList = await CellService.getList();

    const findName = (id) => {
      const obj = cellList.find((i) => i.id === id);
      return (obj && obj.name) ?? '';
    };

    if (Array.isArray(sacolaList)) {
      const newList = sacolaList.map(({ cellId, theAmount }) => ({
        name: findName(cellId),
        theAmount,
      }));

      setList(newList);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <Modal closeModal={handleClose}>
      <div className="SacolaModal">
        <h2>Cells & theAmount</h2>

        <div>
          {list.map((i, idx) => (
            <div key={idx}>
              {' '}
              {i.name + ' ' + i.theAmount + 'x'} <br />
            </div>
          ))}
        </div>

        <br />

        <div>
          <button onClick={purchase} className="SacolaModal__confirm">
            {' '}
            Fechar compra{' '}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SacolaModal;
