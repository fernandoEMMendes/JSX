import React, { useState, useEffect } from 'react'
import api from '../../Api/api'
import './listar.estilo.scss'
import { GiTrashCan } from 'react-icons/gi'

export default function ListarUsuarios() {

    const [usuarios, setUsuarios] = useState([''])

    useEffect(() => {
        async function listarUsuarios() {
            const resposta = await api.get('/ListarUsuarios')
            setUsuarios(resposta.data)
        }
        listarUsuarios()
    }, [usuarios])

    async function excluirUsuario(id) {
      await api.delete('/Apagarusuario', {
        data:{
            apagar: id
        }
      })
    }


    return (
        <div className='conteinerListar'>
            <h1>Listar Usuários</h1>
            {usuarios.map((usuario) => {
                return (
                    <div className='listarUsuarios'>
                        <p key={usuario.id}>{usuario.id} - {usuario.nome}</p>
                        <GiTrashCan color='red' onClick={() => excluirUsuario(usuario.id)} />
                    </div>

                )
            })}
        </div>
    )
}