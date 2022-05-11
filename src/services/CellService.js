import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

const transformCell = (cell) => {
  const [name] = cell.name;

  return {
    ...cell,
    id: cell._id,
    name: cell.name,
    name,
    ...(name && { name }),
    possuiDescription: Boolean(name),
  };
};

const parseTransformList = (response) =>
  parseResponse(response).then((cells) => cells.map(transformCell));

export const CellService = {
  getList: () =>
    fetch(Api.cellList(), { method: "GET" }).then(parseTransformList),
  getById: (id) =>
    fetch(Api.cellById(id), { method: "GET" }).then(parseTransformList),
  create: () =>
    fetch(Api.createCell(), { method: "POST" }).then(parseTransformList),
  updtateById: (id) =>
    fetch(Api.updateCellById(id), { method: "PUT" }).then(parseTransformList),
  deleteById: (id) =>
    fetch(Api.deleteCellById(id), { method: "DELETE" }).then(parseTransformList),
};