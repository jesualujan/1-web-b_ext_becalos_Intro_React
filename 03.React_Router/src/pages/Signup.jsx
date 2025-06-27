import{useState} from "react";
import {useNavigate} from "react-router-dom";

// componente signup (registro)
const Signup = () => {
    // Estados para capturar/guardar el email, la contraseña y los errores del formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");

    // Hook para redirigir a otra ruta después del login
    const navigate = useNavigate()

     // Función que se ejecuta cuando envío el formulario 
   const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir que se recargue la página cuando implementamos formularios.

    // validación: todos los campos esten completos 
    if(!email || !password || !confirmPass) {
     setError ("Completa todos los campos");
     return;
    }

    // valida que el email tenga formato básico
    if(!email.includes("@")){
        setError ("Email Inválido")
        return;
    }

    // valida que la contraseña tenga al menos 7 caracteres
    if( password.length < 7){
        setError ("La contraseña debe tener al menos 7 caracteres")
        return;
    }

    // verificar que la contraseña coincida
    if(password !== confirmPass){
        setError ("Las contraseñas no coinciden")
        return;
    }

    // si pasa todas las validaciones, limpia el error
    setError("");

    // simula un registro exitoso con un alert
    alert("Registro exitoso, ahora puedes iniciar sesión.")

    // Redirigir al usuario al login
    navigate("/login")
   }


        return(
            <div className="max-w-md mx-auto mt-12 p-8 border rounded shadow-lg bg-white">
             <h2 className="text-2xl font-bold mb-6 text-center">Crear Cuenta</h2>

        {/* Muestra mensaje de error en caso de existir */}
        {error && (
            <p className="mb-4 text-red-600 font-semibold text-center">{error}</p>
        )}

             {/* Formulario de registro */}
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
                 autoComplete="email"
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
                 autoComplete="new-password"
                 required
                 />
             </div>

         {/* campo para confirmar contraseña */}
             <div>
                 <label htmlFor="confirmPass" className="block mb-2 font-medium">
                    Confirmar contraseña
                 </label>
                 <input  
                 id="confirmPass"
                 type="password"
                 placeholder="Confirmar Contraseña"
                 className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                 value={confirmPass}
                 onChange={(e) => setConfirmPass(e.target.value)}
                 autoComplete="new-password"
                 required
                 />
             </div>
     
     {/* Botón para enviar el formulario */}
             <button
             type="submit"
             className="w-full py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
             >
                Registrarse
             </button>
            </form>
            </div>
    )
}

export default Signup;