import React from "react";

export const RegionOption = ({ name, ...attr }) => (
  <option {...attr} value={name}>
    {name}
  </option>
);
