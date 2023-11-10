import {FormEvent, useContext, useState} from 'react'
import Modal from "react-modal";
import { FormContainer } from "./styles";
import { TaskContext } from '../../context/taskContext';

interface PropsModal{
    modalVisible: boolean;
    fecharModal:()=>void;

}

export function CustomModal(props: PropsModal) {
    const{createTask} = useContext(TaskContext)

    const[titulo, setTitulo] = useState('')
    const[descricao, setDescricao] = useState('')


    
    function criarTarefa(event: FormEvent){
        event.preventDefault()
     
        createTask({
            titulo: titulo,
            descricao
        })

        setTitulo('')
        setDescricao('')
        props.fecharModal()

    }

    return (
        <Modal
            isOpen={props.modalVisible}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            // onRequestClose={props.fecharModal}
        >
            <button type="button" 
            onClick={props.fecharModal}
            className="react-modal-close">
                
                X
            </button>

            <FormContainer
                onSubmit={criarTarefa}
            >
                <h2>Cadastrar Tarefa</h2>
                <input type="text" placeholder="Titulo" 
                value={titulo}
                required
                onChange={(event)=> setTitulo(event.target.value)}
                />

                <textarea placeholder="Descrição"
                value={descricao}
                required
                onChange={(event)=> setDescricao(event.target.value)}
                />

                <button type="submit"
                >
                    Cadastrar
                </button>
            </FormContainer>
        </Modal>
    );
}
