const CellContext = {
  cellEndpoint: () => `${Api.baseUrl}/cells`,
  cellList: () => `${CellContext.cellEndpoint()}/find-cells`,
  cellById: (id) => `${CellContext.cellEndpoint()}/find-one-cell/${id}`,
  createCell: () => `${CellContext.cellEndpoint()}/create`,
  updateCellById: (id) => `${CellContext.cellEndpoint()}/update/${id}`,
  deleteCellById: (id) => `${CellContext.cellEndpoint()}/delete/${id}`,
};

const SacolaContext = {
  getSacola: () => `${CellContext.cellEndpoint()}/all-cart`,
  createSacola: () => `${CellContext.cellEndpoint()}/create-cart`,
  purchase: () => `${CellContext.cellEndpoint()}/finish-cart`,
};

export const Api = {
  baseUrl: 'https://api-marketplacekohaute.onrender.com',
  ...CellContext,
  ...SacolaContext,
};
