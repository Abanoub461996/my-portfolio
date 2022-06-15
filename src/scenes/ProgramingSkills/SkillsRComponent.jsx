import { useEffect, useRef } from "react";
import drowing from "./drawing";
import "./SkillsComponent.css"
// components

function SkillsRComponent() {
    useEffect(()=>{
        const canvas = document.getElementById("canvas")
        const parent = document.getElementById("impo")
    
        drowing(canvas,parent);
    },[])
  return (
  <section className="skills">
     <div className="section_outer">
        <div className="skills_top-tags">
            <div className="skills_animation">

                <canvas id='canvas'></canvas>
                <span id='info'>Click and drag to draw!</span>
            </div>
        </div>
      </div>
  </section>
  );
}

export default SkillsRComponent;
