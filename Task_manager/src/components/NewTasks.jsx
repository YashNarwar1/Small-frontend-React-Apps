import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [addTask, setAddTask] = useState("");
  function handleAddTask(event) {
    setAddTask(event.target.value);
  }
  function handleClick() {
    if (addTask.trim() === "") {
      return;
    }

    onAdd(addTask);
    setAddTask("");
  }

  return (
    <div className="flex flex-center gap-4">
      <input
        type="text"
        value={addTask}
        onChange={handleAddTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
}
