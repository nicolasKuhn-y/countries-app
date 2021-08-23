import React, { useReducer } from "react";

import { AppRouter } from "./routers/AppRouter";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./css/globalStyles";
import { lightTheme, darkTheme } from "./css/themes";

import { useDarkMode } from "./hooks/useDarkMode";

import { countriesReducer } from "./context/countriesReducer";
import { CountriesContext } from "./context/CountriesContext";

const initialState = {
  countriesList: [],
  countriesToShow: [],
  filterByName: "",
};

export const App = () => {
  const [countries, dispatch] = useReducer(countriesReducer, initialState);

  const { theme, handleThemeChange } = useDarkMode();

  return (
    <CountriesContext.Provider value={{ countries, dispatch }}>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />

        <AppRouter theme={theme} handleThemeChange={handleThemeChange} />
      </ThemeProvider>
    </CountriesContext.Provider>
  );
};
