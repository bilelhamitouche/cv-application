import '../../styles/EducationForm.css';
import { useState } from 'react';

export function EducationForm({
  onChangeHandler,
  onDeleteHandler,
  onAddHandler,
  educationInfo,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpened, setOpened] = useState(null);
  const [isAddNewExpanded, setIsAddNewExpanded] = useState(false);
  const [tmpData, setTmpData] = useState({
    school: '',
    location: '',
    startYear: '',
    endYear: '',
    degree: '',
  });
  return (
    <div className="education-form-container">
      <button
        className="btn expand-form-btn"
        onClick={() => setIsExpanded(!isExpanded)}>
        Education
      </button>
      {isExpanded ? (
        <ul className="education-list">
          {educationInfo.map((education) => (
            <li
              className="education"
              key={education.id}
              onClick={() => setOpened(education.id)}>
              {isOpened === education.id ? (
                <form>
                  <label>
                    <span>School: </span>
                    <input
                      name="school"
                      id={education.id}
                      type="text"
                      value={education.school}
                      onChange={(e) => onChangeHandler(e)}
                      required
                    />
                  </label>
                  <label>
                    <span>Location: </span>
                    <input
                      name="location"
                      id={education.id}
                      type="text"
                      value={education.location}
                      onChange={(e) => onChangeHandler(e)}
                      required
                    />
                  </label>
                  <label>
                    <span>Start Year: </span>
                    <input
                      name="startYear"
                      id={education.id}
                      type="text"
                      pattern="[0-9]{4}"
                      value={education.startYear}
                      onChange={(e) => onChangeHandler(e)}
                      required
                    />
                  </label>
                  <label>
                    <span>End Year: </span>
                    <input
                      name="endYear"
                      id={education.id}
                      type="text"
                      pattern="[0-9]{4}"
                      value={education.endYear}
                      onChange={(e) => onChangeHandler(e)}
                      required
                    />
                  </label>
                  <label>
                    <span>Degree: </span>
                    <input
                      name="degree"
                      id={education.id}
                      type="text"
                      value={education.degree}
                      onChange={(e) => onChangeHandler(e)}
                      required
                    />
                  </label>
                </form>
              ) : (
                <>
                  <span>{education.school}</span>
                  <button
                    className="delete-btn"
                    onClick={() => onDeleteHandler(education.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
          {isAddNewExpanded ? (
            <form
              className="add-education-form"
              onSubmit={(e) => e.preventDefault()}>
              <label>
                <span>School: </span>
                <input
                  name="school"
                  type="text"
                  value={tmpData.school}
                  onChange={(e) =>
                    setTmpData({
                      ...tmpData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
              </label>
              <label>
                <span>Location: </span>
                <input
                  name="location"
                  type="text"
                  value={tmpData.location}
                  onChange={(e) =>
                    setTmpData({
                      ...tmpData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
              </label>
              <label>
                <span>Start Year: </span>
                <input
                  name="startYear"
                  type="text"
                  pattern="[0-9]{4}"
                  value={tmpData.startYear}
                  onChange={(e) =>
                    setTmpData({
                      ...tmpData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
              </label>
              <label>
                <span>End Year: </span>
                <input
                  name="endYear"
                  type="text"
                  pattern="[0-9]{4}"
                  value={tmpData.endYear}
                  onChange={(e) =>
                    setTmpData({
                      ...tmpData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
              </label>
              <label>
                <span>Degree: </span>
                <input
                  name="degree"
                  type="text"
                  value={tmpData.degree}
                  onChange={(e) =>
                    setTmpData({
                      ...tmpData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
              </label>
              <div className="form-controls">
                <button
                  className="cancel-education-btn"
                  onClick={() => setIsAddNewExpanded(false)}>
                  Cancel
                </button>
                <button
                  className="save-education-btn"
                  onClick={(e) => {
                    onAddHandler(e, tmpData);
                    setIsAddNewExpanded(false);
                    setTmpData({
                      school: '',
                      location: '',
                      startYear: '',
                      endYear: '',
                      degree: '',
                    });
                  }}>
                  Save
                </button>
              </div>
            </form>
          ) : (
            <button
              className="add-education-btn"
              onClick={() => setIsAddNewExpanded(true)}>
              Add Education
            </button>
          )}
        </ul>
      ) : null}
    </div>
  );
}
