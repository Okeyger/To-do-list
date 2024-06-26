import { useEffect } from "react";
import AddTaskBlock from "./components/AddTaskBlock";
import Task from "./components/Task";
import { useSelector } from "react-redux";
import { RootState } from "./context/store";

const App = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const tasksInProgres = tasks.filter((item) => !item.completed);
  const tasksCompleted = tasks.filter((item) => item.completed);

  useEffect(() => {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", "[]");
    }
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">To-do list</h1>
      <AddTaskBlock />
      <h4 className="tasks-mark">Tasks to do - {tasksInProgres.length}</h4>
      <ul className="tasks-list">
        {tasksInProgres.map((item) => (
          <Task {...item} key={item.id} />
        ))}
      </ul>
      <h4 className="tasks-mark">Done - {tasksCompleted.length}</h4>
      <ul className="tasks-list">
        {tasksCompleted.map((item) => (
          <Task {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
