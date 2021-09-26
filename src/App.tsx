import React, { ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";
import ToDoTask from "./ToDoTask";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(+event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const removeTask = (taskName:string): void => {
    const filteredTask = todoList.filter((todo,i) =>todo.taskName!==taskName)
    setTodoList(filteredTask);
    setTask("");
    setDeadline(0);
  };
  return (
    <div>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            id=""
            placeholder="Task.."
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            id=""
            placeholder="Deadline.."
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((item, index) => (
          <ToDoTask task={item} key={index} remover={removeTask}/>
        ))}
      </div>
    </div>
  );
};

export default App;
