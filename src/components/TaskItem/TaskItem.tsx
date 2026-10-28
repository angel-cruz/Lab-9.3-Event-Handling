
import type {
  TaskItemProps,
  TaskStatus,
} from '../../types';

// TaskItem displays information about a single task.
// It also allows users to update the task status or delete the task.
export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {

  // Render the task information and action buttons.
  return (
    <article className="task-item">

      {/* Task Information Section */}
      <div className="task-info">

        {/* Display the task title */}
        <h2>{task.title}</h2>

        {/* Display the task description */}
        <p>{task.description}</p>

        {/* Display task priority and due date */}
        <div className="task-details">

          {/* Apply a CSS class based on task priority */}
          <span className={`priority ${task.priority}`}>
            Priority: {task.priority}
          </span>

          {/* Display the task's due date */}
          <span className="due-date">
            Due: {task.dueDate}
          </span>

        </div>
      </div>


      {/* Task Actions Section */}
      <div className="task-actions">

        {/* Dropdown to update the task status */}
        <select
          aria-label={`Status for ${task.title}`}

          // Apply a CSS class based on the current status.
          className={`status-select ${task.status}`}

          // Display the task's current status.
          value={task.status}

          // Notify the parent when the status changes.
          onChange={(event) =>
            onStatusChange(
              task.id,
              event.target.value as TaskStatus
            )
          }
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>


        {/* Button to delete the current task */}
        <button
          className="delete-button"

          // Send the task ID to the parent for deletion.
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>

      </div>

    </article>
  );
}
