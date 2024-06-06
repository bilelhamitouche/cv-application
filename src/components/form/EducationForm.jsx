import '../../styles/EducationForm.css';

export function EducationForm({ clickHandler }) {
  return (
    <div className="education-form-container">
      <button
        className="education-form-toggle"
        onClick={(e) => clickHandler(e)}>
        Education
      </button>
      <form className="education-form">
        <label for="">
          <span>School: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
        <label for="">
          <span>Study: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
        <label for="">
          <span>Location: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
        <label for="">
          <span>Start Date: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
        <label for="">
          <span>End Date: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
      </form>
    </div>
  );
}
