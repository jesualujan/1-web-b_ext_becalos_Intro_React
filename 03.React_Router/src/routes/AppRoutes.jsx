// creo mi enrutador/router
import {Routes, Route, Navigate } from 'react-router-dom';
// import de pages (componets)
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const AppRoutes = ({user, setUser}) => (
    // Routes -> sustituye a swtich
    <Routes>
        <Route path="/" element={
          user ? <h1 className='text-center'>Bienvenido {user.email} </h1>
          : <Navigate to="/login" />
        } />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={
            <h2 className="text-center">404 Not Found</h2>
        } />
    </Routes>
);

export default AppRoutes;