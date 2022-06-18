import { useRef, useEffect, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// components
import HeroSection from './scenes/hero-section/HeroSection';
import PersonalRComponent from './scenes/Personal/PersonalRComponent';
import PersonalLBComponent from './scenes/Personal/PersonalLBComponent';
// Projects
import ProjectsRComponent from "./scenes/OutstandingProjects/ProjectsRComponent";
import ProjectsLBComponent from "./scenes/OutstandingProjects/ProjectsLBComponent";
// SKILLS
import SkillsLBComponent from "./scenes/ProgramingSkills/SkillsLBComponent";
import SkillsRComponent from "./scenes/ProgramingSkills/SkillsRComponent";

// Styling Sheet
import './App.css';


function App() {
  const [innerScroll, setInnerScroll]=useState(false)
  gsap.registerPlugin(ScrollTrigger);

  
  useEffect(() => {
    gsap.to("#R1", {
      display: "none",
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#LB1",
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "top center",
        end: 'bottom-=200 center',
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to("#R2", {
      display: "block",
      opacity:1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#LB2",
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "top-=200 center",
        end: 'bottom center',
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to("#R2", {
      display: "none",
      opacity:0,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#LB3",
        markers:true,
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "top top",
        end: 'center top',
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to("#R3", {
      display: "block",
      opacity:1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#LB3",
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "bottom center",
        scrub: true
      }
    });
  }, []);

  
  useEffect(() => {
    gsap.to("#LB1", {
      display: "none",
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#LB1",
        
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "top center",
        end: 'bottom-=200 center',
        scrub: true
      }
    });
  }, []);

  useEffect(() => {
    gsap.to("#LB2", {
      display: "block",
      opacity:1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#LB2",
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "top-=200 center",
        end: 'bottom center',
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to("#LB2", {
      display: "none",
      opacity:0,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#LB3",
        markers:true,
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "top top",
        end: 'center top',
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to("#LB3", {
      display: "block",
      opacity:1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#LB3",
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "top-=200 center",
        end: 'bottom center',
        scrub: true
      }
    });
  }, []);
  useEffect(()=>{
    document.getElementById('overall-body').style.height="100%!important"
  },[innerScroll])
  console.log(innerScroll)
  

  return (<>
    <div className="pageContainer">
      <div className="left-portion">
        <div className="left-top">
         <HeroSection />

        </div>
        <div className="left-bottom">
          <div id="LB1"  style={{display:'block'}}>
          <PersonalLBComponent/>
          </div>
          <div id="LB2" style={{display:'none',opacity:0}}>
          <ProjectsLBComponent/>
          </div>
          <div id="LB3" style={{display:'none',opacity:0}}>
          <SkillsLBComponent/>
          </div> 
        </div>
      </div>
      <div className="right-portion">
        <div id="R1"  style={{display:'block'}}>
        <PersonalRComponent/>
        </div>
        <div id="R2" style={{display:'none',opacity:0}}>
        <ProjectsRComponent/>
        </div>
        <div id="R3" style={{display:'none',opacity:0}}>
        <SkillsRComponent/>
        </div>
      </div>
      
    </div>
    
      
    
  </>
  );
}

export default App;
