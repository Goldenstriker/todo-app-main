export enum Theme {
  light,
  dark,
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: React.ReactElement;
}
