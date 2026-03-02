import { useState } from "react";

function Taskform(addtask){
    const [task,setTask] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(task.trim()==="") return;
        addtask(task)
        setTask("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="ENter Task" value={task} onChange={(e) => setTask(e.currentTarget.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default Taskform