import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContextProvider } from './hooks/useTheme.jsx'
import { ExtensionsContextProvider } from './hooks/useExtensions.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContextProvider>
            <ExtensionsContextProvider>
                <App />
            </ExtensionsContextProvider>
        </ThemeContextProvider>
    </StrictMode>
)
