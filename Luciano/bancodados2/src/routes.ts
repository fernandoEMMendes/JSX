import { Router } from "express";

import {CriarUsuarioController} from './controllers/Usuarios/CriarUsuarioController'
import{CriarUsuarioNovoController} from'./controllers/Usuarios/CriarUsuarioNovoController'
const router = Router()


router.post('/CriarUsuarios', new CriarUsuarioController().handle)
router.post('/CriarUsuarioNovoController', new CriarUsuarioNovoController().handle)




export {router}