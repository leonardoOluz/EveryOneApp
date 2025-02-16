import React, { createContext, useState } from "react";
import { IData } from "../Interface";

interface themeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ForecastContextProps {
  data: IData | null;
  setData: (data: IData) => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>
}

interface IChildrenContext {
  children: React.ReactNode;
}

export const ThemeContext = createContext<themeContextProps>({
  isDarkMode: false,
  setIsDarkMode: () => { },
});

export const ForecastContext = createContext<ForecastContextProps>({
  data: {} as IData,
  setData: () => { },
  isLoading: true,
  setIsLoading: () => { },
  image: null,
  setImage: () => { }
});

ThemeContext.displayName = "ThemeContext";

ForecastContext.displayName = "ForecastContext";

export const ThemeProvider = ({ children }: IChildrenContext) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const ForecastProvider = ({ children }: IChildrenContext) => {
  const [data, setData] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [image, setImage] = useState<string | null>(null)

  return (
    <ForecastContext.Provider value={{ data, setData, isLoading, setIsLoading, image, setImage }}>
      {children}
    </ForecastContext.Provider>
  )
}