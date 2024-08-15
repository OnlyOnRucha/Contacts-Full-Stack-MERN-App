import React from 'react'
import add from '../assets/add.png'
import contacts from '../assets/contacts.png'

const Home = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='min-h-48 w-2/12 bg-[#fd8ab4] m-10 mt-32 p-8 rounded-lg shadow-xl cursor-pointer hover:scale-105 transition duration-500'>
        <img src={add} className=' flex justify-center items-center'  />
      </div>
      <div className='min-h-48 w-2/12 bg-[#fd8ab4] m-10 mt-32 p-6 rounded-lg shadow-xl cursor-pointer hover:scale-105 transition duration-500'>
      <img src={contacts} className='w-72' />
      </div>
    </div>
  )
}

export default Home