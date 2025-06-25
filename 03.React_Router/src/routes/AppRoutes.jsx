// creo mi enrutador/router
import {Routes, Route, Navigate } from 'react-router-dom';
// import de pages (componets)
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const AppRoutes = () => (
    // Routes -> sustituye a swtich
    <Routes>
        <Route path="/" element={
        <h1> Bienvenido </h1>
        } />
        <Route path="/login" element={Login} />
        <Route path="/signup" element={Signup} />
        <Route path="*" element={
            <h2 className="text-center">404 Not Found</h2>
        } />
    </Routes>
);

export default AppRoutes;