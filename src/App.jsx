import Profile from "./components/Profile";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [editMode, setEditMode] = useState(false);

  function handleEditClick() {
    setEditMode((prevMode) => !prevMode);
  }

  return (
    <div className="app-container">
      <h1>CV Builder</h1>
      <Profile editMode={editMode}/>
      <button onClick={handleEditClick}>{editMode ? "Submit CV" : "Edit CV"}</button>
    </div>
  )
}

export default App;
