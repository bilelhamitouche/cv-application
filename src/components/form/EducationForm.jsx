import '../../styles/EducationForm.css';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

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
    <div className="education-form-container flex flex-column gap-1">
      <button
        className="btn expand-form-btn box-shadow"
        onClick={() => setIsExpanded(!isExpanded)}>
        Education
      </button>
      {isExpanded ? (
        <ul className="education-list flex flex-column gap">
          {educationInfo.map((education) => (
            <li
              className="education flex gap-1 justify-between rounded box-shadow"
              key={education.id}
              onClick={() => setOpened(education.id)}>
              {isOpened === education.id ? (
                <form className="flex flex-column gap-1">
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
                    <FaTrash />
                  </button>
                </>
              )}
            </li>
          ))}
          {isAddNewExpanded ? (
            <form
              className="add-education-form flex flex-column gap-1 rounded p-2"
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
              <div className="form-controls flex justify-between gap-1">
                <button
                  className="cancel-education-btn cancel-btn rounded"
                  onClick={() => setIsAddNewExpanded(false)}>
                  Cancel
                </button>
                <button
                  className="save-education-btn save-btn rounded"
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
              className="add-education-btn p-1 box-shadow"
              onClick={() => setIsAddNewExpanded(true)}>
              Add Education
            </button>
          )}
        </ul>
      ) : null}
    </div>
  );
}
