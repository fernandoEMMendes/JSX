import { Router } from "express";

//Criar
import { CriarFilmeController } from "./controllers/Filme/CriarFilmeController";
import { CriarUsuarioController } from "./controllers/Usuario/CriarUsuarioController";

//Listar
import { ListarFilmeController } from "./controllers/Filme/ListarFilmeController";
import { ListarUsuarioController } from "./controllers/Usuario/ListarUsuarioController";

//ListarUnico
import { ListarUnicoFilmeController } from "./controllers/Filme/ListarUnicoFilmeController";
import { ListarUnicoUsuarioController } from "./controllers/Usuario/ListarUnicoUsuarioController";

//Apagar
import { ApagarFilmeController } from "./controllers/Filme/ApagarFilmeController";
import { ApagarUsuarioController } from "./controllers/Usuario/ApagarUsuarioController";

//Alterar
import { AlterarFilmeController } from "./controllers/Filme/AlterarFilmeController";
import { AlterarUsuarioController } from "./controllers/Usuario/AlterarUsuarioController";

const router = Router()
import { Autenticado } from "./middleware/jsAuth";

//Criar
router.post("/CriarFilmes", Autenticado, new CriarFilmeController().handle)
router.post("/CriarUsuarios", new CriarUsuarioController().handle)

//Listar
router.get("/ListarFilmes", Autenticado, new ListarFilmeController().handle)
router.get("/ListarUsuarios", Autenticado, new ListarUsuarioController().handle)

//ListarUnico
router.get("/ListarUnicoFilmes", Autenticado, new ListarUnicoFilmeController().handle)
router.get("/ListarUnicoUsuarios", Autenticado, new ListarUnicoUsuarioController().handle)

//Apagar
router.delete("/ApagarFilmes", Autenticado, new ApagarFilmeController().handle)
router.delete("/ApagarUsuarios", Autenticado, new ApagarUsuarioController().handle)

//Alterar
router.put("/AlterarFilmes", Autenticado, new AlterarFilmeController().handle)
router.put("/AlterarUsuarios", Autenticado, new AlterarUsuarioController().handle)


export { router }