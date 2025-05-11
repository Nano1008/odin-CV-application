import { useState } from "react";

function Experience({ editMode }) {
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  return (
    <div className="section">
      <h2>Practical Experience</h2>
      {editMode ? (
        <form>
          <input
            name="companyName"
            value={experience.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            name="positionTitle"
            value={experience.positionTitle}
            onChange={handleChange}
            placeholder="Position Title"
          />
          <textarea
            name="responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
          />
          <input
            name="dateFrom"
            value={experience.dateFrom}
            onChange={handleChange}
            type="date"
          />
          <input
            name="dateUntil"
            value={experience.dateUntil}
            onChange={handleChange}
            type="date"
          />
        </form>
      ) : (
        <div>
          <p>Company: {experience.companyName}</p>
          <p>Position: {experience.positionTitle}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>From: {experience.dateFrom}</p>
          <p>Until: {experience.dateUntil}</p>
        </div>
      )}
    </div>
  );
}

export default Experience;
