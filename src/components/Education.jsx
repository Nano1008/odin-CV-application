import { useState } from "react";

function Education({ editMode }) {
  const [education, setEducation] = useState({
    school: "",
    major: "",
    date: "",
  });

  function handleChange(event) {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <section>
      <h2>Education</h2>
      {editMode ? (
        <form>
          <input
            type="text"
            name="school"
            value={education.school}
            onChange={handleChange}
            placeholder="School Name"
          />
          <input
            type="text"
            name="major"
            value={education.major}
            onChange={handleChange}
            placeholder="Major"
          />
          <input
            type="date"
            name="date"
            value={education.date}
            onChange={handleChange}
            placeholder="Date of Study"
          />
        </form>
      ) : (
        <>
          <p>School: {education.school}</p>
          <p>Title of Study: {education.major}</p>
          <p>Date: {education.date}</p>
        </>
      )}
    </section>
  );
}

export default Education;
