import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
             <p className='text-4xl font-bold inline border-b-4 border-[#8c52ff]'>
              About Me
              </p>
            </div>
            <div></div>
            </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hello! My name is Trevor Moore, it's nice to meet you! Here is a little bit about me.</p>
          </div>
          <div>
            <p className='font-roboto'>I'm currently a student in the EDX SMU Full-Stack Web Developement course, which is a 6 month Bootcamp that has inspired me to have a deep passion for web development. I enrolled into the class on November 4th, 2024 I have 4 months experience into this new career path as of March 16th, 2025. I'm 32 years old, born and raised in Dallas, Texas. My spouse and I have been together for 18 years, we have two wonderful kids together, one is our beautiful 3-year-old daughter and the other is our adorable 4-month-old son. I am driven by the desire to build a new and better life in the tech industry for our family. I come from a hands-on background in labor, having worked in both oilfield operations and warehouse environments. I'm determined to create a brighter future for my kids, meaning I am searching to have a better work life balance and not miss out on my babies growing up. I am commited to growth and development, and I plan to accomplish my goals and see my career transiton into the tech world. Where I stive to be the best developer I can from trial and error, but also focus on safety, quality, speed and accuracy to accomplish task in this ever evloving industry. With time, practice and knowledge I want exceed expectations into my new sought after career for my family, employeer and clients.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
