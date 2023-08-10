import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack"
import { FiTrash2, FiEdit } from "react-icons/fi";


import "./PagM.css"

import { toast } from "react-toastify";
import api from "../../services/apiCep";

export default function PagM() {




    const [Info, setInfo] = useState([''])
    const [Dado, setDado] = useState([''])

    //função para recuperar os dados e renderiza
    useEffect(() => {
        async function verDados() {
            const response = await apiBack.get("/VerDados")
            setInfo(response.data)
        }
        verDados()
    }, [Info])


    //função para deletar dados
    async function handleDelete(id) {
        await apiBack.delete(`/deleteUser/${id}`)
    }


    async function handleSelect(id) {
        const response = await apiBack.get(`/VerDadosUnico/${id}`)
        setDado(response.data)
    }





















    return (
        <>
            <div className="aligntitle">
                <h1>----------------Lista de cadastros--------------------</h1>
                {Info.map((infos) => {
                    return (
                        <article key={infos.id_cliente} className="aligntext">
                            <strong>{infos.cod_cliente}</strong>
                            <strong>{infos.nome}</strong>
                            <strong>{infos.cidade}</strong>
                            <FiEdit color="blue" onClick={() => handleSelect(infos.cod_cliente)} />
                            <FiTrash2 color="red" onClick={() => handleDelete(infos.id_cliente)} />
                        </article>
                    )
                }
                )}
            </div>

            <div className="aligntitle">
                <h1>----------------Lista Dados Selecionados------------</h1>
                {Dado.map((dados) => {
                    return (
                        <article key={dados.cod_cliente} className="aligntext">
                            <strong>{dados.id_cliente}</strong>
                            <strong>{dados.nome}</strong>
                            <strong>{dados.tel_celular}</strong>
                            <strong>{dados.rua}</strong>
                            <strong>{dados.bairro}</strong>
                            <strong>{dados.estado}</strong>
                        </article>
                    )
                })}
            </div>
        </>
    )
}