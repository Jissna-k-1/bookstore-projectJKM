import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    {/* header upper part */}
    <div className='flex justify-between items-center p-3 md:px-20'>
      {/* logo with title */}
       <div className='flex items-center'>
          <img width={'50px'} height={'60px'} src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png" alt="logo" />
          <h2 className='text-2xl font-bold ms-2'>BOOKSTORE</h2>
       </div>
      {/* logout */}
      <button className='bg-black px-2 py-3 rounded border text-white flex items-center hover:bg-white hover:text-black'><FaPowerOff className='me-2'/>LOGOUT</button>
    </div>
    {/* header lower part */}
    <div className="bg-black p-2">
      <marquee>      
        <p className='text-white'>Welcome, Admin! You're all set to manage and monitor the system. Let's get into work!</p>
     </marquee>
    </div>
    </>
  )
}

export default AdminHeader
