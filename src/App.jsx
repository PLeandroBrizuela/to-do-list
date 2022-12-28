import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/taskList";
import TaskForm from "./components/tasksForm";
import TaskCard from "./components/taskCard";

export default function App() {
  return (
    <div className="flex justify-center text-cente text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/to-do-list" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
