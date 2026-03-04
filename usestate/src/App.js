import { useState } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks,setTasks]=useState([]);


  const addTask=(task)=>{
    setTasks([...tasks,task]);
  }
  return (
    <div className="App">
            <h1>Task Manager App</h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
