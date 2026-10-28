# Lab-9.3-Event-Handling
Task Management application that demonstrates dynamic list rendering, proper key usage, and conditional rendering.

# Reflection Questions

### 1. How did you ensure unique keys for your list items?

Used `key={task.id}` when rendering tasks with `.map()`. This helps React identify each task and update the list efficiently.

### 2. What considerations did you make when implementing the filtering functionality?

Used `.filter()` to filter tasks by status and priority. I also made sure users could select multiple filters or view all tasks.

### 3. How did you handle state updates for task status changes?

Used `useState` to manage tasks and `.map()` to update the status of a specific task without changing the original array.

### 4. What challenges did you face when implementing conditional rendering?

Displaying different styles based on task status and priority. I used conditional CSS classes and displayed a message when no tasks matched the filters.
