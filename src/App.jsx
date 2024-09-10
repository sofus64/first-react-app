import { useState } from "react";
import TodoItem from "./TodoItem";

export default function App() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
	const [newTaskId, setNewTaskId] = useState(0);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, {id: newTaskId, text: newTask, completed: false}]);
      setNewTask("");
      setNewTaskId(newTaskId + 1);
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const changeStatus = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? {...task, completed: !task.completed} : task)));
  }

	return (
		<>
			<h1>Todo List</h1>
			<div>
				<input type="text" placeholder="enter task.." value={newTask} onChange={(event) => setNewTask(event.target.value)}/>
        <button onClick={addTask}>Add Task</button>
			</div>
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} deleteTask={deleteTask} changeStatus={changeStatus}/>
        ))}
      </ul>
		</>
	);
}