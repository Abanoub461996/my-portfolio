import { useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// components

import ProjectCard from "./ProjectCard/ProjectCard";
import './ProjectsComponent.css'




function ProjectsRComponent() {
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
}
]

// gsap.defaults({
//   overwrite: 'auto',
//   duration: 0.5,
//   scrub: true,
//   pin:'.projects_content',
//   scroller: '.projects_content'
// });

projects.forEach((proj,i)=>{
    gsap.to(`#project_${i+1}`, {
      ease: "easeInOut",
      scroller: '.projects_content',
      // toggleAction:"dsd",
      scrollTrigger: {
        trigger: `#project_${i+1}`,
        markers:true,
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "center-=100 center",
        end: 'center center',
        scrub: true
      }
    });
})

// useEffect(() => {
//   gsap.to("#otherId", {
//     display: "block",
//     opacity:1,
//     ease: "easeInOut",
//     scrollTrigger: {
//       trigger: "#otherId",
//       // markers: true,
//       start: "center center",
//       end: 'bottom center',
//       preventOverlaps: true,
//       fastScrollEnd: true,
//       scrub: true
//     }
//   });
// }, []);
// useEffect(() => {
//   gsap.to("#LB1", {
//     display: "none",
//     ease: "easeInOut",
//     scrollTrigger: {
//       trigger: "#LB1",
//       preventOverlaps: true,
//       fastScrollEnd: true,
//       start: "top center",
//       end: 'bottom-=200 center',
//       scrub: true
//     }
//   });
// }, []);
// useEffect(() => {
//   gsap.to("#LB2", {
//     display: "block",
//     opacity:1,
//     ease: "easeInOut",
//     scrollTrigger: {
//       trigger: "#LB2",
//       preventOverlaps: true,
//       fastScrollEnd: true,
//       start: "top-=200 center",
//       end: 'bottom center',
//       scrub: true
//     }
//   });
// }, []);

  return (<>
  <section class="projects">
      <div class="section_outer">
        <div class="projects_inner">
          <div class="projects_content">
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