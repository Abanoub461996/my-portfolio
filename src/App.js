import { useRef, useEffect, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// components
// HeroSection
import HeroSection from './scenes/hero-section/HeroSection';
// Personal
import PersonalRComponent from './scenes/Personal/PersonalRComponent';
import PersonalLBComponent from './scenes/Personal/PersonalLBComponent';
// Projects
import ProjectsRComponent from "./scenes/OutstandingProjects/ProjectsRComponent";
import ProjectsLBComponent from "./scenes/OutstandingProjects/ProjectsLBComponent";
// SKILLS
import SkillsLBComponent from "./scenes/ProgramingSkills/SkillsLBComponent";
import SkillsRComponent from "./scenes/ProgramingSkills/SkillsRComponent";
// Education
import EducationComponent from "./scenes/Education/EducationComponent.jsx"
// Footer
import Contact from "./scenes/contact/ContactComponent";
// SideBar
import Sidebar from "./scenes/stickySideBar/SidebarComponent";
// Styling Sheet
import './App.css';


function App() {
  const [innerWidth, setInnerWidth]=useState(-window.innerWidth/2);
console.log(innerWidth);
  gsap.registerPlugin(ScrollTrigger);

  
  useEffect(() => {
    gsap.to("#L1", {
      ease: "easeInOut",
      x:0,
      opacity:1,
      scrollTrigger: {
        trigger: "#projects",
        markers:true,
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "top center",
        end: 'center-=200 center',
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to("#R1", {
      ease: "easeInOut",
      x:0,
      opacity:1,
      scrollTrigger: {
        trigger: "#projects",
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "top center",
        end: 'center-=200 center',
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
  gsap.to("#L4", {
    ease: "easeInOut",
    x:0,
    opacity:1,
    scrollTrigger: {
      trigger: "#personal",
      markers:true,
      preventOverlaps: true,
      fastScrollEnd: true,
      start: "top center",
      end: 'center center',
      scrub: true
    }
  });
}, []);
useEffect(() => {
  gsap.to("#R4", {
    ease: "easeInOut",
    x:0,
    opacity:1,
    scrollTrigger: {
      trigger: "#personal",
      preventOverlaps: true,
      fastScrollEnd: true,
      start: "top center",
      end: 'center center',
      scrub: true
    }
  });
}, []);
  

  return (<>
    <div className="pageContainer">
      {/* <Sidebar  id="side-bar"/> */}
         <HeroSection />
         
         <div id="projects">
          <div id="L1" style={{'transform':`translateX(${innerWidth}px)`}}>
            <ProjectsLBComponent/>
            </div>
            <div id="R1" style={{'transform':`translateX(${-innerWidth}px)`}}>
            <ProjectsRComponent/>
            </div>
         </div>
         <div id="skills">
          <div id="L2">
              <SkillsLBComponent/>
            </div>
            <div id="R2">
              <SkillsRComponent/>
            </div>
         </div>
         <div id="education">
         <EducationComponent/>
         </div>
         <div id="personal">
          <div id="L4" style={{'transform':`translateX(${innerWidth}px)`}}>
            <PersonalLBComponent/>
            </div>
            <div id="R4" style={{'transform':`translateX(${-innerWidth}px)`}}>
            <PersonalRComponent/>
            </div>
         </div>
         <div id="contacts">
         <Contact/>
         </div>
         
         
    </div>
  </>
  );
}

export default App;
