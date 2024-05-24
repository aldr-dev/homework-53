import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/Task/Task';
import {useState} from 'react';

interface Task {
  id: string;
  message: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', message: 'After a long journey, they arrived'},
    { id: '2', message: 'The cat lazily stretched its legs.'},
    { id: '3', message: 'In the quiet night, stars twinkled.'}
  ]);

  const addTask = (message: string) => {
    const newTask: Task = { id: (Math.random().toString()), message };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <h1>ToDo List</h1>
      <AddTaskForm onSubmit={addTask}/>
      <div>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={deleteTask}/>
        ))}
      </div>
    </>
  );
};


export default App;