import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-9 bg-black text-white p-10">
        <div>
          <h4 className="font-bold">ABOUT US</h4>
          <p className="text-justify mt-5" style={{fontFamily:'cursive'}}>Founded with a love for reading and learning, BookNest is more than just a bookstore. We are a community of book lovers who believe that books have the power to inspire, educate, and transform lives. From timeless classics and bestselling novels to academic resources and children’s books, we carefully curate our collection to suit readers of all ages.</p>
        </div>

        <div className='md:ms-40 mt-5 md:mt-0'>
          <h4 className='font-bold'>NEWS LETTER</h4>
          <p className="my-5" style={{fontFamily:'cursive'}}>Stay updated with our latest trends</p>
          <div className="flex">
            <input type="text" placeholder='Email ID here'className='p-2 bg-white placeholder-gray-400 text-black' />
            <button className="p-2 bg-yellow-500"><FaArrowRight/></button>
          </div>
       </div>

        <div className='md:ms-40 md:mt-0 mt-5'>
          <h4 className='font-bold'>FOLLOW US</h4>
          <p className="my-5" style={{fontFamily:'cursive'}}>Let us be social</p>
          <div className="flex">
            <FaFacebook/>
            <FaInstagram className='mx-3'/>
            <FaTwitter className='me-3'/>
            <FaEnvelope/>
          </div>
       </div>

      </div>
    </>
  )
}

export default Footer
