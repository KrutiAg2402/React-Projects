export default function TaskCard({ task, onToggle }) {
  return (
    <div
      className={`task-card ${task.completed ? "completed" : ""}`}
      onClick={() => onToggle(task.id)}
    >
      <div>
        <strong>{task.title}</strong>
        <small>{task.category}</small>
      </div>
    </div>
  );
}
