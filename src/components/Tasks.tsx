import { useState } from "react"
import TasksForm from "./TasksForm"
import {v4 as uuidv4} from 'uuid'
import { TasksProps } from "./types"
import TasksDisplay from "./TasksDisplay"
import EditTasksForm from "./EditTaskForm"
uuidv4()


function Tasks() {
    const [tasks,setTasks] = useState<TasksProps[]>([])

    // add function
    const addTask = (task:string) =>{
        setTasks([
            ...tasks,
            {
             id: uuidv4(),
             task:task,
             completionstatus:false,
             isEditing:false
            }
        ])
      console.log(tasks)
    }

  // Mark finished task
  const toggleComplete = (id: string) =>{
     setTasks(tasks.map(
      task =>task.id ===id ? {
        ...task,completionstatus:!task.completionstatus
      }:task
     ))
  }
  // delete task
  const deleteTask = (id:string) =>{
    setTasks(tasks.filter(task =>task.id != id))
  }
  
  // edit task
  const editTask = (id:string) =>{
    setTasks(tasks.map(task =>task.id === id? {
      ...task,isEditing:!task.isEditing 
    }:task))
  }

  const editTodo = (_task:string,id:string) =>{
    setTasks(tasks.map(task =>task.id === id? {
      ...task,isEditing:!task.isEditing 
    }:task))
  }

  return (
    <div className="tasks">
        <h1>Get Things Done!</h1>
        <TasksForm addTask={addTask}/>
        <h4>Number of tasks:{tasks.length}</h4>
        {
          tasks.map((todo,index) =>( 
            todo.isEditing ? (
              <EditTasksForm editTask={editTodo} task={{
                id: "",
                task: "",
                completionstatus: false,
                isEditing: false
              }}/>
            )
            : (<TasksDisplay key={index} task={todo} 
           toggleComplete={toggleComplete}
           deleteTask={deleteTask}
           editTask={editTask}/>)
          
          ))
        }
    </div>
  )
}

export default Tasks