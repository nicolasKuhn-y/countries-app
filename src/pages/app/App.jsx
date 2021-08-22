import React from "react";

import { useDarkMode } from "../../hooks/useDarkMode";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../css/globalStyles";
import { lightTheme, darkTheme } from "../../css/themes";

import { Header } from "../../components/Header";

export const App = () => {
  const { theme, handleThemeChange } = useDarkMode();

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} changeTheme={handleThemeChange} />
    </ThemeProvider>
  );
};
