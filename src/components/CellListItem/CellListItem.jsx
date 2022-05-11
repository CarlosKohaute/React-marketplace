import './CellListItem.css';

function CellListItem() {

  const itemRemove = (i) => console.log('remove' + i);
	const itemAdd = (i) => console.log('add' + i);
	const selectedCell = [0];
	const index = 0;
	const cell = {
		name: "Xiaomi 12 Pro ",
		description:
		"Versão global xiaomi 12 pro smartphone 8gb 256gb/12gb 256gb snapdragon 8 gen 1 núcleo octa 6.73 polegada display 120hz 4600mah 120w",
		photo: require("assets/images/xiaomi12pro.png"),
		price: 4000,
		haveDescription: true,
	}

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="CellListItem__badge"> {selectedCell[index]} </span>
    );

  const removebutton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Actions__remove" onClick={() => itemRemove(index)}>
        remover
      </button>
    );

  return (
    <div className="CellListItem">
      {badgeCounter(selectedCell[index], index)}
      <div>
        <div className="CellListItem__name">{cell.name}</div>
        <div className="CellListItem__price">{cell.price.toFixed(2)}</div>
        <div className="CellListItem__description">{cell.description}</div>
        <div className="CellListItem__actions Actions">
          <button
            className={`Actions__add ${
              !selectedCell[index] && 'Actions__add-fill'
            }`}
            onClick={() => itemAdd(index)}
          >
            adicionar
          </button>
          {removebutton(selectedCell[index], index)}
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
