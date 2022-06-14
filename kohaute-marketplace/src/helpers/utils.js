export const NormalizeUtils = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export const matchByText = (searchedText, name) =>
  NormalizeUtils(searchedText).includes(NormalizeUtils(name));