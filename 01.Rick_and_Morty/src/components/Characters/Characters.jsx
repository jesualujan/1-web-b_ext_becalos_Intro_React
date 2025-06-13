// Importación de estilos CSS específicos para el componente
import "./style.css";

// El componete Characters recibe 2 props(propiedades) que vienen del componente App.jsx(padre)
// - characters: Un arreglo de personajes que se mostrarán en la interfaz.
// - darkMode: Un valor booleano que determina si el modo oscuro está activado o no.

const Characters = ({ characters, darkMode }) => {
  // si el arreglo de characters está vacío, se muestra un mensaje indicando que no se encontraron personajes
  if (characters.length === 0) {
    return <p className="text-center w-100">No se encontraron personajes</p>;
  }

  return (
    <div className="row">
      {/* Recorremos el arreglo characters y generamos una tarjeta para cada personaje */}
      {characters.map((char) => (
        <div
          key={char.id} // se usa key para identificar cada elemento de la lista y mejorar la eficiencia en la renderización
          className="col-lg-3 col-md-4 mb-4"
          style={{ cursor: "pointer" }} // Estilo para indicar que es interactivo
        >
          <div
            className={`
                        card h-100 shadow-lg border-0 rounded-4 overflow-hidden character-card animate__animated animate-entry ${
                          darkMode ? "bg-dark text-light" : "bg-light text-dark" // aplica el modo oscuro o claro según el estado darkMode
                        }`}
          >
            {/* Imagen del personaje */}
            <img
              className="card-img-top" // clase para la imagen del personaje
              src={char.image} // url de la imagen obtenida de la API.
              alt={char.name} // texto alternativo para la imagen
              style={{ objectFit: "cover", height: "300px" }} // ajusta el tamaño y la visualización de la imagen.
            />

            {/*Cards con información del personaje */}
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title text-center fw-bold">🧬{char.name}</h5>
              <ul className="list-unstyled mt-3">
                <li>
                  <strong>👽 Especie:</strong> {char.species}
                </li>{" "}
                {/* Especie del personaje */}
                <li>
                  <strong>❤️ Estado:</strong> {char.status}
                </li>{" "}
                {/* Estado (vivo, muerto, desconocido) */}
                <li>
                  <strong>🧠 Género:</strong> {char.gender}
                </li>{" "}
                {/* Género del personaje */}
                <li>
                  <strong>🌍 Origen:</strong> {char.origin.name}
                </li>{" "}
                {/* Lugar de origen */}
                <li>
                  <strong>📍 Ubicación:</strong> {char.location.name}
                </li>{" "}
                {/* Ubicación actual */}
                <li>
                  <strong>📽️ Episodios: </strong> {char.episode.length}
                </li>{" "}
                {/* Número de episodios en los que aparece */}
              </ul>
            </div>

            {/* Pie de la tarjeta con el ID del personaje */}
            <div className="card-footer text-center small fst-italic">
              ID # {char.id} 🚀 {/* ID del personaje según la API */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
