import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ForecastProvider, ThemeProvider } from './Pages/ClimaTempo/Contexts/useContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ForecastProvider>
        <App />
      </ForecastProvider>
    </ThemeProvider>
  </StrictMode>,
)
