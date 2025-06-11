// This file is the entry point for a React application.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importing styles and main App component
import './index.css'
// Importing the main App component
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
