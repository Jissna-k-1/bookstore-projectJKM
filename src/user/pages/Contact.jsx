import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <Header/>
      <div className='md:px-40 flex flex-col justify-center items-center p-5'>
        <div className="text-center my-5">
          <h1 className="text-3xl font-bold mb-5">Contacts</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas ipsum facilis, minus perferendis, nisi eos nemo cupiditate explicabo eius sequi! Sequi nulla incidunt quaerat voluptatem, nostrum expedita? Quas, ex!Sed mollitia inventore, rem accusantium voluptatem aperiam doloribus eveniet. Quis beatae odio iure sit reprehenderit nesciunt, temporibus facilis consequuntur blanditiis assumenda hic nihil asperiores tempora nobis ex recusandae, expedita ducimus?.</p>
       </div>

        <div className='md:flex justify-evenly items-center my-10'>
          <div className="flex items-center w-75 md:mt-0 mt-5">
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex justify-center items-center bg-gray-200 me-5">
              <FaLocationDot/>
            </div>
            <p>123 Main Street, Apt 48, Anytown, CA 91234</p>
          </div>
           <div className="flex items-center w-75 md:mt-0 mt-5">
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex justify-center items-center bg-gray-200 me-5">
              <FaPhone/>
            </div>
            <p>+91 8078153757</p>
          </div>
           <div className="flex items-center w-75 md:mt-0 mt-5">
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex justify-center items-center bg-gray-200 me-5">
              <FaEnvelope/>
            </div>
            <p>bookstore@gmail.com</p>
          </div>
        </div>
        
        <div className="md:grid grid-cols-2 gap-10 md:mt-0 my-5 md:px-30">
          {/* form */}
          <div className="bg-gray-200 p-5">
           <h1 className="text-xl text-center">Send me Message</h1>
           <div className="my-3">
            <input placeholder='Name' type="text" className="bg-white p-2 w-full rounded" />
           </div>
            <div className="my-3">
            <input placeholder='E Mail' type="text" className="bg-white p-2 w-full rounded" />
           </div>
            <div className="my-3">
            <textarea placeholder='Message' type="text" className="bg-white p-2 w-full rounded" />
           </div>
           <div className="my-3">
            <button className='bg-black text-white p-2 w-full flex justify-center items-center'>Send <FaPaperPlane className='ms-2'/></button>
           </div>
          </div>

          {/* map */}
          <div className='mt-5 w-full md:mt-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1003926.0764500682!2d75.42687387037459!3d10.611487439639783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1765904644551!5m2!1sen!2sin" width={"100%"} height={"400px"} style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
     </div>      
    <Footer/>
    </>
  )
}

export default Contact
