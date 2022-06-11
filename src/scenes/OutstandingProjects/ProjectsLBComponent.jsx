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
          <h2 class="projects-title section-title">
            <p class="tags">&lt;h2&gt;</p>
            OUTSTANDING PROJECTS
            <p class="tags">&lt;/h2&gt;</p>
          </h2>
            <p class="tags" style={{marginLeft:-50}}>&lt;p&gt;</p>
            <p class="personal_content-details">
              I’m a Front-End Developer located in Alexandria. Over the past few years I have been 
              Interested in the entire frontend spectrum also Ihad a serious passion for UI 
              effects, animations and creating intuitive, dynamic user experiences.<br />
              My ITI diploma in Front-End web Development helped my gaining the sufficient knowledge 
              needed to apply my thoughts and skills on 
              ambitious projects.
            </p>
            <p class="tags" style={{marginLeft:-50}}>&lt;/p&gt;</p>
            {/* <p class="tags" style={{marginLeft:-50}}>
              &lt;div&gt;
            </p> */}
          </div>

        </div>
        <div class="skills_bottom-tags">
          {/* <p class="tags">&lt;/div&gt;</p> */}

          <p class="tags">&lt;/section&gt;</p>
        </div>
      </div>

  </>);
}

export default ProjectsLBComponent;