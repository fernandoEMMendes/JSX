import { Router } from "express";

import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClienteController } from "./controllers/Clientes/CriarClienteController";
import { CriarProdutosController } from "./controllers/Produtos/CriarProdutosController";

import { ListarClienteController } from "./controllers/Clientes/ListarClienteController";
import { ListarUsuarioController } from "./controllers/Usuarios/ListarUsuarioController";
import { ListarProdutosController } from "./controllers/Produtos/ListarProdutosController";
import { ListarUnicoUsuarioController } from "./controllers/Usuarios/ListarUnicoUsuarioController";

import { ApagarProdutosController } from "./controllers/Produtos/ApagarProdutosController";
import { ApagarUsuarioController } from "./controllers/Usuarios/ApagarUsuarioController";
import { ApagarClienteController } from "./controllers/Clientes/ApagarClienteController";

const router = Router()

//Criar
router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post("/CriarClientes", new CriarClienteController().handle)
router.post("/CriarProdutos", new CriarProdutosController().handle)

//Listar
router.get("/ListarUsuarios", new ListarUsuarioController().handle)
router.get("/ListarClientes", new ListarClienteController().handle)
router.get("/ListarProdutos", new ListarProdutosController().handle)
router.get("/ListarUnicoUsuario/:id", new ListarUnicoUsuarioController().handle)

//Apagar
router.delete("/DeletarProdutos", new ApagarProdutosController().handle)
router.delete("/DeletarUsuarios", new ApagarUsuarioController().handle)
router.delete("/DeletarClientes", new ApagarClienteController().handle)

export { router }