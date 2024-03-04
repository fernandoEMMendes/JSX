import apiLocal from "../../API/apiLocal/api";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";


export default function PedidosListar() {

    const [verPedidos, setVerPedidos] = useState([""])

    const lsToken = localStorage.getItem("@tklogin2023")
    const token = JSON.parse(lsToken)

    useEffect(() => {
        async function loadPedidos() {
            const resposta = await apiLocal.get("/ListarPedidos", {
                headers: {
                    Authorization: "Bearer " + `${token}`
                }
            })
            setVerPedidos(resposta.data)
        }
        loadPedidos()
    }, [verPedidos])

    return (
        <div>
            <div>
                <h1>Listar Pedidos</h1>
            </div>

            {verPedidos.length > 0 ? (
                <div>
                    {verPedidos.map((palmito) => {
                        return (
                            <div>
                                <h1>Num: {palmito.num}</h1>
                                <h2>Status: {palmito.status}</h2>
                                {palmito.observacao === null ? (<h2>Obs: Sem observação</h2>) : (<h2>Obs: {palmito.observacao}</h2>)}
                            </div>
                        )
                    })}
                </div>
            ) : (
                <h2>Carregando</h2>
            )}
        </div>
    )
}