import {
  initialExperienceInfo,
  initialGeneralInfo,
  initialEducationInfo,
} from './data/data';
import { GeneralInfoForm } from './components/form/GeneralInfoForm';
import './App.css';
import { useState } from 'react';
import { GeneralInfoPreview } from './components/preview/GeneralInfoPreview';
import { EducationForm } from './components/form/EducationForm';
import { EducationPreview } from './components/preview/EducationPreview';
import { v4 } from 'uuid';
import { ExperienceForm } from './components/form/ExperienceForm';
import { ExperiencePreview } from './components/preview/ExperiencePreview';

function App() {
  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [educationInfo, setEducationInfo] = useState(initialEducationInfo);
  const [experienceInfo, setExperienceInfo] = useState(initialExperienceInfo);

  function handleGeneralInfoChange(e) {
    setGeneralInfo({
      ...generalInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleEducationInfoChange(e) {
    const newEducationInfo = [...educationInfo];
    const index = newEducationInfo.findIndex(
      (item) => item.id === Number(e.target.id),
    );
    if (index !== -1) {
      const updatedObject = { ...newEducationInfo[index] };
      updatedObject[e.target.name] = e.target.value;
      newEducationInfo[index] = updatedObject;
      setEducationInfo(newEducationInfo);
    }
  }

  function handleEducationInfoDelete(id) {
    const newEducationInfo = educationInfo.filter((item) => item.id !== id);
    setEducationInfo(newEducationInfo);
  }
  function handleEducationInfoAdd(e, tmpData) {
    setEducationInfo([
      ...educationInfo,
      {
        ...tmpData,
        id: v4(),
      },
    ]);
  }

  function handleExperienceInfoChange(e) {
    const newExperienceInfo = [...experienceInfo];
    const index = newExperienceInfo.findIndex(
      (item) => item.id === Number(e.target.id),
    );
    if (index !== -1) {
      const updatedObject = { ...newExperienceInfo[index] };
      updatedObject[e.target.name] = e.target.value;
      newExperienceInfo[index] = updatedObject;
      setExperienceInfo(newExperienceInfo);
    }
  }

  function handleExperienceInfoDelete(id) {
    const newExperienceInfo = experienceInfo.filter((item) => item.id !== id);
    setExperienceInfo(newExperienceInfo);
  }
  function handleExperienceInfoAdd(e, tmpData) {
    setExperienceInfo([
      ...experienceInfo,
      {
        ...tmpData,
        id: v4(),
      },
    ]);
  }

  return (
    <div className="App">
      <div className="cv-form">
        <GeneralInfoForm
          onChangeHandler={handleGeneralInfoChange}
          generalInfo={generalInfo}
        />
        <EducationForm
          onDeleteHandler={handleEducationInfoDelete}
          onAddHandler={handleEducationInfoAdd}
          onChangeHandler={handleEducationInfoChange}
          educationInfo={educationInfo}
        />
        <ExperienceForm
          onDeleteHandler={handleExperienceInfoDelete}
          onAddHandler={handleExperienceInfoAdd}
          onChangeHandler={handleExperienceInfoChange}
          experienceInfo={experienceInfo}
        />
      </div>
      <div className="cv-preview">
        <GeneralInfoPreview generalInfo={generalInfo} />
        <EducationPreview educationInfo={educationInfo} />
        <ExperiencePreview experienceInfo={experienceInfo} />
      </div>
    </div>
  );
}

export default App;
