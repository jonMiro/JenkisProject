import React from 'react';
import ButtonUpdate from './UpdateButton';
import DeleteButton from './DeleteButton';

function FilmCard({ film, handleDelete, handleEdit }) {
  return (
    <div style={{
      backgroundColor: '#1b1e23',
      borderRadius: '8px',
      padding: '4px',
      margin: '4px',
      width: '145px', 
      color: '#ddd',
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      textAlign: 'center', 
      position: 'relative',
      height: '340px', 
      overflow: 'hidden', 
    }}>
      <DeleteButton handleDelete={() => handleDelete(film.id)} />
      
     
      <img 
        src={film.image} 
        alt={film.name} 
        style={{ 
          width: '90%', 
          height: '180px',  
          objectFit: 'cover',  
          borderRadius: '4px', 
          marginBottom: '10px' 
        }} 
      />
      
      
      <h3 style={{ margin: '5px 0', fontSize: '18px',height: '40px',  
  lineHeight: '20px',   }}>{film.name}</h3>
      
     
      <h4 style={{
        margin: '2px 2px',
        fontSize: '14px',  // generes afegit
        whiteSpace: 'wrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis', 
      }}>
        {(film.genres && Array.isArray(film.genres) && film.genres.length > 0)
          ? film.genres.join(', ')
          : 'Género no disponible'}
      </h4>
      
   
      <div style={{
        marginTop: 'auto', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems:"center"
      }}>
        <p style={{ margin: '0px 0', fontSize: '14px' , marginBottom:"2px"}}>Año: {film.year}</p>
        <ButtonUpdate handleEdit={() => handleEdit(film)} />
      </div>
    </div>
  );
}

export default FilmCard;
