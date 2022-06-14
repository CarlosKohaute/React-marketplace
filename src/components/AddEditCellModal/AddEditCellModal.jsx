import { useState, useEffect } from 'react';
import Modal from 'components/Modal/Modal';
import { CellService } from 'services/CellService';
import './AddEditCellModal.css';
import { ActionMode } from 'constants/index';

function AddEditCellModal({
  closeModal,
  onCreateCell,
  mode,
  cellToUpdate,
  onUpdateCell,
}) {
  const form = {
    price: cellToUpdate?.price ?? ' ',
    name: cellToUpdate?.name ?? ' ',
    description: cellToUpdate?.description ?? ' ',
    photo: cellToUpdate?.photo ?? ' ',
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
        String(state.price).length,
    );

    setCanDisable(response);
  };

  useEffect(() => {
    canDisableSendButton();
  });
  const handleSend = async () => {
    const renameWayPhoto = (photoPath) => photoPath.split(/\\|\//).pop();

    const { name, description, price, photo } = state;

    const tittle = name;

    const cell = {
      name: tittle,
      description,
      price,
      photo: `assets/images/${renameWayPhoto(photo)}`,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => CellService.create(cell),
      [ActionMode.ATUALIZE]: () =>
        CellService.updateById(cellToUpdate?.id, cell),
    };

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateCell(response),
      [ActionMode.ATUALIZE]: () => onUpdateCell(response),
    };

    actionResponse[mode]();

    const reset = {
      price: '',
      name: '',
      description: '',
      photo: '',
    };

    setState(reset);
    closeModal();
  };
  return (
    <Modal closeModal={closeModal}>
      <div className="AddCellModal">
        <form autoComplete="off">
          <h2>
            {' '}
            {ActionMode.ATUALIZE === mode
              ? 'Atualizar'
              : 'Adicionar à'} loja{' '}
          </h2>
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
              onChange={(e) => handleChange(e, 'photo')}
              required
            />
          </div>

          <button
            type="button"
            disabled={canDisable}
            className="AddCellModal__send"
            onClick={handleSend}
          >
            {ActionMode.NORMAL === mode ? 'Enviar' : 'Atualizar'}
          </button>
        </form>
      </div>
    </Modal>
  );
}
export default AddEditCellModal;
