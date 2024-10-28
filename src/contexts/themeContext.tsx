import React, { createContext, useState } from "react";

interface themeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<themeContextProps>({
  isDarkMode: false,
  setIsDarkMode: () => { },
});

ThemeContext.displayName = "ThemeContext";

interface IThemeContext {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeContext) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}