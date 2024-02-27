import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

import { LoginController } from './Controller/Login/LoginController'
import { LoginMotoqueiroController } from './Controller/Login/LoginMotoqueiroController'
import { LoginClienteController } from './Controller/Login/LoginClienteController'

import { CriarusuariosController } from './Controller/Usuarios/CriarUsuariosController'
import { ListarUsuarioTokenController } from './Controller/Usuarios/listarUsuarioTokenController'

import { CriarMotoqueiroController } from './Controller/Motoqueiros/CriarMotoqueiroController'
import { ListarMotoqueiroController } from './Controller/Motoqueiros/ListarMotoqueiroController'

import { CriarClientesController } from './Controller/Clientes/CriarClientesController'
import { ListarClientesUnicoController } from './Controller/Clientes/ListarClientesUnicoController'

import { CriarProdutosController } from './Controller/Produtos/CriarProdutosController'

import { criarPedidositemController } from './Controller/Pedidos_item/criarPedidositemController'
import { deletarPedidositemController } from './Controller/Pedidos_item/deletarPedidositemController'

import { CriarCategoriasController } from './Controller/Categorias/CriarCategoriasController'
import { ListarCategoriasController } from './Controller/Categorias/ListarCategoriasController'

import { isAutenticado } from './middleware/isAutenticado'
import { criarPedidosController } from './Controller/Pedidos/criarPedidosController'
const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))


//Rotas de Logins
router.post('/LoginUsuarios', new LoginController().handle)
router.post("/LoginMotoqueiros", new LoginMotoqueiroController().handle)
router.post("/LoginClientes", new LoginClienteController().handle)

//Estrutura de Motoqueiros
router.post("/CriarMotoqueiros", new CriarMotoqueiroController().handle)
router.get("/ListarMotoqueiro", new ListarMotoqueiroController().handle)

//Estrutura de Usuários
router.post('/CriarUsuarios', new CriarusuariosController().handle)
router.get('/ListarUsuarioToken', new ListarUsuarioTokenController().handle)

//Estrutura de Clientes
router.post("/CriarClientes", new CriarClientesController().handle)
router.get("/ListarClienteUnico", new ListarClientesUnicoController().handle)

//Estrutura de Produtos
router.post('/CriarProdutos', upload.single('file'), new CriarProdutosController().handle)

//Estrutura de Pedidos
router.post("/CriarPedidos", new criarPedidosController().handle)
router.post("/CriarPedidosItem", new criarPedidositemController().handle)
router.delete("/DeletarPedidosItem", new deletarPedidositemController().handle)

//Estrutura de Categorias
router.post('/CriarCategorias', new CriarCategoriasController().handle)
router.get('/ListarCategorias', new ListarCategoriasController().handle)


export { router }