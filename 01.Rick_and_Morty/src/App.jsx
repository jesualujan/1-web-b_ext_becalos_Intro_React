// importar Hooks
import { useState, useEffect } from "react";

// importar componentes
import Navbar from "./components/Navbar/Navbar";
import Characters from "./components/Characters/Characters";
import PagButtons from "./components/PagButtons/PagButtons";

// importar estilos
import "./App.css";

// URL BASE DE LA API DE RICK AND MORTY
// usamos SNAKE_CASE para constantes globales
const BASE_URL = "https://rickandmortyapi.com/api/character";

// Componente principal de la aplicación
function App() {
  // Definición de estados con useState para gestionar la infomarción
  // camelCase para variables y funciones
  const [characters, setCharacters] = useState([]); // Lista de personajes obtenidos de la API
  const [info, setInfo] = useState({}); // Información de paginación de la API
  const [loading, setLoading] = useState(true); // Estado de carga para mostrar un loading/spinner
  const [search, setSearch] = useState(""); // Estado para gestionar la búsqueda de personajes
  const [species, setSpecies] = useState(""); //Filtro por especie del personaje
  const [status, setStatus] = useState(""); // Filtro por estado del personaje
  const [darkMode, setDarkMode] = useState(false); // Alterna entre modo claro y oscuro

  // useEffect ejecuta su lógica cada vez que el componente cambia o se monta
  useEffect(() => {
    getCharacters(BASE_URL); //llamamos a la función para obtener personajes al cargar la página
    //Cambia la clase del <body> para activar el modo oscuro o claro
    document.body.className = darkMode
      ? "bg-dark text-light"
      : "bg-light text-dark";
  }, [darkMode]); // se ejecuta cada vez que cambia el estado de darkMode

  // Función asíncrona para obtener los personajes de la API
  const getCharacters = async (url) => {
    try {
      setLoading(true); // Activamos el estado de carga
      // Establecer un temporizador para simular una carga
      const timer = new Promise((res) => setTimeout(res, 2000));
      const fetchPromise = fetch(url); // Realizamos la petición a la API

      // Ejecutamos ambas promesas simultáneamente
      const [response] = await Promise.all([
        fetchPromise.then((res) => {
          if (!res.ok) throw new Error("Error al obtener los personajes"); //validamos la respuesta
          return res.json(); // Convertimos la respuesta a JSON
        }),
        timer, // simulación de retardo
      ]);
      // Guardamos los datos obtenidos en los estados correspondientes
      setCharacters(response.results); // Guardamos los personajes
      setInfo(response.info); // Guardamos la información de paginación
    } catch (error) {
      console.error("Ups! Algo salió mal:", error); // Manejamos errores de la API
      setCharacters([]); // En caso de error, vaciamos la lista de personajes
    } finally {
      setLoading(false); // Desactivamos el estado de carga
    }
  };

  // Función para obtener la paginación anterior si está disponible
  const onPrevious = () => {
    if (info.prev) getCharacters(info.prev); // Llamamos a la función para obtener los personajes de la página anterior
  };

  // Función para obtener la página siguiente si está disponible
  const onNext = () => {
    if (info.next) getCharacters(info.next); // Llamamos a la función para obtener los personajes de la página siguiente
  };

  return (
    <>
      <Navbar /> {/* Componente de la barra de navegación */}
      <div className="container py-4">
        {/* Encabezado y botón de modo oscuro */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>😈 Rick & Morty API</h1>
          <button
            className={darkMode ? "btn btn-light" : "btn btn-dark"}
            onClick={() => setDarkMode(!darkMode)} // Alterna el estado de darkMode al hacer clic
          >
            {darkMode ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </div>

        {/* Contenido principal o indicador de carga (loading) */}
        {loading ? (
          <div className="d-flex justify-content-center">
            {/* Spinner de carga  */}
            <div
              className="spinner-grow text-primary me-2"
              style={{ width: "3rem", height: "3rem" }}
            />
            <div
              className="spinner-grow text-success"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
        ) : (
          <>
            <PagButtons
              info={info}
              onPrevious={onPrevious} // Función para manejar la paginación anterior
              onNext={onNext} // Función para manejar la paginación siguiente
            />{" "}
            {/* Botones de paginación */}
            <Characters characters={characters} darkMode={darkMode} />{" "}
            {/* listado de personajes */}
          </>
        )}
      </div>
    </>
  );
}

export default App;
