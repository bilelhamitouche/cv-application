import '../../styles/GeneralInfoForm.css';

export function GeneralInfoForm({ clickHandler }) {
  return (
    <div className="general-form-container">
      <button
        className="general-form-toggle"
        onClick={(e) => clickHandler(e)}>
        General Info
      </button>
      <form className="general-info-form">
        <label htmlFor="fullName">
          <span>Full Name: </span>
          <input
            name="fullName"
            type="text"
            value=""
            placeholder="Enter full name"
            id="fullName"
          />
        </label>
        <label htmlFor="designation">
          <span>Designation: </span>
          <input
            name="designation"
            type="text"
            value=""
            placeholder="Enter designation"
            id="designation"
          />
        </label>
        <label htmlFor="address">
          <span>Address: </span>
          <input
            name="address"
            type="text"
            value=""
            placeholder="Enter address"
            id="address"
          />
        </label>
        <label htmlFor="email">
          <span>Email: </span>
          <input
            name="email"
            type="email"
            value=""
            placeholder="Enter email"
            id="email"
          />
        </label>
        <label htmlFor="phone">
          <span>Phone: </span>
          <input
            name="phone"
            type="tel"
            value=""
            placeholder="Enter phone number"
            id="phone"
          />
        </label>
      </form>
    </div>
  );
}
