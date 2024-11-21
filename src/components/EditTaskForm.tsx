
import { FormEvent, useState } from "react"
import { TasksProps } from "./types";

interface TasksFormProps {
  task:TasksProps
  editTask: (task: string,id:string) => void;
}

function EditTasksForm({editTask,task}:TasksFormProps) {

    const [taskName,setTaskName] = useState(task.task);

    // handle onchange
    const handleChange = (e: { target: { value: any; }; }) =>{
        setTaskName(e.target.value)
     
    }

     // handle submit
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(taskName);
        editTask(taskName,task.id)  
        setTaskName("")
    }
 


  return (
    <form className='tasks-form' onSubmit={handleSubmit}>
       <input type="text"
         className="tasks-input" 
         placeholder="Update task?"
         value={taskName} 
         onChange={handleChange}/>
       <button type="submit"
        className="tasks-btn">Update Task
       </button>
    </form>
  )
}

export default EditTasksForm