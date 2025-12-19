import React from 'react'
import { FaEdit } from 'react-icons/fa'

function Edit() {
  return (
    <div>
      <button className='border rounded p-3 text-blue-600 hover:text-white hover:bg-blue-700 flex items-center'>Edit <FaEdit className='ms-2'/></button>
      {/* offcanvas */}
      <div>
        <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
        </div>
        <div className="bg-white h-full w-90 fixed top-0 left-0">
          {/* offcanvas-header */}
          <div className="bg-black p-3 flex justify-between "></div>
          {/* offcanvas-body */}
        </div>
      </div>
    </div>
  )
}

export default Edit
