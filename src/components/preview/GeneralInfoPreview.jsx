import '../../styles/GeneralInfoPreview.css';

export function GeneralInfoPreview({ generalInfo }) {
  return (
    <div className="general-info-preview">
      <span className="full-name">{generalInfo.fullName}</span>
      <span className="designation">{generalInfo.designation}</span>
      <address className="address">{generalInfo.address}</address>
      <span className="email">{generalInfo.email}</span>
      <span className="phone">{generalInfo.phone}</span>
    </div>
  );
}
