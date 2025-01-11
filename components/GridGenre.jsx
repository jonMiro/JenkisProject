import React from 'react';
import GenreCard from './genreCard';
import FormAddGenre from './FromAddGenre';
import { useGenres } from '../context/GenreContext';

function GenreGrid({ onToggleGenre, selectedGenres }) {
  const { genres, newGenre, setNewGenre, handleAddGenre, handleDeleteGenre } = useGenres();

  const toggleSelectGenre = (genreName) => {
    onToggleGenre(genreName);
  };

  return (
    <div style={{ marginTop: '5px', backgroundColor: '#2d2f35', padding: '5px', borderRadius: '2px', width: '100%' }}>
      <h4 style={{ color: '#999', textAlign: 'left', fontSize: '14px', margin: '0px -8px' }}>GÉNEROS</h4>
      <FormAddGenre
        newGenre={newGenre}
        setNewGenre={setNewGenre}
        handleAddGenre={handleAddGenre}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', margin: '0px -12px' }}>
        {genres.map((genre) => (
          <GenreCard
            key={genre.id}
            genre={genre}
            isSelected={selectedGenres.includes(genre.name)}
            onToggle={toggleSelectGenre}
            onDelete={handleDeleteGenre}
          />
        ))}
      </div>
    </div>
  );
}

export default GenreGrid;
