import React from 'react'
import profilepic from '../assets/profilepic.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#ccd6f6]'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Trevor Moore</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Web Developer </h2>
          <p className='text-[#8892b0] py-4 max-w-700px'>"Every line of code builds the future for tomorrow." 
          </p>
          <div className='flex-shrink-0 mt-8 md:mt-0' style={{ marginLeft: '25rem' }}>
              <img src={profilepic} alt="Picture of me leaning on the front of my car" className='rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover' />
            </div>
        </div>
    </div>
  )
}

export default Home
