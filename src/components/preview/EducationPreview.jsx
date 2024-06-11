import '../../styles/EducationPreview.css';
import { v4 } from 'uuid';

export function EducationPreview({ educationInfo }) {
  return (
    <>
      <h2 className="section-header">Education</h2>
      <ul className="education-preview-list flex flex-column justify-center">
        {educationInfo.map((education) => (
          <li
            className="education-preview flex"
            key={v4()}>
            <div className="flex flex-column">
              <span className="years">
                <span className="start-year">{education.startYear} - </span>
                <span className="end-year">{education.endYear}</span>
              </span>
              <span className="location">{education.location}</span>
            </div>
            <div className="flex flex-column">
              <span className="degree">{education.degree}</span>
              <span className="school">{education.school}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
