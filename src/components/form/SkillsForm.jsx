import '../../styles/SkillsForm.css';

export function SkillsForm({ clickHandler }) {
  return (
    <div className="skills-form-container">
      <button
        className="skills-form-toggler"
        onClick={(e) => clickHandler(e)}>
        Skills
      </button>
      <form className="skills-form">
        <label>
          <span>Skill: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
        <label>
          <span>Skill: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
        <label>
          <span>Skill: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
        <label>
          <span>Skill: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
        <label>
          <span>Skill: </span>
          <input
            name=""
            type="text"
            value=""
          />
        </label>
        <label>
          <span>Skill: </span>
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
