import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
 const [listStatus, setListStatus] = useState(false)

const menuBtnClick=()=>{
  setListStatus(!listStatus)
}


  return (
    <>
    {/* header upper part -ttile, login  */}
      <div className='grid grid-cols-3 p-5'>

        {/* logo with title */}
        <div className='flex items-center'>
          <img width={'50px'} height={'60px'} src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png" alt="logo" />
          <h1 className='text-2xl font-bold ms-1 md:hidden'>BOOKSTORE</h1>
       </div>

       {/* title */}
       <div className="md:flex justify-center items-center hidden">
        <h1 className="text-3xl font-bold">BOOK STORE</h1>
       </div>

       {/* login */}
       <div className="md:flex justify-end items-center hidden">
        {/* icons-fb,twitter,ig */}
        <FaInstagram/>
        <FaFacebook className='mx-1'/>
        <FaTwitter/>
        <Link to={'/login'} className='ms-2 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'> <FaUser className='me-1'/> Login</Link>
       </div>
       


      </div>

      {/* header lower part- links and menu + login btn */}
      <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>

        {/* div for menu bar & login btn in mobile screen*/}
        <div className="flex justify-between items-center md:hidden">
          {/* menu bar- btn */}
          <button onClick={menuBtnClick} className='cursor-pointer'> <FaBars/> </button>
          {/* login link  */}
            <Link to={'/login'} className='ms-2 border rounded py-1 px-2 hover:bg-white hover:text-black flex items-center'> <FaUser className='me-1'/> Login</Link>

        </div>

        {/* ul for links */}
        <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/books'}>BOOKS</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'}>CONTACT</Link></li>

        </ul>

      </nav>

    </>
  )
}

export default Header
