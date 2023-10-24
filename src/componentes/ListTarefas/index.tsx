import { useContext } from "react";
import { Container } from "./styles";

import { TaskContext } from "../../context/taskContext";

export function LisTarefas() {
    const { task } = useContext(TaskContext);

    return (
        <>
            <Container>
                <ul>
                    <h3>Quadro 1</h3>
                    {task.map((task) => {
                        return (
                            <li>
                                <div>
                                    <h4>{task.titulo}</h4>
                                    <p>{task.descricao}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </>
    );
}
