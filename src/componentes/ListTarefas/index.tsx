import { useContext } from "react";
import { Container } from "./styles";

import { TaskContext } from "../../context/taskContext";

export function LisTarefas() {
    const { task } = useContext(TaskContext);
    console.log(task)

    return (
        <>
            <Container>
                <ul>
                    <h3>Quadro 1</h3>
                    {task.map((task, index) => {
                        return (
                            <li
                            key={index}
                            >
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
