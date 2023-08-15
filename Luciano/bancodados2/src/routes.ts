import { Router } from "express";

import { CriarUsuarioController } from './controllers/Usuarios/CriarUsuarioController'
import { CriarClienteController } from "./controllers/Clientes/CriarClienteController";

const router = Router()


router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post("/CriarClientes", new CriarClienteController().handle)




export { router }