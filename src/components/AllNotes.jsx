import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import tags from '../db/tagsDb'
import '../style/Components.css'
import Paper from '../assets/paper.svg'
import rightArrow from '../assets/ArrowRight.svg'

const AllNotes =() =>{
  return (
    <div className='notes-side-bar'>
        <h3>All Notes</h3>
        <button className="button primary"><Link to='add-note'>+  Add Notes</Link></button>
        <div className="notes-card-active">
            <h3>React Performance optimization</h3>
            <span className="tag">Dev</span>
            <span className="tag">React</span> <br/><br/>
            <span className="m-4">29 Oct 2024</span>
        </div>

        <div className="notes-card">
            <h3>React Performance optimization</h3>
            <span className="tag">Dev</span>
            <span className="tag">React</span> <br/><br/>
            <span className="m-4">29 Oct 2024</span>
        </div>

        <div className="notes-card">
            <h3>React Performance optimization</h3>
            <span className="tag">Dev</span>
            <span className="tag">React</span> <br/><br/>
            <span className="m-4">29 Oct 2024</span>
        </div>

        <div className="notes-card">
            <h3>React Performance optimization</h3>
            <span className="tag">Dev</span>
            <span className="tag">React</span> <br/><br/>
            <span className="m-4">29 Oct 2024</span>
        </div>
    </div>
  )
}

export default AllNotes