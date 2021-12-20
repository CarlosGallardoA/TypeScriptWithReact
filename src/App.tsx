import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Task } from "./interfaces/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React and its hooks",
      completed: false,
    },
  ]);
  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              style={{ width: "4rem", height: "4rem" }}
            />
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addTask={addTask} deleteTask={deleteTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
