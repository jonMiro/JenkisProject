import React from "react";

function DeleteButton({ handleDelete }) {
  return (
    <button
      onClick={handleDelete} 
      style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        backgroundColor: 'transparent',
        color: '#fff',
        border: 'none',
        fontSize: '24px', 
        cursor: 'pointer',
        padding: '0',
        lineHeight: '1',
      }}
    >
      X 
    </button>
  );
}

export default DeleteButton;
