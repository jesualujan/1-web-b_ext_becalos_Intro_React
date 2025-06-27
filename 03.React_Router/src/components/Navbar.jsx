import { Link } from 'react-router-dom';

// Navbar recibe el usuario actual y la función para actualizarlo como props
const Navbar = ({user, setUser}) => {
    return (
        //contenedor principal de la barre de navagación
     <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <div className="space-x-4">
            <Link to="/">Inicio</Link>
            {/* solo se muestran estos links si el usuario NO está autenticado  */}
            {!user && <Link to="/login">Login</Link>}
            {!user && <Link to="/signup">Registro</Link>}
        </div>
          {/* si el usuario está autenticado, muestra botón para cerrar sesión */}
          {user && (
            <button
            onClick={() => {
                //Elimina al usuario de mi localStorage
                localStorage.removeItem("user");
                //Actualiza el estado del usuario a null (sesión cerrada)
                setUser(null);
            }}
            >
            Cerrar Sesión
        </button>
          )}
     </nav>
    )
}

export default Navbar;

