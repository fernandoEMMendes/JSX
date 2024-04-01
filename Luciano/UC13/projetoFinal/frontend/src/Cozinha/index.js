import React, {useState, useEffect} from 'react'
import apiLocal from "../API/apiLocal/api"



export default function Cozinha(){
    const [verPedidos, setVerPedidos] = useState([''])
    const [verItemPedido, setVerItemPedido] = useState([''])

    const lstoken = localStorage.getItem('@tklogin2023')
    const token = JSON.parse(lstoken)

    useEffect(() => {
        async function loadPedidos(){
            const resposta = await apiLocal.get('/ListarPedidos', {
                headers:{
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            setVerPedidos(resposta.data)
        }
        loadPedidos()
    }, [verPedidos])


    useEffect(() => {
        async function loadItemPedidos(){
            const resposta = await apiLocal.get('/')
        }
    }, [])
    


    return(
        <h1>Cozinha</h1>
        

    )
}