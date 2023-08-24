import apiBack from "../../services/apiBack";




export default function ListarProdutos() {

    const [infoProdutos, setinfoProdutos] = useState([""])

    useEffect(() => {
        async function verInfo() {
            const response = await apiBack.get("/ListarProdutos")
            setinfoProdutos(response.data)
        }
        verInfo
    }, [infoProdutos]);
}


return(
    <div>
        <h1>Listar Produtos</h1>
        {/*incompleto*/}
        {infoProdutos.map()}
    </div>
)