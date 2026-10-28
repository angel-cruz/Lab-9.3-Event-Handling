
import { useState } from 'react';

import type {
  TaskFilterProps,
  TaskStatus,
  TaskPriority,
} from '../../types';

// TaskFilter allows users to filter tasks by status and priority.
export default function TaskFilter({ onFilterChange }: TaskFilterProps) {

  // State to store the currently selected status filter.
  // An empty string means all statuses are selected.
  const [status, setStatus] = useState<TaskStatus | ''>('');

  // State to store the currently selected priority filter.
  // An empty string means all priorities are selected.
  const [priority, setPriority] = useState<TaskPriority | ''>('');


  // Handle changes to the status dropdown.
  const changeStatus = (value: string) => {

    // Convert the selected value to the correct TypeScript type.
    const nextStatus = value as TaskStatus | '';

    // Update the selected status in React state.
    setStatus(nextStatus);

    // Notify the parent component about the updated filters.
    // Keep the existing priority filter unchanged.
    onFilterChange({
      status: nextStatus || undefined,
      priority: priority || undefined,
    });
  };


  // Handle changes to the priority dropdown.
  const changePriority = (value: string) => {

    // Convert the selected value to the correct TypeScript type.
    const nextPriority = value as TaskPriority | '';

    // Update the selected priority in React state.
    setPriority(nextPriority);

    // Notify the parent component about the updated filters.
    // Keep the existing status filter unchanged.
    onFilterChange({
      status: status || undefined,
      priority: nextPriority || undefined,
    });
  };


  // Render the filter dropdown menus.
  return (
    <div className="task-filters">

      {/* Status Filter */}
      <div className="filter-group">

        <label htmlFor="status-filter">
          Status
        </label>

        <select
          id="status-filter"
          value={status}
          onChange={(event) => changeStatus(event.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

      </div>


      {/* Priority Filter */}
      <div className="filter-group">

        <label htmlFor="priority-filter">
          Priority
        </label>

        <select
          id="priority-filter"
          value={priority}
          onChange={(event) => changePriority(event.target.value)}
        >
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

      </div>

    </div>
  );
}
