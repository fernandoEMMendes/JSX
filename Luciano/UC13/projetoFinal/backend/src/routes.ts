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
import { ListarClientesController } from './Controller/Clientes/ListarClientesController'

import { CriarProdutosController } from './Controller/Produtos/CriarProdutosController'

import { criarPedidosController } from './Controller/Pedidos/criarPedidosController'
import { deletarPedidosController } from './Controller/Pedidos/deletarPedidosController'
import { atualizarPedidosController } from './Controller/Pedidos/atualizarPedidosController'
import { listarPedidosController } from './Controller/Pedidos/listarPedidosController'

import { criarPedidositemController } from './Controller/Pedidos_item/criarPedidositemController'
import { deletarPedidositemController } from './Controller/Pedidos_item/deletarPedidositemController'

import { CriarCategoriasController } from './Controller/Categorias/CriarCategoriasController'
import { ListarCategoriasController } from './Controller/Categorias/ListarCategoriasController'

import { isAutenticado } from './middleware/isAutenticado'
import { confirmarPedidoController } from './Controller/Pedidos/confirmarPedidoController'
import { aceitarPedidoController } from './Controller/Pedidos/aceitarPedidoController'
import { ListarProdutosController } from './Controller/Produtos/ListarProdutosController'
import { ListarProdutosCategoriaController } from './Controller/Produtos/ListarProdutosCategoriaController'
import { cancelarPedidosItemController } from './Controller/Pedidos_item/cancelarPedidositemController'

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
router.get('/ListarUsuarioToken', isAutenticado, new ListarUsuarioTokenController().handle)

//Estrutura de Clientes
router.post("/CriarClientes", new CriarClientesController().handle)
router.get("/ListarClienteUnico", new ListarClientesUnicoController().handle)
router.get("/ListarClientes", new ListarClientesController().handle)

//Estrutura de Produtos
router.post('/CriarProdutos', upload.single('file'), new CriarProdutosController().handle)
router.get("/ListarProdutos", new ListarProdutosController().handle)
router.get("/ListarProdutosCategoria", new ListarProdutosCategoriaController().handle)

//Estrutura de Pedidos
router.post("/CriarPedidos", new criarPedidosController().handle)
router.delete("/DeletarPedidos", new deletarPedidosController().handle)
router.get("/ListarPedidos", new listarPedidosController().handle)

router.put("/AtualizarPedidos", new atualizarPedidosController().handle)
router.put("/ConfirmarPedidos", new confirmarPedidoController().handle)
router.put("/AceitarPedidos", new aceitarPedidoController().handle)

router.post("/CriarPedidosItem", new criarPedidositemController().handle)
router.delete("/DeletarPedidosItem", new deletarPedidositemController().handle)
router.delete("/CancelarPedido", new cancelarPedidosItemController().handle)

//Estrutura de Categorias
router.post('/CriarCategorias', new CriarCategoriasController().handle)
router.get('/ListarCategorias', new ListarCategoriasController().handle)


export { router }