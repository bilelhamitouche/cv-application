import '../../styles/ExperienceForm.css';
import { useState } from 'react';

export function ExperienceForm({
  onChangeHandler,
  onDeleteHandler,
  onAddHandler,
  experienceInfo,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpened, setOpened] = useState(null);
  const [isAddNewExpanded, setIsAddNewExpanded] = useState(false);
  const [tmpData, setTmpData] = useState({
    company: '',
    location: '',
    startYear: '',
    endYear: '',
    designation: '',
  });
  return (
    <div className="experience-form-container">
      <button
        className="btn expand-form-btn"
        onClick={() => setIsExpanded(!isExpanded)}>
        Experience
      </button>
      {isExpanded ? (
        <ul className="experience-list">
          {experienceInfo.map((experience) => (
            <li
              className="experience"
              key={experience.id}
              onClick={() => setOpened(experience.id)}>
              {isOpened === experience.id ? (
                <form>
                  <label>
                    <span>Company: </span>
                    <input
                      name="company"
                      id={experience.id}
                      type="text"
                      value={experience.company}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </label>
                  <label>
                    <span>Location: </span>
                    <input
                      name="location"
                      id={experience.id}
                      type="text"
                      value={experience.location}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </label>
                  <label>
                    <span>Start Year: </span>
                    <input
                      name="startYear"
                      id={experience.id}
                      type="text"
                      value={experience.startYear}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </label>
                  <label>
                    <span>End Year: </span>
                    <input
                      name="endYear"
                      id={experience.id}
                      type="text"
                      value={experience.endYear}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </label>
                  <label>
                    <span>Designation: </span>
                    <input
                      name="designation"
                      id={experience.id}
                      type="text"
                      value={experience.designation}
                      onChange={(e) => onChangeHandler(e)}
                    />
                  </label>
                </form>
              ) : (
                <>
                  <span>{experience.company}</span>
                  <button
                    className="delete-btn"
                    onClick={() => onDeleteHandler(experience.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
          {isAddNewExpanded ? (
            <form
              className="add-experience-form"
              onSubmit={(e) => e.preventDefault()}>
              <label>
                <span>Company: </span>
                <input
                  name="company"
                  type="text"
                  value={tmpData.company}
                  onChange={(e) =>
                    setTmpData({
                      ...tmpData,
                      [e.target.name]: e.target.value,
                    })
                  }
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
                />
              </label>
              <label>
                <span>Start Year: </span>
                <input
                  name="startYear"
                  type="text"
                  value={tmpData.startYear}
                  onChange={(e) =>
                    setTmpData({
                      ...tmpData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                <span>End Year: </span>
                <input
                  name="endYear"
                  type="text"
                  value={tmpData.endYear}
                  onChange={(e) =>
                    setTmpData({
                      ...tmpData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                <span>Designation: </span>
                <input
                  name="designation"
                  type="text"
                  value={tmpData.designation}
                  onChange={(e) =>
                    setTmpData({
                      ...tmpData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </label>
              <div className="form-controls">
                <button
                  className="cancel-experience-btn"
                  onClick={() => setIsAddNewExpanded(false)}>
                  Cancel
                </button>
                <button
                  className="save-experience-btn"
                  onClick={(e) => {
                    onAddHandler(e, tmpData);
                    setIsAddNewExpanded(false);
                    setTmpData({
                      company: '',
                      location: '',
                      startYear: '',
                      endYear: '',
                      designation: '',
                    });
                  }}>
                  Save
                </button>
              </div>
            </form>
          ) : (
            <button
              className="add-experience-btn"
              onClick={() => setIsAddNewExpanded(true)}>
              Add Experience
            </button>
          )}
        </ul>
      ) : null}
    </div>
  );
}
