import '../../styles/ExperiencePreview.css';
import { v4 } from 'uuid';

export function ExperiencePreview({ experienceInfo }) {
  return (
    <>
      <h2 className="section-header">Experience</h2>
      <ul className="experience-preview-list flex flex-column justify-center">
        {experienceInfo.map((experience) => (
          <li
            className="experience-preview flex"
            key={v4()}>
            <div className="flex flex-column">
              <span className="years">
                <span className="start-year">{experience.startYear} - </span>
                <span className="end-year">{experience.endYear}</span>
              </span>
              <span className="location">{experience.location}</span>
            </div>
            <div className="flex flex-column">
              <span className="designation">{experience.designation}</span>
              <span className="company">{experience.company}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
