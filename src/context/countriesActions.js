export const filterByRegion = (list, _region) =>
  list.filter(({ region }) => region === _region);
