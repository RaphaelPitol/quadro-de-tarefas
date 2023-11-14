import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Swal from 'sweetalert2'
import { Model, createServer } from 'miragejs'

createServer({
    models: {
        tarefas: Model
    },
    routes() {
        this.get('/api/tarefas', () => {
            return this.schema.all('tarefas')
        })

        this.post('/api/tarefas', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.db.tarefas.insert(data)
        })
        this.put('/api/tarefas', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.db.tarefas.update(data.id, data)
        })
        this.delete('/api/tarefas/:id', (schema, request) => {
            const id = request.params.id;
            schema.db.tarefas.remove(id);
            Swal.fire({
                text:"Deletado com sucesso!"
            })
            return schema
        });


    }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
