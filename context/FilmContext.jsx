import React, { createContext, useContext, useState, useEffect } from 'react';

const FilmContext = createContext();

export const useFilms = () => {
  return useContext(FilmContext);
};

export const FilmProvider = ({ children }) => {
  const [peliculas, setPeliculas] = useState([]);
    //Mostrar pelis
  useEffect(() => {
    fetch('https://creative-polarized-math.glitch.me/data')
      .then((response) => response.json())
      .then((data) => setPeliculas(data))
      .catch((error) => console.error('No arriben datos', error));
  }, []);
  //ELiminem pelicula
  const handleDelete = (id) => {
    fetch(`https://creative-polarized-math.glitch.me/data/${id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then(() => {
      setPeliculas((prevPeliculas) => prevPeliculas.filter((film) => film.id !== id));
    })
    .catch((error) => console.error('Error al eliminar película', error));
  };

  const addOrUpdateFilm = (film, selectedFilm) => {
    if (selectedFilm) {
      // Editar película
      fetch(`https://creative-polarized-math.glitch.me/data/${selectedFilm.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(film),
      })
        .then((response) => response.json())
        .then((updatedFilm) => {
          setPeliculas((prevPeliculas) =>
            prevPeliculas.map((p) => (p.id === updatedFilm.id ? updatedFilm : p))
          );
        })
        .catch((error) => console.error('Error al editar peli', error));
    } else {
      // Crear película
      fetch('https://creative-polarized-math.glitch.me/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(film),
      })
        .then((response) => response.json())
        .then((newFilm) => setPeliculas([...peliculas, newFilm]))
        .catch((error) => console.error('Error al afegir peli', error));
    }
  };

  return (
    <FilmContext.Provider value={{ peliculas, setPeliculas, handleDelete, addOrUpdateFilm }}>
      {children}
    </FilmContext.Provider>
  );
};
