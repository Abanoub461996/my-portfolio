import {Typewriter} from 'react-simple-typewriter';
// components
import HeroSection from './scenes/hero-section/HeroSection';
import ProjectsComponent from './scenes/OutstandingProjects/ProjectsComponent';
import SkillsComponent from './scenes/ProgramingSkills/SkillsComponent';
import PersonalComponent from './scenes/Personal/PersonalComponent';
import KnowledgeComponent from "./scenes/Experience-Knowledge/KnowledgeComponent";

import Trial from './scenes/Trial/Trial';
import './App.css';

function App() {

  return (<>
      <HeroSection />
      <ProjectsComponent />
      <SkillsComponent />
      {/* <Trial /> */}
      <KnowledgeComponent />
      <PersonalComponent/>
    
  </>
  );
}

export default App;
