import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Initials from '../assets/initials.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white'>
        <div>
            <img src={Initials} alt="Initials" style={{width: '80px'}}/>
        </div>
        
            <ul className='hidden md:flex ml-auto'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        

            <div onClick={handleClick} className='md:hidden ml-auto z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <div>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Resume</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
            </div>


            <div></div>
    </div>
  )
}

export default Navbar
