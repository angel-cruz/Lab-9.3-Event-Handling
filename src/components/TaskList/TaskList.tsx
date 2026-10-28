import type { TaskListProps } from '../../types';
import TaskItem from '../TaskItem/TaskItem';
export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  if (tasks.length === 0) return <p className="empty-message">No tasks found.</p>;
  return <div className="task-list">{tasks.map(task => <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} onDelete={onDelete} />)}</div>;
}
