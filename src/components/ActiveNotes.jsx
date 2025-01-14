import React from "react";
import TopNav from "./TopNav";
import Edit from "../assets/edit.svg";
import Delete from "../assets/Delete.svg";
import Bookmark from "../assets/Bookmark.svg";

const ActiveNotes = ({ note }) => {
  return (
    <div className="active-notes">
        <TopNav />
      {note===true  ? (
        <>
          
          <div className="notes">
            <h1>{note.title}</h1>
            <div>
              <span className="tag">Tags</span>
              {note.tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag}
                </span>
              ))}
              <br />
              <br />
            </div>
            <div>
              <span className="tag">Last edited</span> <span>{note.date}</span>
            </div>
            <hr />
            <p className="note-text">{note.description}</p>
          </div>

          <div className="floating">
            <button className="button primary">
              <img src={Edit} alt="Edit" /> Edit Note
            </button>
            <button className="button danger">
              <img src={Delete} alt="Delete" /> Delete Note
            </button>
            <button className="button archive">
              <img src={Bookmark} alt="Bookmark" /> Archive Note
            </button>
          </div>
        </>
      ) : (
        <div>No active note selected.</div>
      )}
    </div>
  );
};

export default ActiveNotes;
