// Define a type for a Task
type Task = {
  id: number;
  title: string;
  completed: boolean;
};

// Initialize an array of tasks
let tasks: Task[] = [];

// Function to add a task
function addTask(title: string): void {
  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  console.log(`✅ Task "${title}" added!`);
}

// Function to list all tasks
function listTasks(): void {
  console.log('\n📋 Task List:');
  tasks.forEach(task => {
    console.log(
      `- [${task.completed ? '✔' : ' '}] ${task.title} (ID: ${task.id})`
    );
  });
}

// Function to mark a task as completed
function completeTask(id: number): void {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = true;
    console.log(`🎉 Task "${task.title}" marked as completed!`);
  } else {
    console.log(`❌ Task with ID ${id} not found.`);
  }
}

// Function to delete a task
function deleteTask(id: number): void {
  tasks = tasks.filter(t => t.id !== id);
  console.log(`🗑️ Task with ID ${id} deleted.`);
}

// ------------------------------
// Example usage:
addTask('Learn TypeScript arrays');
addTask('Build a task manager');
listTasks();

// completeTask(tasks[0].id);
// listTasks();

// deleteTask(tasks[1].id);
// listTasks();
