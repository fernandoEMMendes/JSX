import { Router } from "express";
import multer from 'multer'
import uploadConfig from './Config/Multer'
import { isAuth } from './Middleware/isAuth'

const upload = multer(uploadConfig.upload('./tmp'))
//Criar uma constante chamada "router" que ira receber as funcionalidades do Router
export const router = Router()

import { LoginController } from "./Controllers/Login/LoginController";
import { CriarUsuarioController } from "./Controllers/Usuario/CriarUsuarioController";
import { CriarCategorias } from "./Controllers/Categoria/CriarCategoriaController";
import { CriarProdutos } from "./Controllers/Produto/CriarProdutoController";
import { ListarCategoriaController } from "./Controllers/Categoria/ListarCategoriaController";

router.post("/Login", new LoginController().handle)

router.post("/CriarUsuario", new CriarUsuarioController().handle)

router.post('/CriarProduto', isAuth, upload.single('file'), new CriarProdutos().handle)

router.post('/CriarCategoria', isAuth, new CriarCategorias().handle)
router.get("/ListarCategoria", new ListarCategoriaController().handle)