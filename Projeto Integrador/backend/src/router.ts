import { Router } from "express";

//Criar
import { CriarFilmeController } from "./controllers/Filmes/CriarFilmeController";

//Listar
import { ListarFilmeController } from "./controllers/Filmes/ListarFilmeController";

//Apagar
import { ApagarFilmeController } from "./controllers/Filmes/ApagarFilmeController";

const router = Router()

//Criar
router.post("/CriarFilmes", new CriarFilmeController().handle)

//Listar
router.get("/ListarFilmes", new ListarFilmeController().handle)

//Apagar
router.delete("/ApagarFilmes", new ApagarFilmeController().handle)



export { router }