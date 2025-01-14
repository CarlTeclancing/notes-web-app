import React, { useState } from "react";
import { notes } from "../db/tagsDb";
import "../style/Components.css";

const AllNotes = ({ setActive, onNoteSelect }) => {
  const [activeNote, setActiveNote] = useState(null);

  const handleNoteClick = (note) => {
    console.log(note)
    setActiveNote(note); // Set the currently active note locally
    if (onNoteSelect) {
      onNoteSelect(note); // Pass the active note to the parent component if a callback is provided
    }
  };

  return (
    <div className="notes-side-bar">
      <h3>All Notes</h3>
      <button className="button primary" onClick={() => setActive(true)}>
        + Add Notes
      </button>

      {notes.map((note, index) => (
        <div
          className={
            activeNote === note ? "notes-card-active" : "notes-card"
          }
          onClick={() => handleNoteClick(note)}
          key={index}
        >
          <h3>{note.title}</h3>
          {note.tags.map((tag, tagIndex) => (
            <span className="tag" key={tagIndex}>
              {tag}
            </span>
          ))}
          <br />
          <br />
          <span className="m-4">{note.date}</span>
        </div>
      ))}
    </div>
  );
};

export default AllNotes;
