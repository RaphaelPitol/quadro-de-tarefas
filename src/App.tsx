import { useState } from "react";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { Header } from "./componentes/Header";
import { LisTarefas } from "./componentes/ListTarefas";
import { CustomModal } from "./componentes/CustomModal";
import { TaskProvider } from "./context/taskContext";

Modal.setAppElement("#root");

function App() {
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    function abrirModal() {
        setIsVisibleModal(true);
    }

    function fecharModal() {
        setIsVisibleModal(false);
    }

    return (
        <>
        <TaskProvider>
            <GlobalStyle />
            <Header 
            abrirModal={abrirModal} 
            />
            <LisTarefas />

            <CustomModal
                modalVisible={isVisibleModal}
                fecharModal={fecharModal}
            />
            </TaskProvider>
        </>
    );
}

export default App;
