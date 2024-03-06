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

    
    async function handleConfirmarCozinha(){

        await apiLocal.put
    }
    
    
    
    
    
    return (
        <div>
            <div>
                <h1>Listar Pedidos</h1>
            </div>

            {verPedidos.draft === 0 ? (
                <h2>Carregando</h2>
            ) : (
                <div>
                    {verPedidos.map((palmito) => {
                        return (
                            <div>
                                {palmito.draft === false && (
                                    <>
                                        <Link to={`/PedidoVer/${palmito.id}`}>
                                            <h1>Num: {palmito.num}</h1>
                                        </Link><h2>Status: {palmito.status}</h2>
                                        {palmito.observacao === null ? (<h2>Obs: Sem observação</h2>) : (<h2>Obs: {palmito.observacao}</h2>)}
                                        <br /> <br />
                                        <button onClick={handleConfirmarCozinha}>Confirmar Pedido!</button>
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}