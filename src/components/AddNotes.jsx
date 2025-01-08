import React, {useState} from 'react'

const AddNotes =({setActive})=> {
  return (
    <div className='flex-center'>

        <form className='add'>
            <span className="close" onClick={()=>setActive(false)}>Close</span>
            <label htmlFor="">Title</label>
            <input type="text" placeholder='Enter notes title '/>

            <label htmlFor="">Tags</label>
            <input type="text" placeholder='enter tags separate with a , ' />

            <label htmlFor="details">Notes Details</label>
            <textarea name="details" id=""></textarea>

            <button className="button primary">+ Add Notes</button>


        </form>
    </div>
  )
}

export default AddNotes