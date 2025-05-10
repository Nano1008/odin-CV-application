import { useState } from "react";

function Profile({ editMode }) {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(event) {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <section>
      <h2>Profile</h2>
      {editMode ? (
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={info.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={info.email}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            value={info.phone}
          />
        </form>
      ) : (
        <>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
        </>
      )}
    </section>
  );
}

export default Profile;
