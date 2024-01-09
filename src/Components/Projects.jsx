import React from "react";
import YoutubeClone from "../assets/proImage/YoutubeClone.png";
import Pepsi from "../assets/proImage/Pepsi.png";
import ToDo from "../assets/proImage/ToDo.png";
import Netflix from "../assets/proImage/netflix.jpg"

const Projects = () => {

    const project = [
        {
            id:1,
            src: Pepsi,
            demoLink:"https://naveen2003dev.github.io/Pepsi_Landing_Page/",
            codeLink:"https://github.com/naveen2003dev/Pepsi_Landing_Page"
        },
        {
            id:2,
            src: YoutubeClone,
            demoLink:"https://naveen2003dev.github.io/Youtube_Clone/",
            codeLink:"https://github.com/naveen2003dev/Youtube_Clone"
        },
        {
            id:3,
            src: ToDo,
            demoLink:"https://codepen.io/Naveen-Bhadouria/pen/JjwBmwz",
            codeLink:"https://github.com/naveen2003dev/To-Do-List"
        },
        {
            id:4,
            src: Netflix,
            demoLink:"https://codepen.io/Naveen-Bhadouria/pen/JjwBmwz",
            codeLink:"https://github.com/naveen2003dev/Netlix_Clone"
        }
    ]

  return (
    <div name="Projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check Out Some of my work here.....</p>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        
        {project.map(({id, src, demoLink, codeLink}) => (

            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
          <img src={src} alt="" className="rounded-md duration-300 hover:scale-105" />

          
          <div className="flex items-center justify-center">
            <a href={demoLink} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105">Demo</button></a>
            <a href={codeLink} target="_blank"><button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105">Code</button></a>
          </div>
          </div>
        
        ))}
        
        </div>
      </div>
    </div>
  );
};

export default Projects;
