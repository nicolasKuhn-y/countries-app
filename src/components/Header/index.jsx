import React from "react";

import { StyledHeader, Navigation, NavigationWrapper, Span } from "./styles";

import { FiMoon, FiSun } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

export const Header = ({ changeTheme, theme }) => {
  return (
    <StyledHeader>
      <Navigation>
        <h2>Where in the World?</h2>

        <NavigationWrapper>
          <IconContext.Provider value={{ size: "1.2rem" }}>
            {theme ? (
              <FiMoon onClick={changeTheme} />
            ) : (
              <FiSun onClick={changeTheme} />
            )}
          </IconContext.Provider>

          <Span>{theme ? "Dark mode" : "Light mode"}</Span>
        </NavigationWrapper>
      </Navigation>
    </StyledHeader>
  );
};
