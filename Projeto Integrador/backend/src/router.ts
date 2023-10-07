import { Router } from "express";

//Criar
import { CriarFilmeController } from "./controllers/Filmes/CriarFilmeController";

//Listar
import { ListarFilmeController } from "./controllers/Filmes/ListarFilmeController";

//ListarUnico
import { ListarUnicoFilmeController } from "./controllers/Filmes/ListarUnicoFilmeController";

//Apagar
import { ApagarFilmeController } from "./controllers/Filmes/ApagarFilmeController";

//Alterar
import { AlterarFilmeController } from "./controllers/Filmes/AlterarFilmeController";

const router = Router()

//Criar
router.post("/CriarFilmes", new CriarFilmeController().handle)

//Listar
router.get("/ListarFilmes", new ListarFilmeController().handle)

//ListarUnico
router.get("/ListarUnicoFilmes", new ListarUnicoFilmeController().handle)

//Apagar
router.delete("/ApagarFilmes", new ApagarFilmeController().handle)

//Alterar
router.put("/AlterarFilmes", new AlterarFilmeController().handle)



export { router }