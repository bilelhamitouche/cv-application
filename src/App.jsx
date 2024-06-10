import { initialGeneralInfo } from './data/data';
import { GeneralInfoForm } from './components/form/GeneralInfoForm';
import './App.css';
import { useState } from 'react';
import { GeneralInfoPreview } from './components/preview/GeneralInfoPreview';

function App() {
  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo);

  function handleGeneralInfoChange(e) {
    setGeneralInfo({
      ...generalInfo,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="App">
      <div className="cv-form">
        <GeneralInfoForm
          onChangeHandler={handleGeneralInfoChange}
          generalInfo={generalInfo}
        />
      </div>
      <div className="cv-preview">
        <GeneralInfoPreview generalInfo={generalInfo} />
      </div>
    </div>
  );
}

export default App;
