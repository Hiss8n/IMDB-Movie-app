import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import {ThemeProvider} from 'next-themes'

createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme='light' attribute='class'> 
  <HashRouter> 
    <App />
  </HashRouter>
  </ThemeProvider>

)
