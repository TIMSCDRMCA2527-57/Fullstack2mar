
import { useState } from 'react';
import './App.css';
import Taskform from './Taskform';
import Tasklist from './Tasklist';

function App() {

  const [tasks,setTasks] = useState([])

  const addtask = (task) =>{
    setTasks([...tasks,task])
  }
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Taskform addtask = {addtask}/>
      <Tasklist task = {tasks}/>
    </div>
  );
}

export default App;
