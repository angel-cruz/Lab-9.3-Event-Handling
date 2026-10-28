import { useState } from 'react';
import type { TaskFilterProps, TaskStatus, TaskPriority } from '../../types';
export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
 const [status, setStatus] = useState<TaskStatus | ''>('');
 const [priority, setPriority] = useState<TaskPriority | ''>('');
 const changeStatus = (value: string) => { const next = value as TaskStatus | ''; setStatus(next); onFilterChange({status: next || undefined, priority: priority || undefined}); };
 const changePriority = (value: string) => { const next = value as TaskPriority | ''; setPriority(next); onFilterChange({status: status || undefined, priority: next || undefined}); };
 return <div className="task-filters"><div className="filter-group"><label htmlFor="status-filter">Status</label><select id="status-filter" value={status} onChange={e => changeStatus(e.target.value)}><option value="">All Statuses</option><option value="pending">Pending</option><option value="in-progress">In Progress</option><option value="completed">Completed</option></select></div><div className="filter-group"><label htmlFor="priority-filter">Priority</label><select id="priority-filter" value={priority} onChange={e => changePriority(e.target.value)}><option value="">All Priorities</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select></div></div>;
}
