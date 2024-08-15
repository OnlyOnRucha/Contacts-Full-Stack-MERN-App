import React from 'react'
import add from '../assets/add.png'
import contacts from '../assets/contacts.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    
    <div className='flex items-center justify-center'>
      <div className='min-h-48 w-2/12 bg-[#fd8ab4] m-10 mt-32 p-8 rounded-lg shadow-xl cursor-pointer hover:scale-105 transition duration-500'>
        <Link to="/create">
        <img src={add} className=' flex justify-center items-center'  />
        </Link>
        
        
      </div>
      <div className='min-h-48 w-2/12 bg-[#fd8ab4] m-10 mt-32 p-6 rounded-lg shadow-xl cursor-pointer hover:scale-105 transition duration-500'>
      <Link to="/read"><img src={contacts} className='w-72' /></Link>
      
      </div>
    </div>
  )
}

export default Home