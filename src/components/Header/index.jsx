import React from "react";

import { Link } from "react-router-dom";

import { StyledHeader, Navigation, NavigationWrapper, Span } from "./styles";

import { FiMoon, FiSun } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

export const Header = ({ changeTheme, theme }) => {
  return (
    <StyledHeader>
      <Navigation>
        <h2>
          <Link to="/">Where in the World?</Link>
        </h2>

        <NavigationWrapper>
          <IconContext.Provider value={{ size: "1.2rem" }}>
            {theme ? (
              <FiMoon onClick={changeTheme} />
            ) : (
              <FiSun onClick={changeTheme} />
            )}
          </IconContext.Provider>

          <Span onClick={changeTheme}  >{theme ? "Dark mode" : "Light mode"}</Span>
        </NavigationWrapper>
      </Navigation>
    </StyledHeader>
  );
};
