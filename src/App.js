import './App.css';

// components
import HeroSection from './scenes/hero-section/HeroSection';
import ProjectsComponent
 from './scenes/OutstandingProjects/ProjectsComponent';
import SkillsComponent from './scenes/ProgramingSkills/SkillsComponent';
import PersonalComponent from './scenes/Personal/PersonalComponent';
import KnowledgeComponent from "./scenes/Experience-Knowledge/KnowledgeComponent";


function App() {

  return (<>
      <HeroSection />
      <ProjectsComponent />
      <SkillsComponent />
      <KnowledgeComponent />
      <PersonalComponent/>

  </>
  );
}

export default App;
