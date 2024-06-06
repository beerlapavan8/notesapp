import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='h-16 bg-yellow-400'>
        <ul className='flex items-center justify-evenly'>   
            <li className='flex items-center justify-center pt-5'><Link to="/add" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Add</Link></li>
            {/* <li className='flex items-center justify-center pt-5'><Link to="/login" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Login</Link></li> */}
            {/* <li className='flex items-center justify-center pt-5'><Link to="/note" className='text-black text-[20px]'>about us</Link></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
