import axios from "axios";
import { ReactNode, createContext, useState, useEffect } from "react";


interface Tarefas {
    titulo: string;
    descricao: string;
    quadro: string;
}
interface TarefasWithId {
    id: string;
    titulo: string;
    descricao: string;
    quadro: string;
}

interface DataEditarTarefa {
    editar: boolean;
    tarefa: TarefasWithId | null;
}

interface PropsTarefaContext {
    tarefas: Array<TarefasWithId>;
    createTarefa: (tarefas: Tarefas) => Promise<void>;
    updateTarefa: (tarefas: TarefasWithId) => Promise<void>;
    funEditarTarefa: (tarefas: DataEditarTarefa) =>void;
    funSetTarefaDefaut: () => void;
    editarTarefa: DataEditarTarefa;
    deleteTarefa: (id: string) => Promise<void>;
}
export const TarefaContext = createContext({} as PropsTarefaContext);

interface PropsTarefaProvider {
    children: ReactNode;
}
// export function TarefasProvider(props: PropsTarefaProvider) {
export function TarefasProvider({ children }: PropsTarefaProvider) {
    const [tarefas, setTarefas] = useState([]);
    const [editarTarefa, setEditarTarefas] = useState<DataEditarTarefa>({
        editar: false,
        tarefa: null,
    });

    useEffect(() => {
        axios.get("/api/tarefas").then((res) => {
            console.log(res.data);
            setTarefas(res.data.tarefas);
        });
    }, []);

    async function createTarefa(data: Tarefas) {
        const resposta = await axios.post("/api/tarefas", data);

        axios
            .get("/api/tarefas") //5min
            .then((res) => {
                setTarefas(res.data.tarefas);
            });
    }
    async function updateTarefa(data: Tarefas) {
        const resposta = await axios.put("/api/tarefas", data);

        axios
            .get("/api/tarefas") //5min
            .then((res) => {
                setTarefas(res.data.tarefas);
            });
    }
    async function deleteTarefa(id: string) {
        await axios.delete(`/api/tarefas/${id}`);

        axios.get('/api/tarefas')
            .then((res) => {
                setTarefas(res.data.tarefas);
            });
    }

    function funSetTarefaDefaut() {
        setEditarTarefas({ editar: false, tarefa: null });
    }
    function funEditarTarefa(data: DataEditarTarefa) {
        setEditarTarefas(data);
    }

    return (
        <TarefaContext.Provider
            value={{
                tarefas,
                createTarefa,
                funSetTarefaDefaut,
                funEditarTarefa,
                updateTarefa,
                editarTarefa,
                deleteTarefa
            }}
        >
            {children}
        </TarefaContext.Provider>
    );
}
