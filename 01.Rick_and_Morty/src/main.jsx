// Importación de módulos de NODEJS para manejar React
import { StrictMode } from 'react' // Activar verificaciones adicionales en el código para ayudar a detectar problemas.
import { createRoot } from 'react-dom/client'// Nueva Api de React v.18 para renderizar la aplicación más eficientemente.
// Importación del componente principal de la aplicación.
import App from './App.jsx'

// Creación de la raíz del DOM y renderización del componente principal dentro de StrictMode.
// StrictMode es una herramienta de desarrollo que no afecta la producción, pero ayuda a identificar problemas potenciales en la aplicación.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Renderiza la aplicación dentro de StrictMode */}
  </StrictMode>,
)
