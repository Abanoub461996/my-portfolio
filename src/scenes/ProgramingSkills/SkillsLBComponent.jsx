import "./SkillsComponent.css"
// components

function SkillsLBComponent() {

  return (
  <section className="skills">
     <div className="section_outer">
        <div className="skills_top-tags">
          <p className="tags">&lt;section&gt;</p>
        </div>
        <div className="section_inner section-flex">
          <div className="Skills_content">
            <h2 className="Skills_content-title">
                <p className="tags" style={{marginLeft:-50}}>&lt;h2&gt;</p>
                PROGRAMMING SKILLS
                <p className="tags">&lt;/h2&gt;</p>
            </h2>
            <p className="tags" style={{marginLeft:-50}}>&lt;p&gt;</p>
            <p className="Skills_content-details">
              If you like football, BasketBall and Japaniese Anime. Then let's drink a coffee and have a talk.
            </p>
            <p className="tags" style={{marginLeft:-50}}>&lt;/p&gt;</p>
            
          </div>

        </div>
        <div className="skills_bottom-tags">
          <p className="tags">&lt;/div&gt;</p>

          <p className="tags">&lt;/section&gt;</p>
        </div>
      </div>
  </section>
  );
}

export default SkillsLBComponent;