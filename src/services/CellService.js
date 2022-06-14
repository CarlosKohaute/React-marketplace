import { Api } from 'helpers/Api';

const parseResponse = (response) => response.json();

const transformCell = (cell) => {

  return {
    ...cell,
    id: cell._id,
    name: cell.name,
  };
};

const parseTransformList = (response) =>
  parseResponse(response).then((cells) => cells.map(transformCell));
const parseTransformItem = (response) =>
  parseResponse(response).then(transformCell);

export const CellService = {
  getList: () =>
    fetch(Api.cellList(), { method: 'GET' }).then(parseTransformList),
  getById: (id) =>
    fetch(Api.cellById(id), { method: 'GET' }).then(parseTransformItem),
  create: (cell) =>
    fetch(Api.createCell(), {
      method: 'POST',
      body: JSON.stringify(cell),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(parseTransformItem),
  updateById: (id, cell) =>
    fetch(Api.updateCellById(id), {
      method: 'PUT',
      body: JSON.stringify(cell),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteCellById(id), { method: 'DELETE' }).then(parseResponse),
};
