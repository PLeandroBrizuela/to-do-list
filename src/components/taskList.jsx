import React, { useState } from "react";
import { Link } from "react-router-dom";
import TasksCompleted from "./savesTasks";
import TaskCard from "./taskCard";

export default function TaskList() {
  const [modalTasksSaves, setModalTasksSaves] = useState(false);

  return (
    <div className="flex flex-col gap-12 w-full h-full text-center p-8 flex-wrap justify-center">
      <div className="flex justify-around col-span-full mt-4">
        <Link
          to="/create-task"
          className="text-black bg-sky-500 rounded p-2 hover:bg-sky-600 duration-300"
        >
          Crear tarea
        </Link>
        <button
          onClick={() => setModalTasksSaves(!modalTasksSaves)}
          className="text-black bg-sky-500 rounded p-2 hover:bg-sky-600 duration-300"
        >
          Tareas completadas
        </button>
        {modalTasksSaves ? (
          <TasksCompleted setModalTasksSaves={setModalTasksSaves} />
        ) : null}
      </div>
      <div>
      <h2 className="row-span-2 col-span-3 text-3xl font-bold underline underline-offset-4">
        Listas de tareas
      </h2>
      </div>
      <div className="w-full gap-12 row-span-2 col-span-3 flex flex-wrap justify-center">
        <TaskCard />
      </div>
    </div>
  );
}
