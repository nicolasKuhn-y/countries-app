export const getBorderCountryName = (countries, border) =>
  countries.find(({ alpha3Code }) => alpha3Code === border).name;

