import { Router } from "express";

//Criar uma constante chamada "router" que ira receber as funcionalidades do Router
export const router = Router()

import { LoginController } from "./Controllers/Login/LoginController";

router.post("/Login", new LoginController().handle)