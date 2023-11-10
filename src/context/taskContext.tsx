import { ReactNode, createContext, useState, useEffect } from "react";
import axios from "axios";


interface Task{
    titulo: string,
    descricao: string

}

interface PropsTaskContext{
    task: Array<Task>;
    createTask: (task: Task)=> Promise<void>;
}

export const TaskContext = createContext({} as PropsTaskContext)

interface PropsTaskProvider{
    children: ReactNode
}

export function TaskProvider({children}: PropsTaskProvider){

    const[task, setTask] = useState([])

   console.log(task)

    useEffect(()=>{
          axios.get('/api/task')  
          .then((res)=>{
            console.log(res.data.tasks)
          setTask(res.data.tasks)
          })
    },[])

    async function createTask(data: Task){
            console.log(data)
            const response = await axios.post('/api/task/', data)
            
            console.log(response)
        axios.get('/api/task')
        .then((res)=>{
            setTask(res.data.tasks)
        })
    
        }

    return(
        <TaskContext.Provider value={{task, createTask}}>
            {children}
        </TaskContext.Provider>
    )
}
