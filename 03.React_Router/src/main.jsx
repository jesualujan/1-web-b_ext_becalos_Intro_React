// NODEJS DEPENDENCIES
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// STYLES 
import './index.css'
// TAILWIND STYLES
import './styles/index.css'
// COMPONENTS
import App from './App.jsx'
// LIBRERIAS (REACT ROUTER DOM)
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    <App />
    </StrictMode>,
  </BrowserRouter>
)
