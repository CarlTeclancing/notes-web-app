import React from 'react'
import searh from '../assets/search.svg'
import settings from '../assets/Setting.svg'

const TopNav =() =>{
  return (
    <div className='top-nav'>
        <div className="search">
            <input type="text" placeholder='Search note here' />
            <img src={searh} alt="" />
        </div>
        <div className="settings">
            <img src={settings} alt="" />
            <span>Settings</span>
        </div>
    </div>
  )
}

export default TopNav