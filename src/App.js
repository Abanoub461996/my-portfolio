import { useRef, useEffect} from "react";
import { TweenMax } from "gsap";
// components
import HeroSection from './scenes/hero-section/HeroSection';
import PersonalRComponent from './scenes/Personal/PersonalRComponent';
import PersonalLBComponent from './scenes/Personal/PersonalLBComponent';
// Projects
import ProjectsRComponent from "./scenes/OutstandingProjects/ProjectsRComponent";
import ProjectsLBComponent from "./scenes/OutstandingProjects/ProjectsLBComponent";
// Styling Sheet
import './App.css';
import { TimelineLite } from "gsap/gsap-core";
import { Power3 } from "gsap/src";


function App() {
  let app =useRef(null);
  let rightPortion = useRef(null)
  
  let tl= new TimelineLite()

  useEffect(()=>{
    TweenMax.to(app, 0,{css:{visibility:'visible'}})
    tl.from(rightPortion, 1.2,{y:1280, ease: Power3.easeOut})

  })
  

  return (<>
    <div className="pageContainer" ref={el=>app =el}>
      <div className="left-portion">
        <div className="left-top">
         <HeroSection />

        </div>
        <div className="left-bottom">
          <PersonalLBComponent/>
          {/* <ProjectsLBComponent/> */}

        </div>

      </div>
      <div className="right-portion" ref={el=> rightPortion =el}>
        <PersonalRComponent/>
        {/* <ProjectsRComponent/> */}

      </div>
      
    </div>
      
    
  </>
  );
}

export default App;
