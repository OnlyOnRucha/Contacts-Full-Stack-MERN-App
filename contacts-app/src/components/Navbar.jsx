import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#F8E8EE] p-6 text-black flex gap-3 justify-between'>
        <h1 className='place-self-end text-3xl font-bold ml-4 text-[#aa0541]'>LOGO</h1>
        <Link to="/create" className='ml-auto flex items-center p-2 px-4 rounded-full border-2 border-[#ff5c98] bg-[#fd8ab4] text-[#aa0541] hover:scale-105 transition duration-500 hover:bg-transparent'>Create New</Link>
        <Link to="/read" className='mx-4 flex items-center p-2 px-4 rounded-full border-2 border-[#ff5c98] text-[#ff5c98] font-semibold hover:scale-105 transition duration-500'>Log out</Link>
    </div>
  )
}

export default Navbar