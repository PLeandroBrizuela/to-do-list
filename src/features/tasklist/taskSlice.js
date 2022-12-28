import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    task: "Primera tarea",
    description: "Primera tarea",
    completed: false,
    archivated: false,
  },
  {
    id: 1,
    task: "Segunda tarea",
    description: "Segunda tarea",
    completed: false,
    archivated: false,
  },
  {
    id: 2,
    task: "Tercera tarea",
    description: "Tercera tarea",
    completed: false,
    archivated: false,
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) state.splice(state.indexOf(task), 1);
      state.map((task, index) => {
        const taskEdit = task;
        return taskEdit.id = index;
      });
    },
    editTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) state.splice(state.indexOf(task), 1, action.payload);
    },
    checkOut: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      task.completed = !task.completed;
    },
    archivated: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      task.archivated = !task.archivated;
    },
  },
});

export const { createTask, deleteTask, editTask, checkOut, archivated } =
  taskSlice.actions;

export default taskSlice.reducer;
