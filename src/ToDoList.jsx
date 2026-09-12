import React,{use, useState} from  'react';
function ToDoList(){
    const[tasks,setTask]=useState([]);
    const[newTask,setNewtask]=useState("");
    function handleInputChange(event){
        setNewtask(event.target.value);
    }
    function Addtask(){
        if(newTask.trim()!==""){
        setTask(t=>[...t,newTask]);
        setNewtask("");
        }
    }
    function Deletetask(index){
        const updatedtasks=tasks.filter((_,i)=>i!==index);
        setTask(updatedtasks);
    }
    function Movetaskup(index){
        if(index>0){
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]]
            setTask(updatedtasks);
        }
    }
    function Movetaskdown(index){
        if(index<tasks.length-1){
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]]
            setTask(updatedtasks);
        }
    }
    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter a task' value={newTask} onChange={handleInputChange}/>
                <button className='add-btn' onClick={Addtask}> Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-btn' onClick={()=>Deletetask(index)}>Delete</button>
                    <button className='move-btn' onClick={()=>Movetaskup(index)}>Up</button>
                    <button className='move-btn' onClick={()=>Movetaskdown(index)}>down</button>
                </li>
                )}
            </ol>
        </div>
    );
}
export default ToDoList