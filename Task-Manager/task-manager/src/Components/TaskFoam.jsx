import { useState } from "react";

 export default function TaskForm ({ onAddTask })
{
    const[title,setTitle] = useState("");
    const[category,setCategory] = useState("None");

    const handleSubmit = (e)=> {
        e.preventDefault();

        if(!title.trim()) return;
        onAddTask({
            id:Date.now(),
            title,
            category,
            completed:false});

        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Enter Task"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}/>

            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option>Work</option>
                <option>Personal</option>
                <option>Study</option>
                <option>None</option>
            </select>
            <button>Add Task</button>
        </form>
    );
}