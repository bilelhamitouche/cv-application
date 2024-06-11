import '../../styles/ExperienceForm.css';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

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
    <div className="experience-form-container flex flex-column gap-1">
      <button
        className="btn expand-form-btn box-shadow"
        onClick={() => setIsExpanded(!isExpanded)}>
        Experience
      </button>
      {isExpanded ? (
        <ul className="experience-list flex flex-column gap">
          {experienceInfo.map((experience) => (
            <li
              className="experience box-shadow flex justify-between gap-1 rounded"
              key={experience.id}
              onClick={() => setOpened(experience.id)}>
              {isOpened === experience.id ? (
                <form className="flex flex-column gap-1">
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
                    <FaTrash />
                  </button>
                </>
              )}
            </li>
          ))}
          {isAddNewExpanded ? (
            <form
              className="add-experience-form flex flex-column p-2 gap-1 rounded box-shadow"
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
              <div className="form-controls flex justify-between gap-1">
                <button
                  className="cancel-experience-btn cancel-btn rounded"
                  onClick={() => setIsAddNewExpanded(false)}>
                  Cancel
                </button>
                <button
                  className="save-experience-btn save-btn rounded"
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
              className="add-experience-btn box-shadow p-1"
              onClick={() => setIsAddNewExpanded(true)}>
              Add Experience
            </button>
          )}
        </ul>
      ) : null}
    </div>
  );
}
