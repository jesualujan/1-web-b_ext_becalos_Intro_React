// 📦 Importamos los componentes de React Router necesarios:
// - Routes: contenedor de todas las rutas
// - Route: define una ruta individual
// - Navigate: redirige a otra ruta si se cumple una condición
import { Routes, Route, Navigate } from 'react-router-dom';
// 📄 Importamos las "páginas" (componentes de rutas)
import Login from '../pages/Login';
import Signup from '../pages/Signup';

// 📌 Componente que recibe el usuario actual y la función para actualizarlo
const AppRoutes = ({ user, setUser }) => (
  // ⛳ <Routes> reemplaza al antiguo <Switch> desde React Router v6
  <Routes>
      {/* Ruta para el login. Pasamos setUser como prop para actualizar el estado */}
      <Route path="/login" element={<Login setUser={setUser} />} />
      {/* Ruta para el registro */}
      <Route path="/signup" element={<Signup />} />
    {/* Ruta raíz ("/"): si hay usuario, saluda, si no, redirige a login */}
    <Route
      path="/"
      element={
        user
          ? <h1 className="text-center">Bienvenido {user.email}</h1>
          : <Navigate to="/login" />
      }
    />
    {/* Ruta comodín (404): se muestra si no coincide ninguna ruta anterior */}
    <Route path="*" element={
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl text-gray-800 mb-2">Página no encontrada</p>
      <p className="text-gray-600 mb-6">Lo sentimos, la ruta que buscás no existe o fue movida.</p>
    </div>
  }/>
  </Routes>
);

// Exportamos el componente para poder usarlo en App.jsx
export default AppRoutes;
