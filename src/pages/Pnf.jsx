import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div className="flex justify-center items-center flex-col" style={{height:'100vh'}}>
      <h1 className='text-5xl font-bold'>404</h1>
      <img className='w-100' src="https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif" alt="pnf" />
      <h6 className='text-2xl' style={{fontFamily:'cursive'}}>the page you are looking is not found</h6>
    <Link to={'/'} className='bg-black text-white mt-4 px-4 py-2 rounded'>BACK TO HOME</Link>

    </div>
  )
}

export default Pnf
