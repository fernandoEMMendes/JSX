import { Router } from "express";

import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClienteController } from "./controllers/Clientes/CriarClienteController";
import { ListarClienteController } from "./controllers/Clientes/ListarClienteService";

const router = Router()


router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post("/CriarClientes", new CriarClienteController().handle)
router.get("/ListarClientes", new ListarClienteController().handle)



export { router }