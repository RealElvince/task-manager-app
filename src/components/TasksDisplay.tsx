import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { TasksProps } from './types'


interface TasksDisplayProps {
  task:TasksProps // Correctly type the task prop as an object with the Task structure
  toggleComplete :(id:string)=>void
  deleteTask:(id:string) =>void
  editTask:(id:string) => void
}


function TasksDisplay({deleteTask,editTask, task,toggleComplete}:TasksDisplayProps) {
  return (
    <div className='tasks-display'>
        <p className={`${task.completionstatus? 'completed':""}`}
          onClick={()=>toggleComplete(task.id)}
        >{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTask(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTask(task.id)} />
        </div>

    </div>
  )
}

export default TasksDisplay