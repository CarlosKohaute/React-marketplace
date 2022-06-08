import { Api } from 'helpers/Api';

const parseResponse = (response) => response.json();

const transformCell = (cell) => {
  const [name] = cell.name;
  return {
    ...cell,
    id: cell._id,
    name: cell.name
  }
};

const parseTransformList = (response) => parseResponse(response).then(cells => cells.map(transformCell));
const parseTransformItem = (response) => parseResponse(response).then(transformCell);



export const CellService = {
  getList: () => fetch(Api.cellList(), { method: 'GET' }).then(parseTransformList),
  getById: (id) =>
    fetch(Api.cellById(id), { method: 'GET' }).then(parseTransformItem),
  create: () => fetch(Api.createCell(), { method: 'POST' }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updateCellById(id), { method: 'PUT' }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteCellById(id), { method: 'DELETE' }).then(parseResponse),
};
