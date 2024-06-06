import '../../styles/ExperienceForm.css';

export function ExperienceForm({ clickHandler }) {
  return (
    <div className="experience-form-container">
      <button
        className="experience-form-toggler"
        onClick={(e) => clickHandler(e)}>
        Experience
      </button>
      <ul className="experience-form-list">
        <form>
          <label htmlFor="">
            <span>Company: </span>
            <input
              name=""
              type="text"
              value=""
            />
          </label>
          <label htmlFor="">
            <span>Position: </span>
            <input
              name=""
              type="text"
              value=""
            />
          </label>
          <label htmlFor="">
            <span>Location: </span>
            <input
              name=""
              type="text"
              value=""
            />
          </label>
          <label htmlFor="">
            <span>Profile: </span>
            <textarea
              name=""
              type="text"
              value=""
            />
          </label>
        </form>
      </ul>
    </div>
  );
}
