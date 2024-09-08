import { createContext, useContext } from "react";
import { ThemeContextType } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  return useContext(ThemeContext) as ThemeContextType;
};
