import React from "react";

function GenreCard({ genre, isSelected, onToggle, onDelete }) {
  return (
    <div
      onClick={() => onToggle(genre.name)}
      style={{
        backgroundColor: isSelected ? "#2b78e4" : "#444",
        padding: "6px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        color: "#ddd",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        maxWidth: "100%",
        minWidth: "40px",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: "14px", wordBreak: "break-word", whiteSpace: "nowrap", flexGrow: 1 }}>
        {genre.name}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(genre.id);
        }}
        style={{
          background: "transparent",
          color: "white",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
          padding: "0",
          lineHeight: "1",
          marginLeft: "10px",
        }}
      >
        ×
      </button>
    </div>
  );
}

export default GenreCard;
