import apiLocal from "../../API/apiLocal/api";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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


    async function handleConfirmarCozinha(id) {

        const aceitar = true
        const rascunho = "Em preparo..."

        await apiLocal.put("/AceitarPedidos", {
            novoAceito: aceitar,
            pedidoId: id,
            novoRascunho: rascunho
        })
    }


    async function handleFinalizarCozinha(id) {

        const rascunho = "Aguardando entregador..."

        await apiLocal.put("/FinalizarPedidos", {
            pedidoId: id,
            novoStatus: rascunho
        })
    }



    return (
        <div>
            <div>
                <h1>Listar Pedidos</h1>
            </div>

            <br />

            <h3>---Pedidos para aceitar---</h3>

            <br />

            {verPedidos.length === 0 ? (
                <h2>Carregando</h2>
            ) : (
                <div>
                    {verPedidos.map((palmito) => {
                        return (
                            <>
                                <div>
                                    {palmito.draft === false && palmito.aceito === false && (
                                        <>
                                            <h1>Num: {palmito.num}</h1>
                                            <h2>Status: {palmito.status}</h2>
                                            {palmito.observacao === null ? (<h2>Obs: Sem observação</h2>) : (<h2>Obs: {palmito.observacao}</h2>)}
                                            <br />
                                            <button onClick={() => handleConfirmarCozinha(palmito.id)}>Confirmar Pedido!</button>
                                            <br /> <br />
                                        </>
                                    )}
                                </div>


                            </>
                        )
                    })}
                </div>
            )}

            <br />

            <h3>---Pedidos aceitos---</h3>

            <br />

            {verPedidos.draft === 0 ? (
                <h2>Carregando</h2>
            ) : (
                <div>
                    {verPedidos.map((palmito) => {
                        return (
                            <>
                                <div>
                                    {palmito.aceito === true && palmito.status === "Em preparo..." && (
                                        <>
                                            <h1>Num: {palmito.num}</h1>
                                            <h2>Status: {palmito.status}</h2>
                                            {palmito.observacao === null ? (<h2>Obs: Sem observação</h2>) : (<h2>Obs: {palmito.observacao}</h2>)}
                                            <button onClick={() => handleFinalizarCozinha(palmito.id)}>Finalizar Pedido!</button>
                                        </>
                                    )}
                                </div>


                            </>
                        )
                    })}
                </div>
            )}

            <br />

            <h3>---Pedidos prontos---</h3>

            <br />

            {verPedidos.draft === 0 ? (
                <h2>Carregando</h2>
            ) : (
                <div>
                    {verPedidos.map((palmito) => {
                        return (
                            <>
                                <div>
                                    {palmito.status === "Aguardando entregador..." && (
                                        <>
                                            <h1>Num: {palmito.num}</h1>
                                            <h2>Status: {palmito.status}</h2>
                                            {palmito.observacao === null ? (<h2>Obs: Sem observação</h2>) : (<h2>Obs: {palmito.observacao}</h2>)}
                                        </>
                                    )}
                                </div>


                            </>
                        )
                    })}
                </div>
            )}
        </div>
    )
}