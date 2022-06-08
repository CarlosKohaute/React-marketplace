import { Api } from 'helpers/Api';

const parseResponse = (response) => response.json();

export const CellService = {
  getList: () => 
      fetch(Api.cellList(), { method: 'GET' }).then(parseResponse),
  getById:(id)=>
      fetch(Api.cellById(id), { method: 'GET' }).then(parseResponse),
      create:()=>
      fetch(Api.createCell(), { method: 'POST' }).then(parseResponse),
      updateById:(id)=>
      fetch(Api.updateCellById(id), { method: 'PUT' }).then(parseResponse),
      deleteById:(id)=>
      fetch(Api.deleteCellById(id), { method: 'DELETE' }).then(parseResponse),

};
