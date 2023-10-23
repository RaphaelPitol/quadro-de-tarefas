import { ReactNode, createContext } from "react";

export const TaskContext = createContext({})

interface PropsTaskProvider{
    children: ReactNode
}

export function TaskProvider({children}: PropsTaskProvider){
    return(
        <TaskContext.Provider value={{}}>
            {children}
        </TaskContext.Provider>
    )
}
