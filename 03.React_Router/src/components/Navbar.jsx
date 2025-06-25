import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
     <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <div className="space-x-4">
            <Link to="/">Inicio</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
        <button>
            Cerrar Sesión
        </button>
     </nav>
    )
}

export default Navbar;

