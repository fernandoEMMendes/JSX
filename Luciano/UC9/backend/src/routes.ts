import { Router } from "express";

//Criar uma constante chamada "router" que ira receber as funcionalidades do Router
export const router = Router()

import { LoginController } from "./Controllers/Login/LoginController";
import { CriarUsuarioController } from "./Controllers/Usuario/CriarUsuarioController";

router.post("/Login", new LoginController().handle)
router.post("/CriarUsuario", new CriarUsuarioController().handle)