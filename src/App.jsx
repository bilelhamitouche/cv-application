import './App.css';
import { GeneralInfoForm } from './components/form/GeneralInfoForm';
import { EducationForm } from './components/form/EducationForm';
import { SkillsForm } from './components/form/SkillsForm';
import { ExperienceForm } from './components/form/ExperienceForm';
import { GeneralInfoPreview } from './components/preview/GeneralInfoPreview';
import { EducationPreview } from './components/preview/EducationPreview';

function App() {
  function togglerFunction(e) {
    e.target.parentNode.childNodes[1].classList.toggle('visible');
  }

  return (
    <div className="App">
      <div className="cv-form">
        <GeneralInfoForm clickHandler={togglerFunction} />
        <ul className="education-list">
          <EducationForm clickHandler={togglerFunction} />
          <EducationForm clickHandler={togglerFunction} />
          <EducationForm clickHandler={togglerFunction} />
        </ul>
        <ul className="experience-list">
          <ExperienceForm clickHandler={togglerFunction} />
          <ExperienceForm clickHandler={togglerFunction} />
          <ExperienceForm clickHandler={togglerFunction} />
        </ul>
        <SkillsForm clickHandler={togglerFunction} />
      </div>
      <div className="cv-preview">
        <GeneralInfoPreview />
        <EducationPreview />
      </div>
    </div>
  );
}

export default App;
