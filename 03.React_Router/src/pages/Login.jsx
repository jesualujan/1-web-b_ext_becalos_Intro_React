
const Login = () => {
    return(
       <div className="max-w-md mx-auto mt-12 p-8 border rounded shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
       <form className="space-y-6">
        <div>
            <label htmlFor="email" className="bloc mb-2 font-medium">Correo Electrónico</label>
            <input  
            id="email"
            type="email"
            placeholder="usuario@ejemplo.com"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={""}
            autoComplete="username"
            required
            />
        </div>

        <div>
            <label htmlFor="email" className="bloc mb-2 font-medium">Contraseña</label>
            <input  
            id="password"
            type="password"
            placeholder="***"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={""}
            autoComplete="current-password"
            required
            />
        </div>

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