import React from "react";

import MoonLoader from "react-spinners/ClipLoader";

import { CenteredContainer } from "./styles";

export const Spinner = () => (
  <CenteredContainer>
    <MoonLoader color="white" size="10rem" />
  </CenteredContainer>
);
