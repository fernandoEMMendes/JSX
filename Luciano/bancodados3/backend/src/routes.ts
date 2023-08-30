import {Router} from 'express'

import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { ListarUsuariosController } from './controllers/Usuarios/ListarUsuariosController'

import { ListarClientesController } from './controllers/Clientes/ListarClientesController'
import { CriarClientesController } from './controllers/Clientes/CriarClientesController'
import { CriarProdutosController } from './controllers/Produtos/CriarProdutosController'

const router = Router()

//Usuários
router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.get('/ListarUsuarios', new ListarUsuariosController().handle)

//Clientes
router.post('/CriarClientes', new CriarClientesController().handle)
router.get('/ListarClientes', new ListarClientesController().handle)

//Produtos
router.post('/CriarProdutos', new CriarProdutosController().handle)



export {router}