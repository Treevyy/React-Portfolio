import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-24'>
        <form method='POST' action="https://getform.io/f/bgdpnlja" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#8c52ff] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Now that you know me, I'd like to get to know you! Submit the form below or, send me an email at aarontrevormoore@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
            <button className="cursor-pointer text-white border-2 border-[#8c52ff] px-4 py-3 my-8 mx-auto flex items-center transition-colors duration-300 ease-in-out hover:bg-[#8c52ff] hover:border-[#8c52ff]">
              Submit
            </button>
        </form>
    </div>
  )
}

export default Contact
