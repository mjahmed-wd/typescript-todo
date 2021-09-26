import React from "react";
import { ITask } from "./Interfaces";

interface Props {
  task: ITask;
  remover(taskName: string): void;
}

const ToDoTask = ({ task, remover}: Props) => {
  return (
    <div>
      <h4>{task.taskName}</h4>
      <h4>{task.deadline}</h4>
      <button onClick={() => remover(task.taskName)}>Delete</button>
    </div>
  );
};

export default ToDoTask;
