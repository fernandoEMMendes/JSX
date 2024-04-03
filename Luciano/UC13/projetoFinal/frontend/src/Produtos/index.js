import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import apiLocal from '../API/apiLocal/api'
import './produtos.estilo.scss'


export default function Produtos() {
    const navegacao = useNavigate()

    const [categorias, setCategorias] = useState([''])
    const [nomeProd, setNomeProd] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')
    const [criarCategoria, setCriarCategoria] = useState('')

    const [modalAberto, setModalAberto] = useState(false)

    const [idCategoria, setIdCategoria] = useState('')
    const [imagem, setImagem] = useState(null)

    const iToken = localStorage.getItem('@tklogin2023')
    const token = JSON.parse(iToken)

    useEffect(() => {
        async function loadCategorias() {
            const resposta = await apiLocal.get('/ListarCategorias', {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            setCategorias(resposta.data)
        }
        loadCategorias()
    }, [categorias])


    async function handleCriarCategoria(e) {
        try {
            e.preventDefault()
            setCriarCategoria('')
            const nome = criarCategoria
            await apiLocal.post('/CriarCategorias', {
                nome
            }, {
                headers: {
                    Authorization: 'Bearer ' + `${token}`
                }
            })
            toast.success('Categoria Cadastrada', {
                toastId: 'toastId'
            })
        } catch (err) {

        }
    }

    async function abrirModal() {
        setModalAberto(true)
    }

    async function fecharModal() {
        setModalAberto(false)
    }


    function handleImagem(e) {
        if (!e.target.files) {
            return
        }
        const image = e.target.files[0]
        if (image.type === 'image/png' || image.type === 'image/jpeg') {
            setImagem(image)
        }
    }
    async function handleCadastrar(e) {
        try {
            e.preventDefault()
            const categoriaId = idCategoria
            const data = new FormData()

            data.append('nome', nomeProd)
            data.append('fabricante', fabricante)
            data.append('quantidade', quantidade)
            data.append('preco', preco)
            data.append('categoriaId', categoriaId)
            data.append('file', imagem)

            const resposta = await apiLocal.post('/CriarProdutos', data, {

            })
            toast.success(resposta.data.dados)

        } catch (err) {
            console.log(err)
        }

        setNomeProd('')
        setFabricante('')
        setQuantidade('')
        setPreco('')
        setImagem(null)
    }

    function navegar(){
        navegacao('/Dashboard')
    }

    return (
        <div className="conteinerProdutosCadastro">
            <header id='Header_Produtos'>
                <h1>Produtos</h1>
                
                <button onClick={abrirModal}>Criar Categorias</button>
                <Modal isOpen={modalAberto}>
                    <h1>Criar Categorias</h1>
                    <form onSubmit={handleCriarCategoria}>
                        <input
                        type='text'
                        value={criarCategoria}
                        onChange={(e) => setCriarCategoria(e.target.value)}/>
                        <button type='submit'>Criar</button>
                    </form>
                    <button onClick={fecharModal}>Fechar</button>
                </Modal>
            </header>
            <main id='Main_Produtos'>
                <div>
                    <form onSubmit={handleCadastrar}>
                        <select
                            id='Select_Produto'
                            value={idCategoria}
                            onChange={(e) => setIdCategoria(e.target.value)}
                        >
                            <option >Selecione...</option>
                            {categorias.map((item) => {
                                return (
                                    <option
                                        value={item.id}>
                                        {item.nome}
                                    </option>
                                )
                            })}
                        </select>
                        <label>Nome:</label>
                        <input
                            type="text"
                            value={nomeProd}
                            onChange={(e) => setNomeProd(e.target.value)}
                        />
                        <label>Fabricante:</label>
                        <input
                            type="text"
                            value={fabricante}
                            onChange={(e) => setFabricante(e.target.value)}
                        />
                        <label>Quantidade:</label>
                        <input
                            className='Input_Number_Produtos'
                            type="number"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                        <label>Preço:</label>
                        <input
                            className='Input_Number_Produtos'
                            type="number"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />
                        <label>Imagem:</label>
                        <input
                            type="file"
                            value={setImagem}
                            accept='image/jpeg, image/png'
                            onChange={handleImagem}
                        />
                        <button type='submit'>Enviar</button>
                        <button onClick={navegar} >Voltar</button>
                    </form>
                </div>
            </main>
            <footer id='Footer_Produtos'></footer>
        </div>
    )
}