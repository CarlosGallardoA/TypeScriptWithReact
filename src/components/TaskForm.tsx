import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/Task";

interface Props {
  addTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}
const initialTask: Task = {
  title: "",
  description: "",
};

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function TaskForm({ addTask, deleteTask }: Props) {
  const [task, setTask] = useState(initialTask);
  const handleInputChange = (e: HandleInputChange) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task);
    setTask(initialTask);
  };
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          value={task.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Write a Description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
