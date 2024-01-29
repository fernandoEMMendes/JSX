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

import { CriarCategoriasController } from './Controller/Categorias/CriarCategoriasController'
import { ListarCategoriasController } from './Controller/Categorias/ListarCategoriasController'

import { isAutenticado } from './middleware/isAutenticado'
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

//Estrutura de Produtos
router.post('/CriarProdutos', isAutenticado, upload.single('file'), new CriarProdutosController().handle)


//Estrutura de Categorias
router.post('/CriarCategorias', isAutenticado, new CriarCategoriasController().handle)
router.get('/ListarCategorias', isAutenticado, new ListarCategoriasController().handle)


export { router }