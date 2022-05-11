const CellContext = {
  cellEndpoint: () => `${Api.baseUrl}`,
  cellList: () => `${CellContext.cellEndpoint()}/find-cells`,
  cellById: (id) => `${CellContext.cellEndpoint()}/find-one-cell/${id}`,
  createCell: () => `${CellContext.cellEndpoint()}/create`,
  updateCellById: (id) => `${CellContext.cellEndpoint()}/update/${id}`,
  deleteCellById: (id) => `${CellContext.cellEndpoint()}/delete/${id}`,
};

export const Api = {
  baseUrl: "https://api-marketplacekohaute.onrender.com/cells",
  ...CellContext,
};