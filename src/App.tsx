
import { useState } from 'react';

// Import reusable components.
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';

// Import TypeScript types for type safety.
import type {
  Task,
  TaskStatus,
  TaskFilters,
} from './types';

// Import application styling.
import './App.css';


// Initial task data displayed when the application starts.
// Each task follows the Task interface defined in types/index.ts.
const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    status: 'pending',
    priority: 'low',
    dueDate: '12/31/2023',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    status: 'completed',
    priority: 'medium',
    dueDate: '1/1/2024',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description 3',
    status: 'in-progress',
    priority: 'high',
    dueDate: '1/2/2024',
  },
];


// App is the main parent component.
// It manages tasks, filters, and passes data to child components.
export default function App() {

  // STATE MANAGEMENT

  // Store the list of tasks in React state.
  // Initially, tasks contains the three sample tasks above.
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Store the currently selected filters.
  // An empty object means no filters are applied.
  const [filters, setFilters] = useState<TaskFilters>({});


  // UPDATE TASK STATUS

  // This function updates the status of a specific task.
  // It receives the task ID and the newly selected status.
  const handleStatusChange = (
    taskId: string,
    newStatus: TaskStatus
  ) => {

    // Update the tasks array without modifying the original array.
    setTasks((previousTasks) =>

      // Loop through each task.
      previousTasks.map((task) =>

        // If the task ID matches, create an updated task object.
        task.id === taskId
          ? { ...task, status: newStatus }

          // Otherwise, return the task unchanged.
          : task
      )
    );
  };


  // DELETE TASK

  // This function removes a task using its unique ID.
  const handleDelete = (taskId: string) => {

    setTasks((previousTasks) =>

      // Keep every task except the one being deleted.
      previousTasks.filter((task) => task.id !== taskId)
    );
  };


  // FILTER AND SORT TASKS

  // Create a new array containing only tasks that match
  // the selected status and priority filters.
  const filteredTasks = tasks

    // Step 1: Filter tasks.
    .filter((task) => {

      // Check whether the task matches the selected status.
      // If no status is selected, all statuses are allowed.
      const matchesStatus =
        !filters.status || task.status === filters.status;

      // Check whether the task matches the selected priority.
      // If no priority is selected, all priorities are allowed.
      const matchesPriority =
        !filters.priority || task.priority === filters.priority;

      // Include the task only if both conditions are true.
      return matchesStatus && matchesPriority;
    })

    // Step 2: Sort the filtered tasks by due date.
    // Tasks with earlier due dates appear first.
    .sort((a, b) => {

      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();

      return dateA - dateB;
    });


  // RENDER APPLICATION

  return (
    <main className="app-container">

      {/* Application heading */}
      <h1>Completed Example</h1>

      {/* TaskFilter allows users to select filtering options. */}
      {/* setFilters updates the filters state in App. */}
      <TaskFilter
        onFilterChange={setFilters}
      />

      {/* TaskList displays the filtered and sorted tasks. */}
      {/* Callback functions allow child components to update tasks. */}
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />

    </main>
  );
}
