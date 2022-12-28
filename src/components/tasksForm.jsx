import React, { useState, useEffect } from "react";
import { createTask, editTask } from "../features/tasklist/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const params = useParams();
  console.log(tasks);
  const [newTask, setNewTask] = useState({
    id: 0,
    task: "",
    description: "",
    completed: false,
    archivated: false,
  });
  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    params.id ? dispatch(editTask(newTask)) : dispatch(createTask(newTask));
    setNewTask("");
    navigate("/to-do-list");
  };

  useEffect(() => {
    params.id
      ? setNewTask(tasks.find((task) => task.id === parseInt(params.id)))
      : setNewTask({
          ...newTask,
          id: tasks.length,
        });
  }, []);

  return (
    <form
      action=""
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-y-4 text-black text-center"
    >
      {params.id ? (
        <h2 className="text-white text-2xl font-bold">Editar tarea</h2>
      ) : (
        <h2 className="text-white text-2xl font-bold">Crear nueva tarea</h2>
      )}
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        name="task"
        value={newTask.task}
        placeholder="Escribir tarea..."
        className="border-2"
      />
      <textarea
        onChange={(e) => handleChange(e)}
        name="description"
        value={newTask.description}
        cols="30"
        rows="10"
        placeholder="Descripcion de la tarea..."
        className="border-2"
      ></textarea>
      {params.id ? (
        <button
          onClick={() => handleClick()}
          className=" bg-sky-500 rounded p-2 hover:bg-sky-600 duration-300"
        >
          Editar
        </button>
      ) : (
        <button
          onClick={() => handleClick()}
          className=" text-black bg-sky-500 rounded p-2 hover:bg-sky-600 duration-300"
        >
          Crear
        </button>
      )}
    </form>
  );
}
