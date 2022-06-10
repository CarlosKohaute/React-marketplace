import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import './AddCellModal.css';

function AddCellModal({ closeModal }) {
  const form = {
    price: '',
    name: '',
    description: '',
    photo: '',
  };
  const [state, setState] = useState(form);
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  return (
    <Modal closeModal={closeModal}>
      <div className="AddCellModal">
        <form autoComplete="false">
          <h2>Adicionar Celular: </h2>
          <div>
            <label className="AddCellModal__text" htmlFor="price">
              Preço:
            </label>
            <input
              id="price"
              type="text"
              placeholder="R$7.000,00"
              value={state.price}
              onChange={(e) => handleChange(e, 'price')}
            />
          </div>
          <div>
            <label className="AddCellModal__text" htmlFor="name">
              Nome:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Galaxy S22 Ultra"
              value={state.name}
              onChange={(e) => handleChange(e, 'name')}
            />
          </div>
          <div>
            <label className="AddCellModal__text" htmlFor="description">
              Descrição:
            </label>
            <input
              id="description"
              type="text"
              placeholder="Smartphone Samsung Galaxy S22 Ultra 256GB Preto 5G - 12GB RAM 6,8” Câm. Quádrupla + Selfie 40MP
              "
              value={state.description}
              onChange={(e) => handleChange(e, 'description')}
            />
          </div>
          <div>
            <label
              className="AddCellModal__text AddCellModal__photo-label"
              htmlFor="photo"
            >
              {!state.photo.length ? 'Selecionar imagem' : state.photo}
            </label>
            <input
              className="AddCellModal__photo"
              id="photo"
              type="file"
              accept="image/png, image/gif, image/jpeg "
              value={state.photo}
              onChange={(e) => handleChange(e, 'photo')}
            />
          </div>

          <input className="AddCellModal__send" type="submit" value="Enviar" />
        </form>
      </div>
    </Modal>
  );
}
export default AddCellModal;
