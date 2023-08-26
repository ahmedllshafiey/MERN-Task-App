import { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext";

const TaskForm = () => {
  const {dispatch} = useTaskContext()
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // in this statment 'headers' must be 'headers' in 'header' withou's' also 'Content-Type':'application/json' without spaces
    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        details: details,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setDetails("");
      setError(null);
      console.log("task was added", json);
      dispatch({ type: "CREATE_TASK",  payload: json});
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>

      <label>Task Name</label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <label>Task Details</label>
      <input
        type="text"
        onChange={(e) => {
          setDetails(e.target.value);
        }}
        value={details}
      />

      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default TaskForm;