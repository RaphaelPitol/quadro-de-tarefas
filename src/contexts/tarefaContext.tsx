import axios from "axios";
import Swal from 'sweetalert2'
import { ReactNode, createContext, useState, useEffect } from "react";
import { Loading } from "../components/Loading";


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
    const[loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        axios.get("/api/tarefas").then((res) => {
            console.log(res.data);
            setTarefas(res.data.tarefas);
        });
    }, []);

    async function createTarefa(data: Tarefas) {
        setLoading(true)
       await axios.post("/api/tarefas", data);

        axios
            .get("/api/tarefas") //5min
            .then((res) => {
                setTarefas(res.data.tarefas);
                setLoading(false)
            });
    }
    async function updateTarefa(data: Tarefas) {
        setLoading(true)
       await axios.put("/api/tarefas", data);

        axios
            .get("/api/tarefas") //5min
            .then((res) => {
                setTarefas(res.data.tarefas);
                setLoading(false)
            });
    }
    async function deleteTarefa(id: string) {
        // setLoading(true)
        // await axios.delete(`/api/tarefas/${id}`);

        // axios.get('/api/tarefas')
        //     .then((res) => {
        //         setTarefas(res.data.tarefas);
        //     });
        Swal.fire({
            text: "Você realmente deseja Excluir?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim!',
            cancelButtonText: 'Não'
        }).then(async (result) => {
            if (result.isConfirmed) {

                await axios.delete(`/api/tarefas/${id}`);

                axios.get('/api/tarefas')
                    .then((res) => {
                        setTarefas(res.data.tarefas);
                        // setLoading(false)
                    });
            }
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
            <Loading visible={loading}/>
            {children}
        </TarefaContext.Provider>
    );
}
