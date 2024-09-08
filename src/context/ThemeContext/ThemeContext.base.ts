import { createContext, useContext, useState } from "react";
import { ThemeContextType, Theme } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  return useContext(ThemeContext) as ThemeContextType;
};
