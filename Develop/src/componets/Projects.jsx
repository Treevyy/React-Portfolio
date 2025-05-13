import React from 'react'
import weatherdashboard from '../assets/weatherdashboard.png'
import blackjack from '../assets/blackjack.png'
import fizz from '../assets/fizz.png'
import readme from '../assets/readmefilegenerator.png'
import vehiclebuilder from '../assets/vehiclebuilder.png'
import employeetracker from '../assets/employeetracker.png'
import candidatesearch from '../assets/candidatesearch.png'
import kanbanboard from '../assets/kanbanboard.png'
import socialnetworkapi from '../assets/socialnetworkapi.png'
import booksearchengine from '../assets/booksearchengine.png'
import techquiztestsuite from '../assets/techquiztestsuite.png'
import githubactions from '../assets/githubactions.png'
import codezilla from '../assets/codezilla.png'


const projectData = [
  {
    title: "Weather Dashboard",
    image: weatherdashboard,
    github: "https://github.com/Treevyy/Weather-Dashboard",
    deployed: "https://weather-dashboard-h6tx.onrender.com"
  },
  {
    title: "Blackjack",
    image: blackjack,
    github: "https://github.com/leviking12/Blackjack-Project",
    deployed: "https://leviking12.github.io/Blackjack-Project/"
  },
  {
    title: "Fizz Dating App",
    image: fizz,
    github: "https://github.com/Treevyy/Fizz",
    deployed: "https://fizz-pv3d.onrender.com"
  },
  {
    title: "Vehicle Builder",
    image: vehiclebuilder,
    github: "https://github.com/Treevyy/Vehicle-Builder",
    deployed: "https://drive.google.com/file/d/1Qw5u79WscYuHcdxuzzfyLglho5YIKbpW/view"
  },
  {
    title: "README File Generator",
    image: readme,
    github: "https://github.com/Treevyy/README-File-Generator",
    deployed: "https://drive.google.com/file/d/1ypGWTxIBea_0EZGGuwxYkWO1SCozieXw/view"
  },
  {
    title: "Employee Tracker",
    image: employeetracker,
    github: "https://github.com/Treevyy/Employee-Tracker",
    deployed: "https://drive.google.com/file/d/1Yy7Q0Lm3xgsRqM9El3YWAKM819-TaMqM/view"
  },
  {
    title: "Candidate Search",
    image: candidatesearch,
    github: "https://github.com/Treevyy/Candidate-Search",
    deployed: "https://candidate-search-fgfk.onrender.com/"
  },
  {
    title: "Kanban Board",
    image: kanbanboard,
    github: "https://github.com/Treevyy/Kanban-Board",
    deployed: "https://kanban-board-msxw.onrender.com",
    credentials: {
      username: "JollyGuru",
      password: "password"
    }
  },
  {
    title: "Scoial Network API",
    image: socialnetworkapi,
    github: "https://github.com/Treevyy/Social-Network-API",
    deployed: "https://drive.google.com/file/d/1USuTK3OpDaSEx6LQWmUx_XwgnUdPOKol/view?usp=sharing"
  },
 {
    title: "Book Search Engine",
    image: booksearchengine,
    github: "https://github.com/Treevyy/Book-Search-Engine",
    deployed: "https://book-search-engine-i5f5.onrender.com"
  },
   {
    title: "Tech Quiz Test Suite",
    image: techquiztestsuite,
    github: "https://github.com/Treevyy/Tech-Quiz-Test-Suite",
    deployed: "https://drive.google.com/file/d/15DaVA2Tb-8K8FmawfDwR8JZpidLSvb8Q/view"
  },
   {
    title: "GitHub Actions CI-CD Setup",
    image: githubactions,
    github: "https://github.com/Treevyy/GitHub-Actions-CI-CD-Setup",
    deployed: "https://drive.google.com/file/d/13M3UUT9ARd3Nw7q2rc_wEXY9IVbuxJ9V/view"
  },
    {
    title: "Codezilla",
    image: codezilla,
    github: "https://github.com/Treevyy/Codezilla",
    deployed: "https://codezilla-fnqd.onrender.com/"
  }
];

const Projects = () => {
  return (
    <div name='projects' className='w-full min-h-screen bg-[#0a192f] text-gray-300 pt-24'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#8c52ff]'>Projects</p>
          <p className='pt-8'>Here is my work from 2025!</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projectData.map((project, index) => (
            <div key={index} className='bg-[#1e293b] p-4 rounded-lg shadow-lg'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-md' />
              <h3 className='text-xl font-bold mt-4'>{project.title}</h3>
              <div className='mt-4 flex justify-center'>
                <a href={project.github} target='_blank' rel='noreferrer' className='text-center rounded-lg px-4 py-2 m-2 bg-[#1e3a8a] text-white font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-[#1e40af]'>GitHub</a>
                <a href={project.deployed} target='_blank' rel='noreferrer' className='text-center rounded-lg px-4 py-2 m-2 bg-[#1e3a8a] text-white font-bold text-lg transition-colors duration-300 ease-in-out hover:bg-[#1e40af]'>Deployed</a>
              </div>
              {project.credentials && (
                <div className='mt-2 text-sm text-gray-400'>
                  <p><strong>Username:</strong> {project.credentials.username}</p>
                  <p><strong>Password:</strong> {project.credentials.password}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
