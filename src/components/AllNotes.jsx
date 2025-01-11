import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import tags from '../db/tagsDb'
import { notes } from '../db/tagsDb'
import '../style/Components.css'
import Paper from '../assets/paper.svg'
import rightArrow from '../assets/ArrowRight.svg'

const AllNotes =({setActive}) =>{

    const [activeNote, setActiveNote] = useState(false)

    
  return (
    <div className='notes-side-bar'>
        <h3>All Notes</h3>
        <button className="button primary" onClick={()=>setActive(true)}>+  Add Notes</button>

        {notes.map((note, index)=>

        
        <div 
        className={activeNote ===true ?"notes-card-active" :"notes-card"}
        onClick={()=>setActiveNote(true)}
        key={index}>
            <h3>{note.title}</h3>
            {note.tags.map((tag)=>
                <span className="tag">{tag}</span> 
            
            )}
            <br/><br/>
            <span className="m-4">{note.date}</span>
        </div>
)}

    </div>
  )
}

export default AllNotes