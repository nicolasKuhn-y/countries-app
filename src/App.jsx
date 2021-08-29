import React from "react";

import { AppRouter } from "./routers/AppRouter";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./css/globalStyles";
import { lightTheme, darkTheme } from "./css/themes";

import { useDarkMode } from "./hooks/useDarkMode";

import { CountriesProvider } from "./context/CountriesContext";

export const App = () => {
  const { theme, handleThemeChange } = useDarkMode("isLightModeEnabled");

  return (
    <CountriesProvider>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />

        <AppRouter theme={theme} handleThemeChange={handleThemeChange} />
      </ThemeProvider>
    </CountriesProvider>
  );
};
