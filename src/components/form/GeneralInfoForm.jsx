import '../../styles/GeneralInfoForm.css';
import { useState } from 'react';

export function GeneralInfoForm({ onChangeHandler, generalInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="general-info-form-container flex flex-column gap-1">
      <button
        className="btn expand-form-btn"
        onClick={() => setIsExpanded(!isExpanded)}>
        General Info
      </button>
      {isExpanded ? (
        <form className="general-info-form form flex flex-column p-2 gap-1 rounded">
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
      ) : null}
    </div>
  );
}
