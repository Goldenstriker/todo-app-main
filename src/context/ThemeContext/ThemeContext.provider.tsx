import { useState } from "react";
import { ThemeProviderProps, Theme } from "./ThemeContext.types";
import { ThemeContext } from "./ThemeContext.base";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.light ? Theme.dark : Theme.light
    );
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
