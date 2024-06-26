import { useState } from "react";
import Modal from "react-modal";
import { Header } from "../../components/Header";

import { ListTarefas } from "../../components/ListTarefas";
import { GlobalStyle } from "../../styles/global";
import { CustomModal } from "../../components/CustomModal";
import { TarefasProvider } from "../../contexts/tarefaContext";
import { useNavigate, useParams } from "react-router-dom";

Modal.setAppElement("#root");

// dontpad.com/profchines
function Tarefa() {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const {admin} = useParams();
    const navigater = useNavigate()

    let user = 'admin'

    console.log(user === admin)

    function abrirModal() {
        setIsVisibleModal(true);
    }

    function fecharModal() {
        setIsVisibleModal(false);
    }

    function teste(){
        navigater('/')
    }

    return (
        <>
        { admin === user ? <TarefasProvider>
                <GlobalStyle />
                <Header abrirModal={abrirModal} />

                <ListTarefas abrirModal={abrirModal} />

                <CustomModal
                    modalVisible={isVisibleModal}
                    fecharModal={fecharModal}
                />
            </TarefasProvider>
            :
            <p>Não esta logado</p>}

        </>
    );
}

export default Tarefa;
