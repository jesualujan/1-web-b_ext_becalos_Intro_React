// El componente FilterPanel permite a los usuarios filtrar los personajes por nombre, especie y estado.

// Recibe las siguientes props:
// - `search`: Estado que almacena el texto de búsqueda.
// - `setSearch`: Función que actualiza el estado `search`.
// - `species`: Estado que almacena la especie seleccionada.
// - `setSpecies`: Función que actualiza el estado `species`.
// - `status`: Estado que almacena el estado del personaje (vivo, muerto, desconocido).
// - `setStatus`: Función que actualiza el estado `status`.
// - `onFilter`: Función que ejecuta la búsqueda con los filtros seleccionados.
const FilterPanel = ({
  search,
  setSearch,
  species,
  setSpecies,
  status,
  setStatus,
  onFilter,
}) => {
  return (
    <div className="row mb-4 g-2">
      {/* Campo de busqueda por nombre */}
      <div className="col-md-4">
        <input
          className="form-control"
          type="text" // campo de entrada de texto
          value={search} // valor del campo de búsqueda
          onChange={(e) => setSearch(e.target.value)} // se actualiza el estado con el nuevo valor ingresado
          placeholder="Buscar por nombre" // texto de marcador de posición
        />
      </div>

      {/* Selector de especie */}
      <div className="col-md-3">
        <select
          className="form-select"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        >
          <option value=""> Todas las especies </option>{" "}
          {/* Opción sin filtro */}
          <option value="Human"> Humano </option>{" "}
          {/* Opción de especie "Humano" */}
          <option value="Alien"> Alien </option>{" "}
          {/* Opción de especie "Alien" */}
          <option value="Humanoid"> Humanoide </option>{" "}
          {/* Opción de especie "Humanoide" */}
          <option value="unknown"> unknown </option>{" "}
          {/* Opción de especie "Desconocido" */}
        </select>
      </div>

      {/* Selector de estado */}
      <div className="col-md-3">
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value=""> Todos los estados</option> {/* Opción sin filtro */}
          <option value="alive"> Alive </option> {/* Personajes vivos */}
          <option value="dead"> Dead </option> {/* Personajes muertos*/}
          <option value="unknown"> unknown </option> {/* Estado desconocido */}
        </select>
      </div>

      {/* Botón para apliacr los filtros */}
      <div className="col-md-2 d-grid">
        <button className="btn btn-success" onClick={onFilter}>
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
