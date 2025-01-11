import React from "react";

function ButtonUpdate({ handleEdit }) {
  return (
    <button 
      onClick={handleEdit} 
      style={{ display: 'inline-flex', justifyContent: 'center',alignItems:"center", borderRadius: '6px', border: 'none', cursor:"pointer", width:"60px",   }}
    >
      Update
    </button>
  );
}

export default ButtonUpdate;
