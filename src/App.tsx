import GlobalStyle from "./styles/globalStyles"
import { ThemeProvider } from "styled-components"
import { themeDark } from "./styles/theme/theme"
import StiloSheetManager from "./components/StyleSheetManager"
import RoutesUse from "./Routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const queryClient = new QueryClient();
function App() {
  return (
    <StiloSheetManager>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={themeDark}>
          <GlobalStyle fontAplic />
          <RoutesUse />
        </ThemeProvider>
      </QueryClientProvider>
    </StiloSheetManager>
  )
}

export default App