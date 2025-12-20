import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import Footer from '../../components/Footer'
import { FaPen, FaUser } from 'react-icons/fa'

function AdminProfile() {
  return (
   <>
    <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        <div className="col-span-1">
          <AdminSideBar/>
        </div>
        <div className="col-span-4 p-10">
          <h1 className='text-center my-5 font-bold text-3xl '>Settings</h1>
          <div className="md:grid grid-cols-2 items-center mt-10 gap-10">
            {/* text */}
            <div>
            <h2 className='text-xl font-bold mb-5'>Welcome to the Admin Settings Panel</h2>
            <p className='text-justify mb-5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque qui consequuntur consectetur molestiae nisi beatae nemo dolorem veritatis enim et ipsam, repudiandae nesciunt. Et dolorum fuga, iste numquam asperiores voluptate.
              Odit culpa qui incidunt iusto harum sit consequatur molestias beatae repudiandae deserunt eligendi itaque minus animi, laboriosam id eaque sed voluptatum temporibus officia quidem illo earum rerum. Magni, sapiente nihil.
              Perspiciatis, commodi unde provident quidem dolor molestiae nostrum corporis quaerat quos asperiores nobis quae labore voluptatibus praesentium dolorem, numquam aliquam odit natus ducimus quam! Provident, quia. Quam recusandae nisi soluta.
            </p>
            <p className='font-bold mb-2 flex items-center'><FaUser className='me-2'/>Account Settings</p>
            <ul>
              <li>Profile Information :</li>
              <li>Login Credentials :</li>
              <li>Activity Logs :</li>

            </ul>
            </div>
            {/* form */}
              
          <div className="flex justify-center items-center flex-col p-5 rounded bg-blue-100">
            {/* image */}
            <label htmlFor="uploading">
              <input type="file" id='uploading' hidden/>
              <img style={{width:'150px', height:'150px', borderRadius:'50%'}} src="https://slw-comicverse.dslw.unibas.ch/img/members/loricourt.png" alt="profile" />
            </label>
            {/* edit symbol */}
            <button style={{height:'30px', width:"30px",borderRadius:'50%', marginTop:'-19px'}} className='bg-yellow-300 p-2 text-white rounded ' ><FaPen/></button>
            {/* name */}
            <div className="mt-10 mb-3 w-full px-5">
              <input type="text" placeholder='Username' className='border border-gray-300 bg-white p-2 rounded w-full' />
            </div>
            {/* password */}
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='New Password' className='border border-gray-300 bg-white p-2 rounded w-full' />
            </div>
            <div className="mb-3 w-full px-5">
              <input type="password" placeholder='Confirm Password' className='border border-gray-300 bg-white p-2 rounded w-full' />
            </div>
            
            {/* button */}
            <div className="mb-3 flex justify-center w-full mt-5 px-5">
               <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
               <button className='px-3 py-2 rounded border bg-blue-600 text-white hover:bg-white hover:border-blue-600 hover:text-blue-600 ms-7'>UPDATE</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default AdminProfile
