import React from 'react'
import TopNav from './TopNav'
import Edit from '../assets/edit.svg'
import Delete from '../assets/Delete.svg'
import Bookmark from '../assets/Bookmark.svg'

const ActiveNotes =()=> {
  return (
    <div className='active-notes'>
        <TopNav />
        <div className="notes">
            <h1>React Performance Optimization</h1>
            <div>
                <span className="tag">Tags</span> <span>dev</span><span>React</span><br /><br />
            </div>
            <div>
                <span className="tag">Last edited</span> <span>31/12/2024</span>
            </div>
            <hr />
            
            
            <p className='note-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus ducimus nesciunt commodi incidunt nam cum error, repellat omnis, tempore consectetur repudiandae officia accusamus? Aspernatur voluptatum adipisci iusto aliquid vero modi voluptates similique alias. Quam hic tempora voluptatum alias ab facilis! Sunt deleniti modi velit, eligendi dolor ex cumque, accusantium impedit aspernatur rem voluptatum asperiores quisquam culpa magni doloremque odio delectus, fuga obcaecati suscipit amet repellat veniam optio nobis. Debitis culpa molestiae omnis vel, consectetur nemo laudantium similique ab quia architecto, aliquid voluptas sit, blanditiis distinctio eius. Dolorem esse quasi fugiat assumenda dignissimos recusandae aperiam quos corrupti dolores, quae consequuntur!</p>
        </div>

        <div className="floating">
            <button className="button primary"><img src={Edit} alt="" />Edit Note</button>
            <button className="button danger"><img src={Delete} alt="" />Delete Note</button>
            <button className="button archive"><img src={Bookmark} alt="" />Archive Note</button>

        </div>
    </div>
  )
}

export default ActiveNotes