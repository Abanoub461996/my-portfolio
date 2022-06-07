import { useState } from "react";
import HobbyCard from "./HobbyCard/HobbyCard";
import "./PersonalRComponent.css";
// components

function PersonalRComponent() {
  const [cardTitles, setCardTitles] = useState(["FootBall","BasketBall", "Anime"]);


  return (<>
      <div class="section_outer">
        <div class="personal_top-tags">
          <p class="tags">&lt;section&gt;</p>
        </div>
        <div class="section_inner section-flex">
          
          <div class="hoppies_visual">
            
            <HobbyCard title={cardTitles[0]} src1={'football.jpg'} src2={'1.jpg'}/>
            <HobbyCard title={cardTitles[1]} src1={'bascket.jpg'} src2={'bascket2.jpg'}/>
            <HobbyCard title={cardTitles[2]} src1={'anime2.jpg'} src2={'1.jpg'}/>


          </div>

        </div>
        <div class="skills_bottom-tags">
          <p class="tags">&lt;/div&gt;</p>

          <p class="tags">&lt;/section&gt;</p>
        </div>
      </div>

  </>);
}

export default PersonalRComponent;