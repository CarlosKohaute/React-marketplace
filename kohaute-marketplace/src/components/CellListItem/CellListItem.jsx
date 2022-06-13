import { ActionMode } from 'constants/index';
import './CellListItem.css';

function CellListItem({
  cell,
  theAmountSelected,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
        className="Actions__remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="CellListItem__badge"> {theAmountSelected} </span>
    );
  const badgeAction = (canRender) => {
    if (canRender) return <span className="CellListItem__tag"> {mode} </span>;
  };
  return (
    <div
      className={`CellListItem ${
        mode !== ActionMode.NORMAL && 'CellListItem--disable'
      }`}
      onClick={() => clickItem(cell.id)}
    >
      {' '}
      {badgeCounter(theAmountSelected, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="CellListItem__name">{cell.name}</div>
        <div className="CellListItem__price">R$ {cell.price}</div>
        <div className="CellListItem__description">{cell.description}</div>
        <div className="CellListItem__actions Actions">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Actions__add ${
              !theAmountSelected && 'Actions__add--fill'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
          >
            Adicionar
          </button>
          {removeButton(theAmountSelected, index)}
        </div>
      </div>
      <img className="CellListItem__photo" src={cell.photo} alt={cell.name} />
    </div>
  );
}

export default CellListItem;
