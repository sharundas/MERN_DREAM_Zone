import React from 'react';
import {Link} from 'react-router-dom'

export default function PageNoteFound() {
  return (
    <div className='flex items-center justify-center flex-col p-20'>
      <h1 className='text-2xl'>Currently News Section is not Available</h1>

      <Link to='/' className='text-gray-800 text-lg hover:underline bg-blue-400 rounded-md p-3 mt-6'>
        Back To Home
      </Link>
    </div>
  )
}
