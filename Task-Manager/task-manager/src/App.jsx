import {useState} from 'react';
import TaskList from './Components/TaskList';
import CategoryFilter from './Components/CategoryFilter';
import TaskFoam from './Components/TaskFoam';

 export default function App()
{
const [tasks,setTasks]= useState([]);
const [selectedcategory, setSelectedCategory] = useState("All");
const addTask = (task) =>
{
  setTasks([...tasks, task]);
};
const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
const filteredTasks = selectedcategory === "All" ? tasks : tasks.filter(task => task.category === selectedcategory);

return (
  <div className="app">
    <header className="header">
      <h1>Task Manager</h1>
      <p>Organize your tasks by category</p>
    </header>

    <TaskFoam onAddTask={addTask} />

    <CategoryFilter
      selected={selectedcategory}
      onChange={setSelectedCategory}
    />

    <TaskList tasks={filteredTasks} onToggle={toggleTask} />
  </div>
);

}