import React from "react";

export const RegionOption = ({ value, ...attr }) => (
  <option {...attr} value={value}>
    {value}
  </option>
);
