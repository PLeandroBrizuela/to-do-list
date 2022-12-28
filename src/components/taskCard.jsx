import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Check, CheckOut } from "./iconsSvg";
import { Link } from "react-router-dom";
import {
  deleteTask,
  archivated,
  checkOut as changeSvg,
} from "../features/tasklist/taskSlice";

export default function TaskCard() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const checkClick = (value) => dispatch(changeSvg(value));

  return (
    <>
      {tasks.length === 0 ? (
        <h2 className="text-3xl font-extrabold col-start-2">
          Aun no hay tareas...
        </h2>
      ) : (
        tasks.map((value,index) => {
          if (!value.archivated) {
            return (
              <div
                key={index}
                className="flex flex-col p-2 gap-y-4 border-2 rounded text-center bg-slate-800 shadow-2xl"
              >
                <div className="flex flex-col items-center justify-around">
                  {value.completed ? (
                    <div className="flex items-center mb-2">
                      <button
                        onClick={() => dispatch(archivated(value))}
                        className="text-black bg-sky-500 p-1 rounded hover:bg-sky-600 duration-300 mr-2"
                      >
                        Archivar tarea
                      </button>
                      <Check onClick={() => checkClick(value)} />
                    </div>
                  ) : (
                    <CheckOut
                      className="w-12 mb-2"
                      onClick={() => checkClick(value)}
                    />
                  )}
                  {value.completed ? (
                    <h2 className="bg-green-500 text-black p-1 cursor-default">
                      Tarea Terminada
                    </h2>
                  ) : (
                    <h2 className="bg-red-500 p-1 cursor-default">
                      Tarea sin terminar
                    </h2>
                  )}
                </div>
                <h2 className="text-2xl font-bold p-4">{value.task}</h2>
                <p>{value.description}</p>
                <div className="flex gap-4 justify-center mb-4">
                  <Link
                    to={`/edit-task/${value.id}`}
                    className=" text-black bg-sky-500 rounded p-2 hover:bg-sky-600 duration-300"
                  >
                    Editar tarea
                  </Link>
                  <button
                    onClick={() => dispatch(deleteTask(value.id))}
                    className=" text-black bg-sky-500 rounded p-2 hover:bg-sky-600 duration-300"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          }
        })
      )}
    </>
  );
}
