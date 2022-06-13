import { useRef, useEffect} from "react";
import ScrollReveal from 'scrollreveal';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components

import ProjectCard from "./ProjectCard/ProjectCard";
import './ProjectsComponent.css'




function ProjectsRComponent() {
  gsap.registerPlugin(ScrollTrigger);

  
  // useEffect(() => {
  //   gsap.to("#project_2", {
  //     visibility: "visible",
  //     opacity:1,
  //     ease: "easeInOut",
  //     scrollTrigger: {
  //       scroller:".projects_content",
  //       trigger: "#project_2",
  //       markers: true,
  //       start: "top center",
  //       end: 'bottom bottom+=400',
  //     }
  //   });
  // }, []);

const projects =[{
  title:'Website',
  descreption:"Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.",
  repo_link:"",
  demo_link:"",
  project_info:{
    tools:"",
    date:"hahaha",
  }
}
,{
  title:'Website',
  descreption:"Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.",
  repo_link:"",
  demo_link:"",
  project_info:{
    tools:"",
    date:"hahaha",
  }
},{
  title:'Website',
  descreption:"Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.",
  repo_link:"",
  demo_link:"",
  project_info:{
    tools:"",
    date:"hahaha",
  }
},{
  title:'Website',
  descreption:"Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.",
  repo_link:"",
  demo_link:"",
  project_info:{
    tools:"",
    date:"hahaha",
  }
},{
  title:'Website',
  descreption:"Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.",
  repo_link:"",
  demo_link:"",
  project_info:{
    tools:"",
    date:"hahaha",
  }
}
]

// useEffect(()=>{
//   ScrollReveal().reveal('#project_1', { distance: '100%',origin: 'bottom',easing: 'ease-in' ,duration:1000,reset:true });
//   ScrollReveal().reveal('#project_2', { distance: '150%',origin: 'bottom',easing: 'ease-in' ,duration:1000,reset:true });
//   ScrollReveal().reveal('#project_3', { distance: '100%',container:".projects_content",origin: 'bottom',easing: 'ease-in' ,duration:1000,reset:true });
//   ScrollReveal().reveal('#project_4', { distance: '100%',origin: 'bottom',container:".projects_content",easing: 'ease-in' ,duration:1000,reset:true });
//   ScrollReveal().reveal('#project_5', { distance: '100%',origin: 'bottom',easing: 'ease-in' ,container:".projects_content",duration:1000,reset:true });

// },[])
  return (<>
  <section className="projects">
      <div className="section_outer">
        <div className="projects_inner">
          <div className="projects_content">
            {projects.map((project, ind)=>{
                return <ProjectCard key={ind} id={`project_${ind+1}`} project={project}/>
            })}
          </div>
        </div>
      </div>
    </section>
    
  
  </>);
}

export default ProjectsRComponent;