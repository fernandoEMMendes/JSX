//Criação de uma router para utilizar as funcionalidades do Router Express
import { Router } from "express";
import { CriarFilmeController } from "./controllers/Filmes/CriarFilmeController";
const router = Router()

router.post('/CriarFilmes', new CriarFilmeController().handle)


export { router }