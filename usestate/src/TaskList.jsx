function TaskList({tasks}){
    return(
        <ul>
            {tasks.map((task,index)=>{
                return <li key={index}>{task}</li>
            })}
        </ul>


    );
}
export default TaskList;
