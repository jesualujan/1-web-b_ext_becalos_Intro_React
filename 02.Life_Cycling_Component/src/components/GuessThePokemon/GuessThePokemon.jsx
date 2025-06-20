import { useState, useEffect } from "react";

// Cantidad máxima de pokemones
const MAX_POKEMONS = 150;

const GuessThePokemon = () => {
  // definimos los estados
  // Estado para el ID del Pokémon actual
  const [pokemonId, setPokemonId] = useState(null);
  // Estado para guardar los datos del Pokémon
  const [pokemon, setPokemon] = useState(null);
  // Estado para la respuesta del usuario
  const [guess, setGuess] = useState("");
  //Estado para el mensaje de resultado/retroalimentación
  const [feedback, setFeedback] = useState("");
  // Estado para mostrar la imagen real del Pokémon si adivina correctamente
  const [showImage, setShowImage] = useState(false);

  // 1°useEffect: 🟢 Este useEffect se ejecuta solo una vez al montar el componente ([])
  // Genera un ID aleatorio entre 1 y MAX_POKEMONS
  useEffect(() => {
    const randomId = Math.floor(Math.random() * MAX_POKEMONS) + 1;
    setPokemonId(randomId); // se actualiza el estado con el nuevo ID
  }, []);

  // 2°useEffect: 🔁 Este useEffect se ejecuta cada vez que cambie el pokemonId (ciclo de vida - updating)
  // Llama a la pokeApi y obtiene los datos del nuevo Pokémon
  useEffect(() => {
    if (!pokemonId) return; // Si pokemonId es null, no hace nada (no hay un ID todavía)

    // Función asíncrona para obtener los datos del Pokémon
    const getPokemons = async () => {
      try {
        // Fetch a la pokeApi usando el ID
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        const data = await response.json(); // Convertir la respuesta a JSON
        // Guardamos solo el nombre y la imagen del Pokémon
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
        });
      } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
      }
    };
    getPokemons(); // Llamamos a la función para obtener los datos del Pokémon
  }, [pokemonId]); //Solo se ejecuta cuando pokemonId cambia

  // 🧠 Lógica que se ejecuta al hacer clic en "Adivinar"
  const handleGuess = () => {
    if (!guess.trim()) return; // si está vacio, no haces nada
    // Convertir el guess a minúsculas para hacer una comparación sin distinción de mayúsculas y minúsculas
    const normalizedGuess = guess.toLowerCase().trim();

    // Si el nombre coincide con el nombre del Pokémon
    if (normalizedGuess === pokemon.name) {
      setFeedback("🎉 ¡Correcto! Eres un maestro Pokémon.");
      setShowImage(true); // Mostrar la imagen real del Pokémon
    } else {
      setFeedback("❌ Nope, sigue intentando...");
      setShowImage(false); // No mostrar la imagen real del Pokémon
    }
  };

  // 🔁 Lógica que se ejecuta al hacer clic en "Siguiente Pokémon"
  const handleNext = () => {
    // Genera un nuevo ID aleatorio entre 1 y MAX_POKEMONS
    const newId = Math.floor(Math.random() * MAX_POKEMONS) + 1; // nuevo id aleatorio
    setPokemonId(newId); // Actualiza el estado con el nuevo ID
    setGuess(""); // Limpia la respuesta del usuario
    setFeedback(""); // Limpia el mensaje de retroalimentación (quitamos el mensaje anterior)
    setShowImage(false); // Oculta la imagen real del Pokémon
  };

  return (
    <div className="container text-center mt-5 p-4 bg-dark text-light rounded shadow">
      <h1 className="display-4 mb-4 d-flex justify-content-center align-items-center gap-3">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="Pokeball"
          width={60}
          height={70}
        />
        ¿Quién es ese Pokémon?
      </h1>

      <div className="mb-3">
        {/* Mostar la imagen como silueta si no adivina */}
        {pokemon && !showImage ? (
          <img
            src={pokemon.image}
            alt="¿Quién es ese Pokémon?"
            style={{ filter: "brightness(0)" }}
            width={200}
          />
        ) : (
          // Si se adivina correctamente, mostrar la imagen real
          pokemon && (
            <img
              className="mb-3"
              src={pokemon.image}
              alt={pokemon.name}
              width={200}
            />
          )
        )}
      </div>

      {/* Input para que el usuario adivine el nombre del Pokémon */}
      <input
        type="text"
        className="form-control w-50 mx-auto mb-3"
        placeholder="Escribe el nombre del Pokémon"
        value={guess} // valor actual del estado 'guess'
        onChange={(e) => setGuess(e.target.value)} // se actualiza el estado con lo que escriba
      />

      {/* Botón para comprobar la respuesta */}
      <button className="btn btn-warning me-2" onClick={handleGuess}>
        Adivinar
      </button>

      {/* Botón para pasar/cambiar al siguiente Pokémon */}
      <button className="btn btn-outline-light" onClick={handleNext}>
        Siguiente Pokémon
      </button>

      {/* Mostrar el feedback al usuario */}
      {feedback && <p className="mt-4 fs-4">{feedback}</p>}
    </div>
  );
};

export default GuessThePokemon;
