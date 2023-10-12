import { Router } from "express"
const router = Router()
export { router }

//Criar
import { CriarUsuarioController } from "./Controllers/Usuario/CriarUsuarioController"

//Listar
import { ListarUsuarioController } from "./Controllers/Usuario/ListarUsuarioController"

//ListarUnico
import { ListarUnicoUsuarioController } from "./Controllers/Usuario/ListarUnicoUsuarioController"

//Deletar
import { DeletarUsuarioController } from "./Controllers/Usuario/DeletarUsuarioController"

router.post("/CriarUsuario", new CriarUsuarioController().handle)

router.get("/ListarUsuario", new ListarUsuarioController().handle)

router.get("/ListarUnicoUsuario", new ListarUnicoUsuarioController().handle)

router.delete("/DeletarUsuario", new DeletarUsuarioController().handle)