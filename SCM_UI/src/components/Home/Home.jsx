import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {



  return (
    <div className='flex justify-center items-center min-h-[80vh] flex-wrap'>
      <div id='left-content' className='w-full md:w-[35%] min-h-[70%] flex justify-center items-center flex-col text-center text-wrap'>
        <p className='text-5xl font-semibold mb-10'>Start Managing Contact on Cloud.</p>
        <Link to='/about' className='border border-sky-600 text-sky-600 py-3 px-4 hover:text-white hover:bg-sky-600 rounded-md flex items-center'>Read More
          <svg className='h-4 w-4 pt-[2px]' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
      <div id='right-content' className='w-full md:w-[35%] flex justify-center items-center'>
        <img src='../images/contact.png' alt="Home Page Image" className='h-[80%] w-[80%]' />
      </div>
    </div>
  )
}

export default Home
