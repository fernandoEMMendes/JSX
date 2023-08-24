import { Router } from "express";

import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClienteController } from "./controllers/Clientes/CriarClienteController";
import { ListarClienteController } from "./controllers/Clientes/ListarClienteController";
import { CriarProdutosController } from "./controllers/Produtos/CriarProdutosController";
import { ListarUsuarioController } from "./controllers/Usuarios/ListarUsuarioController";
import { ListarProdutosController } from "./controllers/Produtos/ListarProdutosController";

const router = Router()


router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post("/CriarClientes", new CriarClienteController().handle)
router.post("/CriarProdutos", new CriarProdutosController().handle)

router.get("/ListarUsuarios", new ListarUsuarioController().handle)
router.get("/ListarClientes", new ListarClienteController().handle)
router.get("/ListarProdutos", new ListarProdutosController().handle)



export { router }