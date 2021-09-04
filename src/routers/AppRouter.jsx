import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { HomeScreen } from "../pages/home/HomeScreen";
import { DetailScreen } from "../pages/detail/DetailScreen";
import { Header } from "../components/Header";

export const AppRouter = ({ theme, handleThemeChange }) => {
  return (
    <Router>
      <Header theme={theme} changeTheme={handleThemeChange} />

      <main>
        <Switch>
          <Route exact path="/countries-app" component={HomeScreen} />

          <Route exact path="/detail/:countryName" component={DetailScreen} />

          <Redirect to="/countries-app" />
        </Switch>
      </main>
    </Router>
  );
};
