import './CellListItem.css';

function CellListItem({
  cell,
  thaAmountSelected,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {

  const removebutton = (canRender, index) =>
    Boolean(canRender) && (
<button
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
      <span className="CellListItem__badge"> {thaAmountSelected} </span>
    );


  return (
    <div className="CellListItem" onClick={() => clickItem(cell.id)}>
      {badgeCounter(thaAmountSelected, index)}
      <div>
        <div className="CellListItem__name">{cell.name}</div>
        <div className="CellListItem__price">{cell.price.toFixed(2)}</div>
        <div className="CellListItem__description">{cell.description}</div>
        <div className="CellListItem__actions Actions">
          <button
            className={`Actions__add ${
              !thaAmountSelected && 'Actions__add-fill'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(index);
            }}
          >
            adicionar
          </button>
          {removebutton(thaAmountSelected, index)}
        </div>
      </div>
      <img
        className="CellListItem__photo"
        src={cell.photo}
        alt={`Celular: ${cell.name}`}
      />
    </div>
  );
}

export default CellListItem;
