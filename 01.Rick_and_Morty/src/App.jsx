// importar Hooks
import { useState, useEffect } from 'react'

// importar componentes
import Navbar from './components/Navbar/Navbar'

// importar estilos
import './App.css'

// URL BASE DE LA API DE RICK AND MORTY
// usamos SNAKE_CASE para constantes globales
const BASE_URL = 'https://rickandmortyapi.com/api/character'

// Componente principal de la aplicación
function App() {

    // Definición de estados con useState para gestionar la infomarción
    // camelCase para variables y funciones
     const [characters, setCharacters] = useState([]); // Lista de personajes obtenidos de la API
     const [info, setInfo] = useState({}); // Información de paginación de la API
     const [loading, setLoading] = useState(true); // Estado de carga para mostrar un loading/spinner
     const [search, setSearch] = useState(''); // Estado para gestionar la búsqueda de personajes
     const [species, setSpecies] = useState(''); //Filtro por especie del personaje
     const [status, setStatus] = useState(''); // Filtro por estado del personaje
     const [darMode, setDarkMode] = useState(false); // Alterna entre modo claro y oscuro

     // useEffect ejecuta su lógica cada vez que el componente cambia o se monta 
     useEffect(() => {
        getCharacters(BASE_URL); //llamamos a la función para obtener personajes al cargar la página
        //Cambia la clase del <body> para activar el modo oscuro o claro
        document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
      }, [darkMode]) // se ejecuta cada vez que cambia el estado de darkMode




  return (
    <>
     <Navbar />
      <h1>Rick and Morty</h1>
      <p>Welcome to the Rick and Morty app!</p>
    </>
  )
}

export default App
