import { useState } from "react";
// components

function ProjectsLBComponent() {
  const [cardTitles, setCardTitles] = useState(["FootBall","BasketBall", "Anime"]);


  return (<>
      <div class="section_outer">
        <div class="personal_top-tags">
          <p class="tags">&lt;section&gt;</p>
        </div>
        <div class="section_inner section-flex">
          <div class="personal_content">
            <h2 class="personal_content-title">
                <p class="tags" style={{marginLeft:-50}}>&lt;h2&gt;</p>
                AWAY FROM CODING
                <p class="tags">&lt;/h2&gt;</p>
            </h2>
            <p class="tags" style={{marginLeft:-50}}>&lt;p&gt;</p>
            <p class="personal_content-details">
              If you like football, BasketBall and Japaniese Anime. Then let's drink a coffee and have a talk.
            </p>
            <p class="tags" style={{marginLeft:-50}}>&lt;/p&gt;</p>
            <p class="tags" style={{marginLeft:-50}}>
              &lt;div class="personal_macAnimation"&gt;
            </p>
          </div>

        </div>
        <div class="skills_bottom-tags">
          <p class="tags">&lt;/div&gt;</p>

          <p class="tags">&lt;/section&gt;</p>
        </div>
      </div>

  </>);
}

export default ProjectsLBComponent;