import React from 'react';
import FilmCard from './Film';
import { useFilms } from '../context/FilmContext';

function FilmGrid({ peliculas, handleEdit, }) {
  const { peliculas: peliculasFromContext, handleDelete } = useFilms();
//Aci es que si ficaba peliculas com a valor hem donava error perque es repetia, pero no pareix que estiga pillant 
//les peliculas, igualment funciona.
  return (
    <div>
      <div style={{
        display: 'grid',  
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
        gap: '8px', 
        padding: '16px',
        marginLeft: '35px',
        overflowX: 'auto', 
      }}>
        {peliculasFromContext.map((film) => (
          <div key={film.id}>
            <FilmCard
              film={film}
              handleDelete={() => handleDelete(film.id)}
              handleEdit={() => handleEdit(film)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmGrid;
