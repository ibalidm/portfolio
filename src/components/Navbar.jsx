import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-5 sticky top-0 text-TextPrimary border border-red-600 font-semibold leading-5 tracking-wider'> 
        <ul className='flex basis-[40%]'>
            <li className='cursor-pointer text-[20px] font-bold'>Ibrahim</li>
        </ul>
        <ul className='hidden lg:flex basis-[40%] items-center gap-8 text-[16px]'>
            <li className='cursor-pointer'>Skills</li>
            <li className='cursor-pointer'>Experience</li>
            <li className='cursor-pointer'>Education</li>
            <li className='cursor-pointer'>Achivement</li>
        </ul>
        <ul className='hidden lg:flex'>
            <li className='cursor-pointer'>Download CV</li>
        </ul>
        <ul className='flex lg:hidden'>
            Mobile menu
        </ul>
    </nav>
  )
}

export default Navbar;