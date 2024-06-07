import { useNavigate } from "react-router-dom";
import { Container } from "./styles"

interface PropsHeader {
    abrirModal: () => void;
}

export const Header = (props: PropsHeader) => {
    const navigate = useNavigate()

    function sair(){
        navigate('/')
    }
    return(
        <Container>
            <h1>Quadro de tarefas</h1>
            <div style={{
                display: 'flex',
            }}>
                <button
                    style={{
                        marginRight: 10,
                    }}
                    type="button"
                    onClick={props.abrirModal}
                >
                    Nova Tarefa
                </button>

                <button type="button"
                onClick={sair}
                className="btn"
                >
                    Logout
                </button>
            </div>

        </Container>
    )
}
