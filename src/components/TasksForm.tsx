import { FormEvent, useState } from "react"

interface TasksFormProps {
  addTask: (task: string) => void;
}

function TasksForm({addTask}:TasksFormProps) {

    const [taskName,setTaskName] = useState('');

    // handle onchange
    const handleChange = (e: { target: { value: any; }; }) =>{
        setTaskName(e.target.value)
     
    }

     // handle submit
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(taskName);
        addTask(taskName)  
        setTaskName("")
    }
 


  return (
    <form className='tasks-form' onSubmit={handleSubmit}>
       <input type="text"
         className="tasks-input" 
         placeholder="What is the task today?"
         value={taskName} 
         onChange={handleChange}/>
       <button type="submit"
        className="tasks-btn">Add task
       </button>
    </form>
  )
}

export default TasksForm