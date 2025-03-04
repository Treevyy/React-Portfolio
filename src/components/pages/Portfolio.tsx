import Project from '../Project';

const projectData = [
    {
      title: "Weather Dashboard",
      image: "/images/weather-dashboard.png",
      github: "https://github.com/Treevyy/Weather-Dashboard",
      deployed: "https://weather-dashboard-h6tx.onrender.com"
    },
    {
      title: "Project 2",
      image: "https://via.placeholder.com/150",
      github: "https://github.com",
      deployed: "https://deployed.com"
    },
    {
      title: "Project 3",
      image: "https://via.placeholder.com/150",
      github: "https://github.com",
      deployed: "https://deployed.com"
    },
    {
      title: "Project 4",
      image: "https://via.placeholder.com/150",
      github: "https://github.com",
      deployed: "https://deployed.com"
    },
    {
      title: "Project 5",
      image: "https://via.placeholder.com/150",
      github: "https://github.com",
      deployed: "https://deployed.com"
    },
    {
      title: "Project 6",
      image: "https://via.placeholder.com/150",
      github: "https://github.com",
      deployed: "https://deployed.com"
    },
]

export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio Page</h1>
        <div className= "project-container">
       {projectData.map((project, index) => (
         <Project key={index} title={project.title} image={project.image} github={project.github} deployed={project.deployed} />
        ))}
        </div>
      </div>
    );
  }
  