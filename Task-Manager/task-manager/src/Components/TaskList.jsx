import TaskCard from "./TaskCard";
export default function TaskList({ tasks, onToggle }) {
  if (tasks.length === 0) {
    return <div className="empty">No tasks here yet ✨</div>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
}
