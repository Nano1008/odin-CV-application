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
    <section>
      <h2>Practical Experience</h2>
      {editMode ? (
        <form>
          <input
            type="text"
            name="companyName"
            value={experience.companyName}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            type="text"
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
            type="date"
            name="dateFrom"
            value={experience.dateFrom}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateUntil"
            value={experience.dateUntil}
            onChange={handleChange}
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
    </section>
  );
}

export default Experience;
