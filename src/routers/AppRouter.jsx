import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../css/globalStyles";
import { lightTheme, darkTheme } from "../css/themes";

import { HomeScreen } from "../pages/home/HomeScreen";
import { DetailScreen } from "../pages/detail/DetailScreen";
import { Header } from "../components/Header";

import { useDarkMode } from "../hooks/useDarkMode";

export const AppRouter = () => {
  const { theme, handleThemeChange } = useDarkMode();

  return (
    <Router>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header theme={theme} changeTheme={handleThemeChange} />

        <main>
          <Switch>
            <Route exact path="/detail/:countryId" component={DetailScreen} />

            <Route  path="/" component={HomeScreen} />
          </Switch>
        </main>
      </ThemeProvider>
    </Router>
  );
};
