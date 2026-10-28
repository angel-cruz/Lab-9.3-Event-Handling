
import type { TaskListProps } from '../../types';

import TaskItem from '../TaskItem/TaskItem';

// TaskList displays a collection of tasks.
// It receives tasks and callback functions from the parent component.
export default function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {

  // Conditional Rendering:
  // Check if the task list is empty.
  // If there are no tasks, display a message instead of the list.
  if (tasks.length === 0) {
    return (
      <p className="empty-message">
        No tasks found.
      </p>
    );
  }

  // List Rendering:
  // Loop through the tasks array using .map().
  // Create a TaskItem component for each task.
  return (
    <div className="task-list">

      {tasks.map((task) => (

        <TaskItem

          // Unique key helps React identify each task.
          key={task.id}

          // Pass the current task's information.
          task={task}

          // Pass the status update callback to TaskItem.
          onStatusChange={onStatusChange}

          // Pass the delete callback to TaskItem.
          onDelete={onDelete}

        />

      ))}

    </div>
  );
}
