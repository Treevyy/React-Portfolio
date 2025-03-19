import React from 'react'
import weatherdashboard from '../assets/weatherdashboard.png'
import blackjack from '../assets/blackjack.png'
import fizz from '../assets/fizz.png'
import readme from '../assets/readmefilegenerator.png'
import vehiclebuilder from '../assets/vehiclebuilder.png'
import employeetracker from '../assets/employeetracker.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full min-h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#8c52ff]'>Projects</p>
            <p className='py-6'>Check out my work for 2025!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{ backgroundImage: `url(${weatherdashboard})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                <div className='opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Weather Dashboard
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Treevyy/Weather-Dashboard" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Github</button>
                        </a>
                        <a href="https://weather-dashboard-h6tx.onrender.com/" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Deployed</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${blackjack})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Blackjack
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/leviking12/Blackjack-Project" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Github</button>
                        </a>
                        <a href="https://leviking12.github.io/Blackjack-Project/" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Deployed</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${fizz})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Fizz Dating App
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Treevyy/Fizz" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Github</button>
                        </a>
                        <a href="https://fizz-pv3d.onrender.com" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Deployed</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${vehiclebuilder})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Vehicle Builder
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Treevyy/Vehicle-Builder" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Github</button>
                        </a>
                        <a href="https://app.screencastify.com/v2/manage/videos/0EaD2TrrXB3awiIe0lAo" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Deployed</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${readme})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    README File Generator
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Treevyy/README-File-Generator" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Github</button>
                        </a>
                        <a href="https://app.screencastify.com/v2/manage/videos/pVpg6GD7UZQbECq1Ynsb" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Deployed</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${employeetracker})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Employee Tracker
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Treevyy/Employee-Tracker" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Github</button>
                        </a>
                        <a href="https://app.screencastify.com/v2/manage/videos/G7lXVYVgDeCeURBOTWXo" target="_blank" rel="noreferrer">
                            <button className='cursor-pointer text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-teal-200'>Deployed</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    
)
}

export default Projects
