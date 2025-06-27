import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

// Componente login recibe setUser como prop para actualizar la sesión
const Login = ({setUser}) => {
    // Estados para capturar/guardar el email, la contraseña y los errores del formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Hook para redirigir a otra ruta después del login
    const navigate = useNavigate()

   // Función que se ejecuta cuando envío el formulario 
   const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir que se recargue la página cuando implementamos formularios.

    // validación: todos los campos esten completos 
    if(!email || !password) {
     setError ("Email o Contraseña inválidos");
     return;
    }

    //validación básica: email debe contener el signo @ y la contraseña deber tener como mínimo 7 caracteres
    if(!email.includes("@") || password.length < 7){
        setError ("Email o Contraseña inválidos")
        return;
    }

    // Simulación de inicio de sesión exitoso
    const fakeUser = {email}
    //Guardar el usuario en un estado global
    setUser(fakeUser);
    //Guardo el usuario en localStorage (datos persisten en el navegador)
    localStorage.setItem("user", JSON.stringify(fakeUser))
    // Redirigir al usuario a la página de inicio
    navigate("/")
   }

    return(
       <div className="max-w-md mx-auto mt-12 p-8 border rounded shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        {/* Muestra mensaje de error en caso de existir */}
        {error && (
            <p className="mb-4 text-red-600 font-semibold text-center">{error}</p>
        )}

        {/* Formulario de login */}
       <form className="space-y-6" onSubmit={handleSubmit}>
         {/* campo de correo */}
        <div>
            <label htmlFor="email" className="block mb-2 font-medium">
                Correo Electrónico
            </label>
            <input  
            id="email"
            type="email"
            placeholder="usuario@ejemplo.com"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
            />
        </div>

        {/* campo de contraseña */}
        <div>
            <label htmlFor="password" className="block mb-2 font-medium">
                Contraseña
            </label>
            <input  
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            />
        </div>

         {/* Botón para enviar el formulario */}
        <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
        >
            Iniciar Sesión
        </button>
       </form>
       </div>
    )
}

export default Login;