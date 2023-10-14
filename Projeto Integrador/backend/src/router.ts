import { Router } from "express"
import { autenticado } from "./middleware/authToken"

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

//Alterar
import { AlterarUsuarioController } from "./Controllers/Usuario/AlterarUsuarioController"

//Login
import { LoginUsuarioController } from "./Controllers/Usuario/LoginUsuarioController"

//--------------------\\

router.post("/CriarUsuario", new CriarUsuarioController().handle)

router.get("/ListarUsuario", autenticado, new ListarUsuarioController().handle)

router.get("/ListarUnicoUsuario", autenticado, new ListarUnicoUsuarioController().handle)

router.delete("/DeletarUsuario", autenticado, new DeletarUsuarioController().handle)

router.put("/AlterarUsuario", autenticado, new AlterarUsuarioController().handle)

router.post("/Login", new LoginUsuarioController().handle)