import { expandHandler } from './expandHandler';
import '../../styles/GeneralInfoForm.css';

export function GeneralInfoForm({ onChangeHandler, generalInfo }) {
  return (
    <div className="general-info-form-container">
      <button
        className="expand-form-btn"
        onClick={expandHandler}>
        General Info
      </button>
      <form className="general-info-form">
        <label>
          <span>Full Name: </span>
          <input
            name="fullName"
            type="text"
            value={generalInfo.fullName}
            onChange={(e) => onChangeHandler(e)}
          />
        </label>
        <label>
          <span>Designation: </span>
          <input
            name="designation"
            type="text"
            value={generalInfo.designation}
            onChange={(e) => onChangeHandler(e)}
          />
        </label>
        <label>
          <span>Address: </span>
          <input
            name="address"
            type="text"
            value={generalInfo.address}
            onChange={(e) => onChangeHandler(e)}
          />
        </label>
        <label>
          <span>Email: </span>
          <input
            name="email"
            type="email"
            value={generalInfo.email}
            onChange={(e) => onChangeHandler(e)}
          />
        </label>
        <label>
          <span>Phone: </span>
          <input
            name="phone"
            type="tel"
            value={generalInfo.phone}
            onChange={(e) => onChangeHandler(e)}
          />
        </label>
      </form>
    </div>
  );
}
