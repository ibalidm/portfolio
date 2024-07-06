import Avatar from '.././assets/avatar.jpg';
import Experience from '.././assets/experience.png';
import SEO from '.././assets/seo.png';
import Email from '.././assets/email.png';
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";
import { FaRegHandRock } from "react-icons/fa";


const Home = () => {
  return (
    <section className='flex h-[100%] p-5 gap-4'>
      <div className="flex flex-col bg-[#FFFFFF] p-10 rounded-[15px] basis-[55%] bg-gradient-to-l from-white to-[#D6EFD8] text-wrap">
        <div className='flex flex-col basis-[50%] gap-10'>
          <div className='text-[20px] font-semibold pt-10 leading-10'> Hey! 
            < br/> 
            <span className='text-[30px] font-bold leading-1 mr-4'>I'm Ibrahim Ali</span> 
              <span className='tracking-widest'>
                Digital Marketer
              </span>
            <br/> 
            <span className='text-gray-600 leading-3 tracking-widest'> with 5 years of experience</span> 
          </div>
          <div className='text-[17px] text-normal text-gray-500'> 
            Passionate digital marketing freelancer with 5 years of expertise. Specializing in SEO, 
            Social Media, Email, Advanced Facebook Marketing, and Ad Campaigns. Let's elevate your online presence together! 
          </div>
          <div className="flex gap-10">
            <button className="flex justify-center items-center border w-[130px] h-[40px] border-black rounded-[4px] gap-2 font-mono hover:bg-TextSecondary hover:text-white hover:border-none transition-colors">
              <FaRegHandRock/>
              <span>Say Hello</span>
            </button>
            <CiFacebook className='text-[36px] cursor-pointer hover:bg-secondary hover:rounded-full hover:text-white'/>
            <CiTwitter className='text-[36px] cursor-pointer hover:bg-secondary hover:rounded-full hover:text-white'/>
            <CiLinkedin className='text-[36px] cursor-pointer hover:bg-secondary hover:rounded-full hover:text-white'/>
            <PiGithubLogoLight className='text-[36px] cursor-pointer hover:bg-secondary hover:rounded-full hover:text-white'/>
          </div>
        </div>
        <div className='flex gap-10 mt-24'>
            <div className="flex justify-center items-center text-white bg-TextSecondary w-[220px] h-[50px] rounded-lg gap-2 opacity-90">
              <img className="flex h-[20px] text-white w-[20px]" src={Experience} alt="" />
              <span>5+ Years of Experience</span>
            </div>
            <div className="flex pl-4 items-center text-black bg-secondary w-[220px] h-[50px] rounded-lg  opacity-90">
              <img className="flex h-[20px] text-white w-[20px]" src={SEO} alt="" />
              <span className='pl-4'>8+ SEO Projects</span>
            </div>
            <div className="flex pl-4 items-center bg-[#f2f4f8] border border-TextSecondary w-[220px] h-[50px] rounded-lg gap-2">
              <img className="flex h-[20px] w-[20px]" src={Email} alt="" />
              <span className='pl-2'>4+ Email Marketing</span>
            </div>
          </div>
      </div>
      <div className="flex justify-center basis-[50%] h-full w-[100%] brightness-125">
        <img className='bg-cover w-auto rounded-[15px] overflow-hidden' src={Avatar} alt="" />
      </div>
    </section>
  )
}

export default Home;