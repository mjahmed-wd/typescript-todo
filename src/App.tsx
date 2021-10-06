import React, { ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";
import ToDoTask from "./ToDoTask";
import "tailwindcss/tailwind.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 8000,
  draggable: false,
  position: toast.POSITION.BOTTOM_RIGHT,
  //etc you get the idea
});

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
    toast.success("Task added successfully");
  };

  const removeTask = (taskName: string): void => {
    const filteredTask = todoList.filter(
      (todo, i) => todo.taskName !== taskName
    );
    setTodoList(filteredTask);
    setTask("");
    setDeadline(0);
    toast.success("Task deleted successfully");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-5">
        <div className="inputContainer">
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 uppercase font-bold text-lg text-grey-darkest"
              htmlFor="task"
            >
              Task
            </label>
            <input
              type="text"
              name="task"
              value={task}
              id=""
              className="border py-2 px-3 text-grey-darkest"
              placeholder="Task.."
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 uppercase font-bold text-lg text-grey-darkest"
              htmlFor="deadline"
            >
              Deadline
            </label>
            <input
              type="number"
              name="deadline"
              value={deadline}
              id=""
              className="border py-2 px-3 text-grey-darkest"
              placeholder="Deadline.."
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="block bg-green-400  hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <div className="todoList">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Task Name</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Deadline</th>
              <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {todoList.map((item, index) => (
              <ToDoTask task={item} key={index} bg={index%2?"bg-white":""} remover={removeTask} />
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default App;
