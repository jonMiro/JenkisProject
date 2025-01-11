import React from "react";
import { useGenres } from "../context/GenreContext"; 
function FormAddGenre() {
  const { newGenre, setNewGenre, handleAddGenre } = useGenres(); 

  return (
    <label style={{ display: "flex", gap: "0", marginBottom: "10px", marginTop: "2px" }}>
      <input
        type="text"
        placeholder="Nuevo género..."
        value={newGenre}
        onChange={(e) => setNewGenre(e.target.value)}
        style={{
          width: "15%",
          padding: "5px",
          borderRadius: "4px",
          border: "1px solid #444",
          backgroundColor: "#1b1e23",
          color: "#ddd",
          margin: "0px -12px",
        }}
      />
      <button
        onClick={handleAddGenre}
        style={{
          backgroundColor: "#2b78e4",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "4px",
          cursor: "pointer",
          fontSize: "20px",
          width: "28px",
          height: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px -16px",
        }}
      >
        +
      </button>
    </label>
  );
}

export default FormAddGenre;
