import apiLocal from "../../src/API/apiLocal/api";
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
        <h1>Listar Pedidos</h1>
    )
}