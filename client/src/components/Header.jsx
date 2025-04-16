import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  return (
    <nav className='border-b-1 flex justify-between px-16 my-4 items-center py-5'>

      {/* Logo */}
      {/* dark:text-white for the link */}
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>DevDiaries'</span>
        Blog
      </Link>
      
      {/* Search bar */}
      <form action="" method="post" className='bg-gray-50 border-0 lg:border-2 border-[#0000007b] flex items-center rounded-lg px-3 py-2'>
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder='Search...' 
          className=' border-none outline-0 hidden lg:inline text-ellipsis' 
          
        />
        
        <button type="button" className='cursor-pointer'>
          <AiOutlineSearch className="w-4 h-4 font-light text-[#000000b5]" />
        </button>

      </form>

      <button type="button" className='cursor-pointer lg:hidden text-shadow-white bg-gray-100 w-12 h-10 rounded-lg '>
        <AiOutlineSearch className=' mx-auto' />
      </button>

      {/* Nav Links */}
      <div className='flex gap-10 items-center'>
        <Link to='/' className='hover:text-[#007bff]'>Home</Link>
        <Link to='/about' className='hover:text-[#007bff]'>About</Link>
        <Link to='/projects' className='hover:text-[#007bff]'>Projects</Link>
      </div>

      {/* Nav Toggle & Sign In */}
      <div className='flex items-center gap-6'>
        {/* Toggle dark and light mode */}
        <button type="button" className='bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-lg'>
          <FaMoon className='mx-auto'/>
        </button>

        {/* Sign In */}
        <button type="button" className='border-[2.5px] border-purple-500 px-4 py-1 rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-0 hover:px-[18px] hover:py-[6px] hover:text-white cursor-pointer'>
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Header
