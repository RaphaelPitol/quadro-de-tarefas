import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Model, createServer } from 'miragejs'

createServer({
    models:{
        task: Model
    },
    routes(){
        this.get('/api/task',()=>{
            return this.schema.all('task')
        })
    }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
