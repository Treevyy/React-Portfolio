import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Socials = () => {
  return (
    <footer name='socials' className='w-full pt-[80px] bg-[#0a192f] text-gray-300 py-8'>
        <div className='max-w-[1000px] mx-auto flex flex-col items-center'>
            <p className='text-3xl font-bold mb-2'>Socials</p>
            <div className='w-32 border-b-2 border-[#8c52ff] mb-4'></div>
            <div className='flex space-x-6'>
                <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank' rel='noreferrer' className='hover:text-[#8c52ff] transition-colors duration-300'>
                    <FaLinkedin size={30} />
                </a>
                <a href='https://github.com/Treevyy' target='_blank' rel='noreferrer' className='hover:text-[#8c52ff] transition-colors duration-300'>
                    <FaGithub size={30} />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Socials
