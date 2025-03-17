import React from 'react'

const Resume = () => {
    const googleDocUrl='https://docs.google.com/document/d/1Gy07F28NpZ5YqMGICGkH9u54KSrxz4Z8lqB4Itc-Nps/edit?tab=t.0'
  return (
    <div name='resume' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#8c52ff]'>Resume</p>
        </div>

        <div className='mb-8'>
            <iframe 
            src={googleDocUrl}
            title='Resume'
            className='w-full h-[500px] sm:h-[300px] md:h-[400px] lg:h-[500px] border border-gray-300'>
            </iframe>
        </div>
        <a 
        href={googleDocUrl} target="_blank" rel="noneferrer"> 
            <button className='cursor-pointer text-white border-2 border-[#8c52ff] px-4 py-3 my-8 mx-auto flex items-center transition-colors duration-300 ease-in-out hover:bg-[#8c52ff] hover:border-[#8c52ff]'>
                Download Resume
            </button>
        </a>
        <p></p>
      </div>
    </div>
  )
}

export default Resume
