import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const isDarkModeEnabled =
    localStorage.getItem("theme") === "false" ? false : true;

  const [theme, setTheme] = useState(isDarkModeEnabled);

  const handleThemeChange = () => setTheme(!theme);

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return {
    theme,
    handleThemeChange,
  };
};
