import { initialGeneralInfo } from './data/data';
import { initialEducationInfo } from './data/data';
import { GeneralInfoForm } from './components/form/GeneralInfoForm';
import './App.css';
import { useState } from 'react';
import { GeneralInfoPreview } from './components/preview/GeneralInfoPreview';
import { EducationForm } from './components/form/EducationForm';
import { EducationPreview } from './components/preview/EducationPreview';
import { v4 } from 'uuid';

function App() {
  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);
  const [educationInfo, setEducationInfo] = useState(initialEducationInfo);

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
      </div>
      <div className="cv-preview">
        <GeneralInfoPreview generalInfo={generalInfo} />
        <EducationPreview educationInfo={educationInfo} />
      </div>
    </div>
  );
}

export default App;
