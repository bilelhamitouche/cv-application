import '../../styles/EducationPreview.css';

export function EducationPreview() {
  return (
    <section className="education-preview">
      <h2>Education</h2>
      <ul className="education-list">
        <div>
          <span className="date"></span>
          <span className="location"></span>
          <span className="study"></span>
          <span className="school"></span>
        </div>
        <div>
          <span className="date"></span>
          <span className="location"></span>
          <span className="study"></span>
          <span className="school"></span>
        </div>
        <div>
          <span className="date"></span>
          <span className="location"></span>
          <span className="study"></span>
          <span className="school"></span>
        </div>
      </ul>
    </section>
  );
}
