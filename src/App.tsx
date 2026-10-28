import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import type { Task, TaskStatus, TaskFilters } from './types';
import './App.css';
const initialTasks: Task[] = [
 { id: '1', title: 'Task 1', description: 'Description 1', status: 'pending', priority: 'low', dueDate: '12/31/2023' },
 { id: '2', title: 'Task 2', description: 'Description 2', status: 'completed', priority: 'medium', dueDate: '1/1/2024' },
 { id: '3', title: 'Task 3', description: 'Description 3', status: 'in-progress', priority: 'high', dueDate: '1/2/2024' },
];
export default function App() {
 const [tasks, setTasks] = useState<Task[]>(initialTasks);
 const [filters, setFilters] = useState<TaskFilters>({});
 const handleStatusChange = (taskId: string, newStatus: TaskStatus) => setTasks(previous => previous.map(task => task.id === taskId ? {...task, status: newStatus} : task));
 const handleDelete = (taskId: string) => setTasks(previous => previous.filter(task => task.id !== taskId));
 const filteredTasks = tasks.filter(task => (!filters.status || task.status === filters.status) && (!filters.priority || task.priority === filters.priority)).sort((a,b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
 return <main className="app-container"><h1>Completed Example</h1><TaskFilter onFilterChange={setFilters} /><TaskList tasks={filteredTasks} onStatusChange={handleStatusChange} onDelete={handleDelete} /></main>;
}
