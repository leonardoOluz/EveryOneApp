import GlobalStyle from "./styles/globalStyles"
import { StyleSheetManager, ThemeProvider } from "styled-components"
import { themeDark } from "./styles/theme/theme"
import PageBase from "./components/PageBase"
import isPropValid from '@emotion/is-prop-valid'


function App() {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
      }}
    >
      <ThemeProvider theme={themeDark}>
        <GlobalStyle fontAplic />
        <PageBase children={<h1>Hello EveryOne App</h1>} />
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default App