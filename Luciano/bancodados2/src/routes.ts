import { Router } from "express";

import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClienteController } from "./controllers/Clientes/CriarClienteController";
import { ListarClienteController } from "./controllers/Clientes/ListarClienteController";
import { CriarProdutosController } from "./controllers/Produtos/CriarProdutosController";
import { ListarUsuarioController } from "./controllers/Usuarios/ListarUsuarioController";
import { ListarProdutosController } from "./controllers/Produtos/ListarProdutosController";
import { ApagarProdutosController } from "./controllers/Produtos/ApagarProdutosController";

const router = Router()


router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post("/CriarClientes", new CriarClienteController().handle)
router.post("/CriarProdutos", new CriarProdutosController().handle)

router.get("/ListarUsuarios", new ListarUsuarioController().handle)
router.get("/ListarClientes", new ListarClienteController().handle)
router.get("/ListarProdutos", new ListarProdutosController().handle)

router.delete("/ApagarProdutos/:id", new ApagarProdutosController().handle)



export { router }