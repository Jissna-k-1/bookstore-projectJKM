import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { FaPen } from 'react-icons/fa'


function Edit() {
  const [offcanvasStatus, setOffcanvasStatus] = useState(false)
  return (
    <div>
      <button onClick={()=>setOffcanvasStatus(true)} className='border rounded p-3 text-blue-600 hover:text-white hover:bg-blue-700 flex items-center'>Edit <FaEdit className='ms-2'/></button>
      {/* offcanvas */}
      {
        offcanvasStatus &&
        <div>
        <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
        </div>
        <div className="bg-white h-full w-90 z-52 fixed top-0 left-0">
          {/* offcanvas-header */}
          <div className="bg-black p-3 flex justify-between text-white ">
            <h3 className="text-xl">Update Profile</h3>
            <button onClick={()=>setOffcanvasStatus(false)}><FaX/></button>
          </div>
          {/* offcanvas-body */}
          <div className="flex justify-center items-center flex-col mb-5 mt-10">
            {/* image */}
            <label htmlFor="uploading">
              <input type="file" id='uploading' hidden/>
              <img style={{width:'150px', height:'150px', borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="profile" />
            </label>
             {/* edit symbol */}
            <button style={{height:'30px', width:"30px",borderRadius:'50%', marginTop:'-19px'}} className='bg-yellow-300 p-2 text-white rounded ' ><FaPen/></button>
            
            {/* name */}
            <div className="mt-10 mb-3 w-full px-5">
              <input type="text" placeholder='Username' className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* password */}
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='New Password' className='border border-gray-200 p-2 rounded w-full' />
            </div>
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='Confirm Password' className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* bio */}
            <div className="mb-3 w-full px-5">
              <textarea type="text" placeholder='Bio' rows={3} className='border border-gray-200 p-2 rounded w-full' />
            </div>
            {/* button */}
            <div className="mb-3 flex justify-end w-full mt-5 px-5">
               <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
               <button className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:border-green-600 hover:text-green-600 ms-5'>UPDATE</button>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Edit
