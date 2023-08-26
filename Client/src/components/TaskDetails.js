import {useTaskContext} from '../hooks/useTaskContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskDetails = ({task})  =>{
  const {dispatch} = useTaskContext()
  const handleClick = async () => {
    const response = await fetch('/api/notes/'+task._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok){
      dispatch({type:'DELETE_TASK', payload: json})
    }
  }
    return (
      <div className="task-details">
        <h4>{task.name}</h4>
        <p>
          <strong>Notes: </strong>
          {task.details}
        </p>
        <br />
        <p>{formatDistanceToNow(new Date(task.createdAt), {addSuffix: true})}</p>
        <span onClick={handleClick}>Delete</span>
      </div>
    );
}

export default TaskDetails