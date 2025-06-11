import {useState, useEffect} from 'react'
import './App.css'

// Componente App -> Este es el componente principal de la aplicación React (PADRE).
function App() {
   // Lógica de programación (JavaScript). 
   //* 1) useState: Hook para manejar el estado del componente.
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   //* 2) useEffect: Hook para manejar efectos secundarios, como la carga de datos.
   //* 2.1) useEffect: Carga de datos desde una API.
    useEffect(() => {
    // 2.2) Función asíncrona para obtener datos de la API.
    // 2.3) Se utiliza fetch para realizar una solicitud a la API de perros.
    // 2.4) Se maneja la respuesta y se actualiza el estado de dogs (try/catch para manejar errores).
     const getDogs = async () => {
        try {
            const response = await fetch('https://api.thedogapi.com/v1/breeds');
            if(!response.ok){
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
        // 2.5) Se actualiza el estado de dogs con los datos obtenidos (datos de los perritos).
         setDogs(data);
            // ver datos en la consola
            console.log(data);
      }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        getDogs();
    }, []);

  // Renderizado condicional basado en el estado de la aplicación.
  if(loading) { return <p>Loading...</p>}
  if(error) { return <p>Error: {error.message}</p>}

  return (
    // Estructura HTML de la aplicación.
    // Utiliza fragmentos <> para agrupar elementos sin añadir nodos adicionales al DOM.
   <>
        <div className="card-container">
        {dogs.map((race) => (
          <div key={race.id} className="dogs-card">
            <h2>{race.name}</h2>
          <p><strong>Temperament:</strong> {race.temperament ?? "Not Specified"}</p>
          <p><strong>Origin:</strong> {race.origin ?? "Not Specified"}</p>
          </div>
        ))}
        </div>
   </>
  )
}

export default App
