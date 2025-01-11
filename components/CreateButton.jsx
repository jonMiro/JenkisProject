import React from "react";

//Arreplega el "text" que apareixera el botó del form y el handlecreate
function ButtonCreate({ handleCreate , buttonText }) {
  return (
    <button
      type="submit"
      onClick={handleCreate}
      style={{
        fontSize: '14px',
        marginTop: '1px',
        padding: '5px',
        borderRadius: '8px',
        backgroundColor: '#2b78e4',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {buttonText} 
    </button> //crear o actualizar depen del buttonText que pase el form
  );
}

export default ButtonCreate;
