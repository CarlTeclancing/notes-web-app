import React from 'react'
import SideBar from '../../components/SideBar'
import AllNotes from '../../components/AllNotes'
import ActiveNotes from '../../components/ActiveNotes'

export default function Dashboard() {
  return (
    <div className='container'>
      <SideBar />
      <AllNotes />
      <ActiveNotes />
      
    </div>
  )
}
