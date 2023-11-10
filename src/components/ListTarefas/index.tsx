import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { Container } from "./styles";
import { TarefaContext } from "../../contexts/tarefaContext";

interface PropsListTarefas {
    abrirModal: () => void;
}

export function ListTarefas(props: PropsListTarefas) {
    const { tarefas, funEditarTarefa, deleteTarefa } =
        useContext(TarefaContext);

    const tarefasQuadro1 = tarefas.filter((tarefa) => tarefa.quadro === "1");
    const tarefasQuadro2 = tarefas.filter((tarefa) => tarefa.quadro === "2");
    const tarefasQuadro3 = tarefas.filter((tarefa) => tarefa.quadro === "3");

    return (
        <>
            <Container>
                <div>
                    <ul>
                        <h3>Quadro 1</h3>

                        {tarefasQuadro1.map((tarefa, index) => {
                            return (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <div>
                                        <button
                                            style={{
                                                fontSize: "1.5rem",
                                                color: "green",
                                            }}
                                            type="button"
                                            onClick={() => {
                                                funEditarTarefa({
                                                    editar: true,
                                                    tarefa: tarefa,
                                                });
                                                props.abrirModal();
                                            }}
                                        >
                                            <AiFillEdit />
                                        </button>
                                        <button
                                            style={{
                                                fontSize: "1.5rem",
                                                marginLeft: "0.5rem",
                                                color:"red"
                                            }}
                                            onClick={() =>
                                                deleteTarefa(tarefa.id)
                                            }
                                        >
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Quadro 2</h3>

                        {tarefasQuadro2.map((tarefa, index) => {
                            return (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <div>
                                        <button
                                            style={{
                                                fontSize: "1.5rem",
                                                color: "green",
                                            }}
                                            type="button"
                                            onClick={() => {
                                                funEditarTarefa({
                                                    editar: true,
                                                    tarefa: tarefa,
                                                });
                                                props.abrirModal();
                                            }}
                                        >
                                            <AiFillEdit />
                                        </button>
                                        <button
                                            style={{
                                                fontSize: "1.5rem",
                                                marginLeft: "0.5rem",
                                                color:"red"
                                            }}
                                            onClick={() =>
                                                deleteTarefa(tarefa.id)
                                            }
                                        >
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>Quadro 3</h3>

                        {tarefasQuadro3.map((tarefa, index) => {
                            return (
                                <li key={index}>
                                    <div>
                                        <h4>{tarefa.titulo}</h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <div>
                                        <button
                                            style={{
                                                fontSize: "1.5rem",
                                                color: "green",
                                            }}
                                            type="button"
                                            onClick={() => {
                                                funEditarTarefa({
                                                    editar: true,
                                                    tarefa: tarefa,
                                                });
                                                props.abrirModal();
                                            }}
                                        >
                                            <AiFillEdit />
                                        </button>
                                        <button
                                            style={{
                                                fontSize: "1.5rem",
                                                marginLeft: "0.5rem",
                                                color:"red"
                                            }}
                                            onClick={() =>
                                                deleteTarefa(tarefa.id)
                                            }
                                        >
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Container>
        </>
    );
}
