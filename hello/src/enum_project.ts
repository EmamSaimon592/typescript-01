enum TaskStatus {
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
}
type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};
const tasks: Task[] = [
  { id: 1, title: 'Learn TypeScript', status: TaskStatus.Pending },
  { id: 2, title: 'Write blog post', status: TaskStatus.InProgress },
  { id: 3, title: 'Upload project to GitHub', status: TaskStatus.Completed },
];

function getTasksByStatus(status: TaskStatus): Task[] {
  return tasks.filter(task => task.status === status);
}

console.log(' Completed Tasks:');
console.log(getTasksByStatus(TaskStatus.Completed));

console.log('\n In Progress Tasks:');
console.log(getTasksByStatus(TaskStatus.InProgress));

console.log('\n  Pending Tasks:');
console.log(getTasksByStatus(TaskStatus.Pending));



//output
/*
 Completed Tasks:
[ { id: 3, title: 'Upload project to GitHub', status: 'COMPLETED' } ]

 In Progress Tasks:
[ { id: 2, title: 'Write blog post', status: 'IN_PROGRESS' } ]

 Pending Tasks:
[ { id: 1, title: 'Learn TypeScript', status: 'PENDING' } ]

*/