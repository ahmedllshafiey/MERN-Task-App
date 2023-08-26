import {createContext} from 'react'
import { useReducer } from "react";

export const TaskContext = createContext()

export const taskReducer = (state, action) => {
    switch (action.type) {
      case "SET_TASK":
        return {
          task: action.payload,
        };
      case "CREATE_TASK":
        return {
          task: [action.payload, ...state.task],
        };
      case 'DELETE_TASK':
        return{
          task: state.task.filter((t)=> t._id !== action.payload._id
          )
        }
      default:
        return state;
    }
}

export const TaskContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer, {
      task: null,
    });

    return(
        <TaskContext.Provider value={{...state, dispatch}}>
            { children }  
        </TaskContext.Provider>
    )
}