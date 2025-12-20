import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'

function AdminCollection() {
  const[tab, setTab] = useState(1)
  return (
   <>
    <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        <div className="col-span-1">
          <AdminSideBar/>
        </div>
        <div className="col-span-4 p-10">
          <h1 className='my-5 text-center text-3xl font-bold'>All Collections</h1>
          {/* tabs */}
          <div className="flex my-10 justify-center items-center">
             <p onClick={()=>setTab(1)} className={tab==1?"text-blue-600 font-bold border-t border-l border-r p-3 border-gray-200 cursor-pointer":"font-bold border-b p-3 border-gray-200 cursor-pointer"}>Books</p>
             <p onClick={()=>setTab(2)} className={tab==2?"text-blue-600 font-bold border-t border-l border-r p-3 border-gray-200 cursor-pointer":"font-bold border-b p-3 border-gray-200 cursor-pointer"}>Users</p>
          </div>

          {/* tabs contents */}
             {
              tab==1 &&
              <div className='md:grid grid-cols-4 my-5 w-full'>
                {/* duplicate book card */}
                <div className="shadow rounded p-3 mx-4 md:mb-0 mb-5">
              <img width={'300px'} height={'300px'} src="https://m.media-amazon.com/images/I/81C2QnortLL.jpg" alt="book" />
              <div className="flex justify-center items-center flex-col mt-4">
                <h3 className="text-blue-600 font-bold text-lg ">Author</h3>
                <h4 className='text-lg'>title</h4>
                <h4>$ price</h4>
                <div className='grid mt-3 w-full'>
                  <button className='bg-green-600 p-2 text-white'>APPROVE</button>
                </div>
              </div>
               </div>
              </div>
             }
             {
              tab==2 &&
              <div className='md:grid grid-cols-3 my-5 w-full'>
                {/* duplicate users card */}
                <div className="bg-gray-200 rounded p-3 m-2 text-wrap">
                   <p className="text-red-700 font-bold">ID : KHAYW28900PA</p>
                   <div className="flex justify-between text-wrap mt-2">
                    {/* user img */}
                    <img width={'90px'} height={'90px'} style={{borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="" />
                    {/* content */}
                    <div className='ms-3 mt-3'>
                      <h4 className="font-bold-text-2xl text-blue-800">name</h4>
                      <p>demo@gmail.com</p>
                    </div>

                   </div>
                </div>
                {/* duplicate users card */}
                <div className="bg-gray-200 rounded p-3 m-2 text-wrap">
                   <p className="text-red-700 font-bold">ID : KHAYW28900PA</p>
                   <div className="flex justify-between text-wrap mt-2">
                    {/* user img */}
                    <img width={'90px'} height={'90px'} style={{borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="" />
                    {/* content */}
                    <div className='ms-3 mt-3'>
                      <h4 className="font-bold-text-2xl text-blue-800">name</h4>
                      <p>demo@gmail.com</p>
                    </div>

                   </div>
                </div>
                {/* duplicate users card */}
                <div className="bg-gray-200 rounded p-3 m-2 text-wrap">
                   <p className="text-red-700 font-bold">ID : KHAYW28900PA</p>
                   <div className="flex justify-between text-wrap mt-2">
                    {/* user img */}
                    <img width={'90px'} height={'90px'} style={{borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="" />
                    {/* content */}
                    <div className='ms-3 mt-3'>
                      <h4 className="font-bold-text-2xl text-blue-800">name</h4>
                      <p>demo@gmail.com</p>
                    </div>

                   </div>
                </div>
                {/* duplicate users card */}
                <div className="bg-gray-200 rounded p-3 m-2 text-wrap">
                   <p className="text-red-700 font-bold">ID : KHAYW28900PA</p>
                   <div className="flex justify-between text-wrap mt-2">
                    {/* user img */}
                    <img width={'90px'} height={'90px'} style={{borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="" />
                    {/* content */}
                    <div className='ms-3 mt-3'>
                      <h4 className="font-bold-text-2xl text-blue-800">name</h4>
                      <p>demo@gmail.com</p>
                    </div>

                   </div>
                </div>
                {/* duplicate users card */}
                <div className="bg-gray-200 rounded p-3 m-2 text-wrap">
                   <p className="text-red-700 font-bold">ID : KHAYW28900PA</p>
                   <div className="flex justify-between text-wrap mt-2">
                    {/* user img */}
                    <img width={'90px'} height={'90px'} style={{borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="" />
                    {/* content */}
                    <div className='ms-3 mt-3'>
                      <h4 className="font-bold-text-2xl text-blue-800">name</h4>
                      <p>demo@gmail.com</p>
                    </div>

                   </div>
                </div>
                {/* duplicate users card */}
                <div className="bg-gray-200 rounded p-3 m-2 text-wrap">
                   <p className="text-red-700 font-bold">ID : KHAYW28900PA</p>
                   <div className="flex justify-between text-wrap mt-2">
                    {/* user img */}
                    <img width={'90px'} height={'90px'} style={{borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="" />
                    {/* content */}
                    <div className='ms-3 mt-3'>
                      <h4 className="font-bold-text-2xl text-blue-800">name</h4>
                      <p>demo@gmail.com</p>
                    </div>

                   </div>
                </div>
              </div>
             }
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default AdminCollection
