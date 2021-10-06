import React from "react";
import { ITask } from "./Interfaces";

interface Props {
  task: ITask;
  remover(taskName: string): void;
  bg: string;
}

const ToDoTask = ({ task, remover, bg }: Props) => {
  return (
    <tr className={`border border-grey-500 md:border-none block md:table-row ${bg}`}>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{task.taskName}</td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">{task.deadline}</td>
      <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
          onClick={() => remover(task.taskName)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ToDoTask;
