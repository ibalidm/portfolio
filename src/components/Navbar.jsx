import { GoDownload } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-5 sticky top-0 text-TextPrimary font-semibold leading-5 tracking-wider'> 
        <ul className='flex basis-[40%]'>
            <li className='cursor-pointer text-[20px] font-bold'>Ibrahim</li>
        </ul>
        <ul className='hidden lg:flex basis-[40%] items-center gap-14 text-[16px]'>
            <li className='cursor-pointer'>Skills</li>
            <li className='cursor-pointer'>Experience</li>
            <li className='cursor-pointer'>Education</li>
            <li className='cursor-pointer'>Achivement</li>
        </ul>
        <ul className='hidden lg:flex'>
            <button className="flex justify-center items-center border w-[200px] h-[40px] border-black rounded-[4px] hover:bg-TextSecondary hover:text-white hover:border-none transition-colors">
                <li className='flex justify-center items-center gap-2 cursor-pointer'>
                    <GoDownload className="text-[18px]"/>
                    <span className="text-[15px]">Download CV</span>
                </li>
            </button>
        </ul>
        <ul className='flex lg:hidden'>
            Mobile menu
        </ul>
    </nav>
  )
}

export default Navbar;