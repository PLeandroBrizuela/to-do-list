import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasklist/taskSlice";

export default function TasksCompleted({ setModalTasksSaves }) {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="w-screen h-screen fixed flex justify-center items-center top-0 left-0">
      <div className="absolute bg-slate-300 w-3/4 h-4/5 text-black text-center">
        <div className="fixed">
          <button
            onClick={() => setModalTasksSaves(false)}
            className="text-3xl font-extrabold ml-2"
          >
            X
          </button>
        </div>
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          Tareas completadas
        </h2>
        <div className="mx-12 border-2 flex flex-wrap max-md:m-1">
          <table cellSpacing="10px" className="w-full h-full">
            <thead>
              <tr>
                <th className="underline-offset-4 underline w-1/12">Nº</th>
                <th className="underline-offset-4 underline w-1/4">Tarea</th>
                <th className="underline-offset-4 underline w-1/2">
                  Descripcion
                </th>
                <th className="underline-offset-4 underline w-1/6">
                  Eliminar tarea
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((value) => {
                if (value.archivated) {
                  return (
                    <tr key={value.id}>
                      <td>{value.id + 1}</td>
                      <td>{value.task}</td>
                      <td>{value.description}</td>
                      <td>
                        <button
                          onClick={() => dispatch(deleteTask(value.id))}
                          className="bg-red-600 rounded p-1 my-1 text-white hover:bg-red-700 duration-300"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
