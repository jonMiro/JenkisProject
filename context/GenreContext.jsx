import React, { createContext, useContext, useState, useEffect } from 'react';

const GenreContext = createContext();

export const useGenres = () => {
  return useContext(GenreContext);
};

export const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [newGenre, setNewGenre] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]); 
//mostrar geenres
  useEffect(() => {
    fetch("https://creative-polarized-math.glitch.me/genre")
      .then((response) => response.json())
      .then((data) => setGenres(data))
      .catch((error) => console.error("Error al cargar géneros:", error));
  }, []);

  //Afegir genre
  const handleAddGenre = () => {
    if (newGenre.trim() === "") return;

    fetch("https://creative-polarized-math.glitch.me/genre", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newGenre }),
    })
      .then((response) => response.json())
      .then((genre) => {
        setGenres([...genres, genre]);
        setNewGenre("");
      })
      .catch((error) => console.error("Error al agregar género:", error));
  };
//Eliminar genre
  const handleDeleteGenre = (id) => {
    fetch(`https://creative-polarized-math.glitch.me/genre/${id}`, {
      method: "DELETE",
    })
      .then(() => setGenres((prevGenres) => prevGenres.filter((genre) => genre.id !== id)))
      .catch((error) => console.error("Error al eliminar género:", error));
  };

  return (
    <GenreContext.Provider value={{
      genres,
      newGenre,
      setNewGenre,
      selectedGenres,      
      setSelectedGenres,    
      handleAddGenre,
      handleDeleteGenre,
    }}>
      {children}
    </GenreContext.Provider>
  );
};
