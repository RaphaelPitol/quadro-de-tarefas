import { ReactNode, createContext, useState, useEffect } from "react";
import axios from "axios";


interface Task{
    titulo: string,
    descricao: string
}

interface PropsTaskContext{
    task: Array<Task>
}

export const TaskContext = createContext({} as PropsTaskContext)

interface PropsTaskProvider{
    children: ReactNode
}

export function TaskProvider({children}: PropsTaskProvider){

    const[task, setTask] = useState([])

    useEffect(()=>{
          axios.get('/api/task')  
          .then((res)=>{
            console.log("Acordaaaaaaaa")
            console.log(res.data)
          })
    },[])

    return(
        <TaskContext.Provider value={{task}}>
            {children}
        </TaskContext.Provider>
    )
}
