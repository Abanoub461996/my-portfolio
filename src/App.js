import { useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// components
import HeroSection from './scenes/hero-section/HeroSection';
import PersonalRComponent from './scenes/Personal/PersonalRComponent';
import PersonalLBComponent from './scenes/Personal/PersonalLBComponent';
// Projects
import ProjectsRComponent from "./scenes/OutstandingProjects/ProjectsRComponent";
import ProjectsLBComponent from "./scenes/OutstandingProjects/ProjectsLBComponent";
// Styling Sheet
import './App.css';


function App() {
  gsap.registerPlugin(ScrollTrigger);

  
  useEffect(() => {
    gsap.to("#id", {
      display: "none",
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#id",
        preventOverlaps: true,
        fastScrollEnd: true,
        start: "center center",
        end: 'bottom center',
        scrub: true
      }
    });
  }, []);
  useEffect(() => {
    gsap.to("#otherId", {
      display: "block",
      opacity:1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#otherId",
        start: "center center",
        end: 'bottom center',
        preventOverlaps: true,
        fastScrollEnd: true,
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
        </div>
      </div>
      <div className="right-portion">
        <div id="id"  style={{display:'block'}}>
        <PersonalRComponent/>
        </div>
        <div id="otherId" style={{display:'none',opacity:0}}>
        <ProjectsRComponent/>
        </div>
      </div>
      
    </div>
    
      
    
  </>
  );
}

export default App;
