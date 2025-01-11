import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import tags from '../db/tagsDb'
import { notes } from '../db/tagsDb'
import '../style/Components.css'
import Paper from '../assets/paper.svg'
import rightArrow from '../assets/ArrowRight.svg'

const SideBar =() =>{
  return (
    <div className='side-bar'>
        <img src={Logo} alt="" />
        <button className='button flex-start'> <img src={Paper} alt="" /> <span>All Notes</span> </button>
        <button className='button flex-end'> <span>Archived Notes</span> <img src={rightArrow} alt="" /></button>
        <h3>Tags</h3>
        {notes.map((note, index) =>
            <Link className='w-100' to={`/tag/${note.tags}`} key={index}>
                <button className='bg-none'>{note.tags}</button>
            </Link>
        )}
    </div>
  )
}

export default SideBar