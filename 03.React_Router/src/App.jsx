import { useState, useEffect } from 'react';
// Importa el componente Navbar (barra de navegación)
import Navbar from "./components/Navbar";
// Importa las rutas de la aplicación (Login, Signup, Home, etc.)
import AppRoutes from "./routes/AppRoutes";

function App() {
  // Estado para guardar al usuario logueado (null si no hay sesión)
  const [user, setUser] = useState(null);

  // useEffect se ejecuta una vez al cargar la app
  useEffect(() => {
    // Intenta obtener el usuario guardado en localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    // Si hay datos, actualiza el estado con ese usuario
    if (userData) setUser(userData);
  }, []); // El array vacío [] significa que se ejecuta solo 1 vez al montar el componente

  return (
    <>
      {/* Navbar recibe el usuario actual y la función para actualizarlo */}
      <Navbar user={user} setUser={setUser} />
      {/* AppRoutes maneja las rutas y también recibe el estado de sesión */}
      <AppRoutes user={user} setUser={setUser} />
    </>
  );
}

// Exporta el componente App para usarlo en main.jsx
export default App;
