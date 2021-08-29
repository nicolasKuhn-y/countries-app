import { useState, useEffect } from "react";

export const useDarkMode = (key) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem(key) === "false" ? false : true
  );

  const handleThemeChange = () => setTheme(!theme);

  useEffect(() => localStorage.setItem(key, theme), [theme, key]);

  return {
    theme,
    handleThemeChange,
  };
};
