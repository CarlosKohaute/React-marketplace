import { useState, useEffect } from 'react';
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
  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.description.length &&
        state.photo.length &&
        state.name.length &&
        state.price.length,
    );

    setCanDisable(response);
  };

  useEffect(() => {
    canDisableSendButton();
  });
  return (
    <Modal closeModal={closeModal}>
      <div className="AddCellModal">
        <form autoComplete="off">
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
              required
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
              required
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
              required
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
              required
            />
          </div>

          <button type="button" disabled={canDisable} className="AddCellModal__send" >Enviar</button>
        </form>
      </div>
    </Modal>
  );
}
export default AddCellModal;
