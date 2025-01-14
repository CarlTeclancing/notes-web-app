import React, { useState } from 'react'
import SideBar from '../../components/SideBar'
import AllNotes from '../../components/AllNotes'
import ActiveNotes from '../../components/ActiveNotes'
import AddNotes from '../../components/AddNotes';

export default function Dashboard() {
  const [active, setActive] = useState(false);
  const [activeNote, setActiveNote] = useState('')


  return (
    <div className='container'>
      <SideBar />
      <AllNotes setActive={setActive} />
      <ActiveNotes setActiveNote={setActiveNote} />
      {active === true?<AddNotes setActive={setActive} />:""}
      
    </div>
  )
}
