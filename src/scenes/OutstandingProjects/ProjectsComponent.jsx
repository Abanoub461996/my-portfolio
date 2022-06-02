
// components
import ProjectCard from "./ProjectCard/ProjectCard";
function ProjectsComponent() {

  return (<>
  <section class="projects">
      <div class="section_outer">
        <div class="projects_top-tags">
          <p class="tags">&lt;section&gt;</p>
        </div>
        <div class="projects_inner">
          <h2 class="projects-title section-title">
            <p class="tags">&lt;h2&gt;</p>
            OUTSTANDING PROJECTS
            <p class="tags">&lt;/h2&gt;</p>
          </h2>
            <p class="tags">&lt;div&gt;</p>
          <div class="projects_content">
              <ProjectCard />
          </div>
            <p class="tags">&lt;/div&gt;</p>
        </div>
        <div class="projects_bottom-tags">
          <p class="tags">&lt;/section&gt;</p>
        </div>
      </div>
    </section>
  </>);
}

export default ProjectsComponent;