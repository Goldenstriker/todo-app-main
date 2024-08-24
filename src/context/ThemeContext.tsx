import { createContext, useContext, useState } from "react";

enum Theme {
  light,
  dark,
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const useTheme = () => {
  return useContext(ThemeContext) as ThemeContextType;
};

interface ThemeProviderProps {
  children: React.ReactElement;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
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

export { useTheme, Theme, ThemeProvider };
