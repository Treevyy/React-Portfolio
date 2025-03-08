import Project from '../project';

const projectData = [
    {
      title: "Weather Dashboard",
      image: "/images/weather-dashboard.png",
      github: "https://github.com/Treevyy/Weather-Dashboard",
      deployed: "https://weather-dashboard-h6tx.onrender.com"
    },
    {
      title: "Blackjack",
      image: "/images/blackjack.png",
      github: "https://github.com/leviking12/Blackjack-Project",
      deployed: "https://leviking12.github.io/Blackjack-Project/"
    },
    {
      title: "README File Generator",
      image: "/images/readme-file-generator.png",
      github: "https://github.com/Treevyy/README-File-Generator",
      deployed: "https://app.screencastify.com/v2/manage/videos/pVpg6GD7UZQbECq1Ynsb"
    },
    {
      title: "Vehicle Builder",
      image: "/images/vehicle-builder.png",
      github: "https://github.com/Treevyy/Vehicle-Builder",
      deployed: "https://drive.google.com/file/d/1Qw5u79WscYuHcdxuzzfyLglho5YIKbpW/view"
    },
    {
      title: "Employee Tracker",
      image: "/images/employee-tracker.png",
      github: "https://github.com/Treevyy/Employee-Tracker",
      deployed: "https://drive.google.com/file/d/1Yy7Q0Lm3xgsRqM9El3YWAKM819-TaMqM/view"
    },
    {
      title: "Coming Soon Project 6",
      image: "https://via.placeholder.com/150",
      github: "https://github.com",
      deployed: "https://deployed.com"
    },
]

export default function Portfolio() {
    return (
      <>
        <h1>Portfolio Page</h1>
        <div className= "project-container">
       {projectData.map((project, index) => (
         <Project key={index} title={project.title} image={project.image} github={project.github} deployed={project.deployed} />
        ))}
        </div>
      </>
    );
  }
  