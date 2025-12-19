import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBooks from '../components/SellBooks'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'

function Profile() {
  const [tab,setTab] = useState(1)

  return (
    <>
    <Header/>
    {/* black div */}
    <div style={{height:'200px'}} className="bg-black"></div>
    {/* profile img */}
    <div style={{width:'230px', height:'230px', borderRadius:'50%', marginLeft:'70px', marginTop:'-130px'}} className='bg-white p-3'>
       <img style={{width:'200px', height:'200px', borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="profile" />
    </div>

    {/* name with edit block */}
    <div className="md:flex justify-between items-center md:px-20 px-5 my-5">
          <h1 className="text-2xl font-bold flex items-center">Username <FaCircleCheck className='text-blue-400 ms-3'/></h1>
          <Edit/>
    </div>
    <p className='text-justify md:px-20 px-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nesciunt quae rem culpa maxime ab natus, odit soluta sed minus aperiam. Praesentium nihil, consectetur voluptates repellendus omnis at laborum nesciunt!Sequi modi eius sit eum optio perspiciatis tempore iusto aliquid. Eaque vel ipsam repudiandae nam quod pariatur delectus voluptates maiores et ipsum distinctio necessitatibus consequatur voluptas, omnis vero tempore ab!</p>

    {/* tabs with contents */}
    <div className="md:px-40">
      {/* tabs-div */}
      <div className="flex justify-center items-center text-lg font-medium my-8">
        <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':'border-gray-200 border-b p-4 cursor-pointer'}>Sell Books</p>
        <p onClick={()=>setTab(2)} className={tab==2?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':'border-gray-200 border-b p-4 cursor-pointer'}>Book Status</p>
        <p onClick={()=>setTab(3)} className={tab==3?'text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer':'border-gray-200 border-b p-4 cursor-pointer'}>Purchase History</p>
      </div>
      {/* contents */}
     {
      tab==1 &&
        <SellBooks/>
     }
     {
      tab==2 &&
        <BookStatus/>
     }
     {
      tab==3 &&
        <Purchase/>
     }
    </div>
    <Footer/>
    </>
  )
}

export default Profile
