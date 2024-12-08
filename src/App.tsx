import GlobalStyle from "./styles/globalStyles"
import { ThemeProvider } from "styled-components"
import { themeLight, themeDark } from "./styles/theme/theme"
import StiloSheetManager from "./components/StyleSheetManager"
import RoutesUse from "./Routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useContext } from "react"
import { ThemeContext } from "./Pages/ClimaTempo/Contexts/useContext"


const queryClient = new QueryClient();
function App() {
  const {isDarkMode} = useContext(ThemeContext)

  return (
    <StiloSheetManager>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
          <GlobalStyle />
          <RoutesUse />
        </ThemeProvider>
      </QueryClientProvider>
    </StiloSheetManager>
  )
}

export default App