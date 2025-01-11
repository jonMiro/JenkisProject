import React, { useState } from 'react';
import FormNewFilm from '../components/FormNewFilm';
import FilmGrid from '../components/GridFilms';
import { FilmProvider, useFilms } from '../context/FilmContext';
import { GenreProvider } from '../context/GenreContext';

function App() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleEdit = (film) => {
    setSelectedFilm(film);
  };

  return ( //Envolvem els components en els providers...
    <FilmProvider>
      <GenreProvider>
        <h1 style={{ textAlign: 'center' }}>Filmography</h1>
        <FormNewFilm onNewFilm={(film) => addOrUpdateFilm(film, selectedFilm)} selectedFilm={selectedFilm} />
        <FilmGrid handleEdit={handleEdit} />
      </GenreProvider>
    </FilmProvider>
  );
}

export default App;
