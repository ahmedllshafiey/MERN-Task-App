import { useEffect }  from 'react'
import { useTaskContext } from '../hooks/useTaskContext.js'
import TaskDetails from "../components/TaskDetails.js"
import TaskForm from '../components/TaskForm.js'

// Homepage to route front-end 

const Home = () => {

  const {task, dispatch} = useTaskContext()

  useEffect(()=>{
    const fetchTasks = async () =>{
      const responose = await fetch("api/notes");
      const json  = await responose.json()

      if (responose.ok){
        dispatch({ type: "SET_TASK", payload: json});
      }
    }

    fetchTasks()
  },[dispatch])
    return (
      <div className="home">
        <div className="tasks">
          {task &&
            task.map((tasks) => <TaskDetails key={tasks._id} task={tasks} />)}
        </div>
        <TaskForm />
      </div>
    );
}

export default Home