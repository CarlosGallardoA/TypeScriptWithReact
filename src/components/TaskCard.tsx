import React from "react";
import { Task } from "../interfaces/Task";
interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}
function TaskCard({ task, deleteTask }: Props) {
  return (
    <div
      key={task.id}
      className="card card-body bg-secondary rounded-0 text-dark"
    >
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button
        className="btn btn-danger"
        onClick={() => task.id && deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
