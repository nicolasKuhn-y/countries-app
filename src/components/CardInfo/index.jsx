import React from "react";

export const CardInfo = ({ title, data }) => (
  <p>
    <b style={{ fontWeight: 600 }}>{title}:</b> {data}
  </p>
);
