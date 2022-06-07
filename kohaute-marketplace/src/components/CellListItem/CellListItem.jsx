import './CellListItem.css';

function CellListItem({cell, theAmountSelected, index, onRemove, onAdd}) {

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Actions__remove" onClick={() => onRemove(index)}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="CellListItem__badge"> {theAmountSelected} </span>
    );

  <div className="CellListItem">
    {badgeCounter(theAmountSelected, index)}

    <div>
      <div className="CellListItem__name">{cell.name}</div>
      <div className="CellListItem__price">R$ {cell.price.toFixed(2)}</div>
      <div className="CellListItem__description">{cell.description}</div>
      <div className="CellListItem__actions Actions">
        <button
          className={`Actions__add ${
            !theAmountSelected && 'Actions__add--fill'
          }`}
          onClick={() => onAdd(index)}
        >
          Adicionar
        </button>
        {removeButton(theAmountSelected, index)}
      </div>
    </div>
    <img className="CellListItem__photo" src={cell.photo} alt={cell.name} />
  </div>;
}

export default CellListItem;
