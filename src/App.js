import logo from './logo.svg';
import './App.css';
import Precentation from './components/Precentation';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import ToolsAndSkills from './components/ToolsAndSkills';
import Contact from './components/Contact';

function App() {
  return (
    <section>
      <Precentation />
      <AboutMe />
      <WorkExperience/>
      <ToolsAndSkills/>
      <Contact/>
    </section>
  );
}

export default App;
